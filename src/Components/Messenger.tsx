import React, { useState, useEffect } from "react";
import "./Messenger.css";
import { getFileName } from "../Functions/getFileName";
import { makeRequest } from "../Functions/makeRequest";
import { Input } from "../Inputs/Input";
import { Button } from "../Inputs/Button";

export const Messenger: React.FC = () => {
  const [idInstance, setIdInstance] = useState<string>("");
  const [apiToken, setApiToken] = useState<string>("");
  const [numPhone, setNumPhone] = useState<string>("");
  const [textMessage, setTextMessage] = useState<string>("");
  const [urlFile, setUrlFile] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    getFileName(urlFile, setFileName);
  }, [urlFile]);

  const getSettings = async () => {
    const url = `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiToken}`;
    await makeRequest({ url, method: "GET", setUseState: setAnswer });
  };

  const getStateInstance = async () => {
    const url = `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiToken}`;
    await makeRequest({ url, method: "GET", setUseState: setAnswer });
  };

  const sendMessage = async () => {
    const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiToken}`;
    const body = {
      chatId: `${numPhone}@c.us`,
      message: textMessage,
    };
    await makeRequest({ url, method: "POST", setUseState: setAnswer, body });
    setTextMessage("");
  };

  const sendFileByUrl = async () => {
    const url = `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiToken}`;
    const body = {
      chatId: `${numPhone}@c.us`,
      urlFile: urlFile,
      fileName: fileName,
    };
    await makeRequest({ url, method: "POST", setUseState: setAnswer, body });
    setUrlFile("");
  };

  return (
    <div className="wrapper">
      <div className="left__side side">
        <Input
          className="input"
          value={idInstance}
          onChange={(e) => setIdInstance(e.target.value)}
          placeholder="IdInstance"
          type="text"
        />
        <Input
          className="input"
          value={apiToken}
          onChange={(e) => setApiToken(e.target.value)}
          placeholder="ApiTokenInstance"
          type="text"
        />
        <Button className="button" onClick={getSettings}>
          getSettings
        </Button>
        <Button className="button" onClick={getStateInstance}>
          getStateInstance
        </Button>
        <div className="box">
          <Input
            className="input"
            value={numPhone}
            onChange={(e) => setNumPhone(e.target.value)}
            placeholder="Phone number"
            type="text"
          />
          <Input
            className="input"
            type="text"
            placeholder="Type a message"
            value={textMessage}
            onChange={(e) => setTextMessage(e.target.value)}
          />
          <Button className="button" onClick={sendMessage}>
            sendMessage
          </Button>
        </div>
        <div className="box">
          <Input
            className="input"
            value={numPhone}
            onChange={(e) => setNumPhone(e.target.value)}
            placeholder="Phone number"
            type="text"
          />
          <Input
            className="input"
            type="text"
            placeholder="File URL"
            value={urlFile}
            onChange={(e) => setUrlFile(e.target.value)}
          />
          <Button className="button" onClick={sendFileByUrl}>
            sendFileByUrl
          </Button>
        </div>
      </div>
      <div className="right__side side">
        <h2 className="title">Ответ:</h2>
        <textarea readOnly className="response" value={answer} />
      </div>
    </div>
  );
};

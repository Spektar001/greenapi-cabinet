import { MakeRequestProps } from "../Types/types";

export const makeRequest = async ({
  url,
  method,
  body,
  setUseState,
}: MakeRequestProps) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    setUseState(JSON.stringify(data, null, " "));
    console.log(response.status)
  } catch (error) {
    console.log(error);
  }
};

export const getFileName = (
  url: string,
  setUseState: React.Dispatch<React.SetStateAction<string>>
) => {
  let lastElement = url.split("/");
  return setUseState(lastElement[lastElement.length - 1]);
};

export const splitStringByCommas = (inputString?: string) => {
    if (!inputString) return null;
  return inputString.split(',').map((str) => str.trim());
};

export const joinArrayWithCommasNoSpace = (stringArray: string[]) => {
  return stringArray.join(',');
};

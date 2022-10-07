export const splitString = (name, setStringAvatar) => {
  let strArr = name;
  strArr = strArr.split(" ");

  if (strArr.length === 2 && strArr[1].length > 0) {
    setStringAvatar(`${name.split(" ")[0][0]} ${name.split(" ")[1][0]}`);
  } else {
    setStringAvatar(`${name.split(" ")[0][0]}`);
  }
};

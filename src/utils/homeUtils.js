export const splitString = (name, setName) => {
  if (name) {
    let strArr = name;
    strArr = strArr.split(" ");
    if (strArr.length === 2 && strArr[1].length > 0) {
      return setName(`${name.split(" ")[0][0]} ${name.split(" ")[1][0]}`);
    } else {
      return setName(`${name.split(" ")[0][0]}`);
    }
  }
};

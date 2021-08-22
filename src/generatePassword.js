const generatePassword = (valueUppercase, valueLowercase, valueSpecial) => {
  let password = "";
  for (let i = 0; i < valueLowercase; i++) {
    password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  for (let i = 0; i < valueUppercase; i++) {
    password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  for (let i = 0; i < valueSpecial; i++) {
    password += String.fromCharCode(Math.floor(Math.random() * 10) + 33);
  }
  return password
    .split("")
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .join("");
};

export default generatePassword;

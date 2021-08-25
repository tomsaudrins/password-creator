import Selector from "./Selector";
import PasswordField from "./PasswordField";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import generatePassword from "../Utils/generatePassword";
import Button from "./Button";

const Form = () => {
  const [password, setPassword] = useState("");
  const [valueUppercase, setValueUppercase] = useState("5");
  const [valueLowercase, setValueLowercase] = useState("7");
  const [valueSpecial, setValueSpecial] = useState("2");

  const generateButtonClick = (e) => {
    e.preventDefault();
    setPassword(
      generatePassword(password, valueUppercase, valueLowercase, valueSpecial)
    );
  };

  useEffect(() => {
    let password = generatePassword(
      valueUppercase,
      valueLowercase,
      valueSpecial
    );
    setPassword(password);
  }, [valueLowercase, valueUppercase, valueSpecial]);

  return (
    <form method="POST">
      <PasswordField password={password} setPassword={setPassword} />
      <Selector
        type="uppercase"
        value={valueUppercase}
        setValue={setValueUppercase}
        setPassword={setPassword}
      />
      <Selector
        type="lowercase"
        value={valueLowercase}
        setValue={setValueLowercase}
        setPassword={setPassword}
      />
      <Selector
        type="special"
        value={valueSpecial}
        setValue={setValueSpecial}
        setPassword={setPassword}
      />
      <Button
        text="Generate a new password"
        onClick={(e) => generateButtonClick(e)}
      />
      <Footer />
    </form>
  );
};
export default Form;

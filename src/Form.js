import Selector from "./Selector";
import PasswordField from "./PasswordField";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import generatePassword from "./generatePassword";

const Form = () => {
  const [password, setPassword] = useState("");
  const [valueUppercase, setValueUppercase] = useState("5");
  const [valueLowercase, setValueLowercase] = useState("7");
  const [valueSpecial, setValueSpecial] = useState("2");

  useEffect(() => {
    let password = generatePassword(
      valueUppercase,
      valueLowercase,
      valueSpecial
    );
    setPassword(password);
  }, [valueLowercase, valueUppercase, valueSpecial]);

  return (
    <form>
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
      <Footer />
    </form>
  );
};
export default Form;

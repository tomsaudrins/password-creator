import Selector from './Selector'
import PasswordField from './PasswordField'
import {useState, useEffect} from 'react'

const Form = () => {
    const [password, setPassword] = useState('');
    const [valueUppercase, setValueUppercase] = useState("5")
    const [valueLowercase, setValueLowercase] = useState("7")
    const [valueSpecial, setValueSpecial] = useState("2")
    
    const generatePassword = () => {
        return "123"
    }

    useEffect(() => {
        let password = generatePassword();
        setPassword(password);
    }, [valueLowercase, valueUppercase, valueSpecial]);

    return (
        <form action="">
            <PasswordField password={password}/>
            <Selector type="uppercase" value={valueUppercase} setValue={setValueUppercase} setPassword={setPassword}/>
            <Selector type="lowercase" value={valueLowercase} setValue={setValueLowercase} setPassword={setPassword}/>
            <Selector type="special" value={valueSpecial} setValue={setValueSpecial} setPassword={setPassword}/>
        </form>
    )
}
export default Form;


const PasswordField = ({password}) => {
   

    return (
        <div>
            <input className="password-input-field max-width" type="text" value={password} disabled/>
        </div>
    )
}

export default PasswordField
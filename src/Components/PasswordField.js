const PasswordField = ({ password, setPassword }) => {
  return (
    <button
      className="password-input-field max-width"
      value={password}
      onClick={(e) => {
        e.preventDefault();
        console.log(e.target.value);
        if (password !== "Copied to clipboard!") {
          navigator.clipboard.writeText(password);
          setPassword("Copied to clipboard!");
          setTimeout(() => {
            setPassword(password);
          }, 800);
        }
      }}
    >
      {password}
    </button>
  );
};

export default PasswordField;

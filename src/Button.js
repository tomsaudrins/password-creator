const Button = ({ text, onClick }) => {
  return (
    <button className="generateButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

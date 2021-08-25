const Social = ({ name, Icon, href }) => {
  return (
    <a href={href} className="social" key={name}>
      <Icon />
      <span className="social-name">{name}</span>
    </a>
  );
};

export default Social;

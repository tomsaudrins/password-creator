const Social = ({ name, Icon, href }) => {
  return (
    <a href={href} class="social">
      <Icon />
      <span className="social-name">{name}</span>
    </a>
  );
};

export default Social;

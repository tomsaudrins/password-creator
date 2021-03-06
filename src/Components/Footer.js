import { SiLinkedin, SiGithub } from "react-icons/si";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="footer">
      <Social
        name="Github"
        href="https://github.com/tomsaudrins/password-creator"
        Icon={SiGithub}
      />
      <Social
        name="Linkedin"
        href="https://www.linkedin.com/in/toms-audrins/"
        Icon={SiLinkedin}
      />
    </div>
  );
};

export default Footer;

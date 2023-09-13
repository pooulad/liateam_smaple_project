import footer_logo from "../../assets/images/footer_logo.png";
import { Link } from "react-router-dom";
import "./styles/pageFooter.css";
import { dictionary } from "../../dictionary";
import AparatIcon from "../../assets/ts/AparatIcon";
import InstagramIcon from "../../assets/ts/InstagramIcon";
import TelegramIcon from "../../assets/ts/TelegramIcon";

export default function PageFooter() {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_top">
          <div>
            <img className="footer_logo" src={footer_logo} alt="logo" />
          </div>
          <p>
            <span>{dictionary.footer.copyright.section1}</span>
            &nbsp;
            <strong>{dictionary.footer.copyright.section2}</strong>
            <span>{dictionary.footer.copyright.section3}</span>
          </p>
          <div className="footer_social">
            <p>{dictionary.footer.subscribe_text}</p>
            <div className="footer_icons">
              <Link to={"#"}>
                <InstagramIcon />
              </Link>
              <Link to={"#"}>
                <TelegramIcon />
              </Link>
              <Link to={"#"}>
                <AparatIcon />
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer_bottom">
          <p>{dictionary.footer.bottom.policy}</p>
          <p>{dictionary.footer.bottom.call}</p>
        </div>
      </div>
    </footer>
  );
}

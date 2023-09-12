import logo from "../../assets/images/loader.png";
import "../Styles/common.css";

function Intro() {
  return (
    <div className="loader">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Intro;

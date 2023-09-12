import { Typography } from "@mui/material";
import { dictionary } from "../../dictionary/index";
import logo from "../../assets/images/loader.png";
import "../Styles/common.css";

function Intro() {
  return (
    <div className="loader">
      <img src={logo} alt="logo" />
      <Typography marginY={1}>{dictionary.gettingAssets}</Typography>
    </div>
  );
}

export default Intro;

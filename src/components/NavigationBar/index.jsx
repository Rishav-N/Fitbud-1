import "./style.scss";
import logo from "assets/topLogo.png";
import { NavLink, useHistory } from "react-router-dom";

const VideoNavBar = (props) => {
  const history = useHistory();

  return (
    <nav className="videoNavBar">
      <NavLink to="/home">
        <img src={logo} alt="Couch Potato Logo" className="logo" />
      </NavLink>
      <span className="exercisePartner">Exercising</span>
      <div className="videoNavBarRight">
        <span className="exerciseTimer">
          {Math.floor(props.currentTime / 60)}m {props.currentTime % 60}s / 60m
        </span>
        <NavLink to="/profile">
          <button className="endSessionButton">Stop Working Out</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default VideoNavBar;

import { Link } from "react-router-dom";

import rect from "../../assets/rectangecol.svg";
import mascot from "../../assets/mascot.png";

import "./style.scss";
import { auth } from "../../firebase";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="info">
        <h1 className="projectName" onClick={() => auth.signOut()}>
         Fitbud
        </h1>
        <div className="description">
          <p>Workout with a buddy!</p>
          <p>Powered by machine learning</p>
          <p>Get AI assisted support</p>
        </div>
        <Link to="/register">
          <button className="joinButton">Join Now</button>
        </Link>
      </div>
      <img src={rect} alt="rectangle" className="slantedRectangle" />
      <img src={mascot} alt="CouchPotatoMascot" className="mascot" />
    </div>
  );
};

export default Landing;

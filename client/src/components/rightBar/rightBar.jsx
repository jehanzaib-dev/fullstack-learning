import "./rightBar.css";
import { useLocation } from "react-router-dom";
import {ProfileRightBar} from './profileRightBar.jsx';
import {HomeRightBar} from './homeRightBar.jsx';

const RightBar = () => {
  const location = useLocation();

  const isProfilePage = location.pathname.includes("/profile");

  return (
    <div className="rightBar">

      {isProfilePage ? <ProfileRightBar /> : <HomeRightBar />}

    </div>
  );
};

export default RightBar;
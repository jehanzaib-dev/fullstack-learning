import "./leftBar.css";
import { Link, useNavigate } from "react-router-dom";
import {useContext} from 'react';
import {AuthContext} from '../../context/authContext.js';
import { Logout } from "../../context/authActions";


const LeftBar = () => {

  const navigate = useNavigate();

  const {user, dispatch}=useContext(AuthContext);

  const handleLogout = () => {
    dispatch(Logout());
    navigate("/login");
  };

  return (
    <div className="leftBar">
      
      {/* USER INFO */}
      <Link to={`/profile/${user?.username}`}>
      <div className="leftBarProfile">
        <img
          src={user?.profilePic || "/assets/person/noAvatar.jpeg"}
          alt="profile"
          className="leftBarImg"
        />
        <div className="leftBarUserInfo">
          <h4>{user?.username}</h4>
          <p>View your profile</p>
        </div>
      </div>
    </Link>

      {/* NAVIGATION */}
      <div className="leftBarMenu">

        <Link to="/" className="leftBarItem">
          🏠 Home
        </Link>

        <Link to={`/profile/${user?.username}`} className="leftBarItem">
          👤 Profile
        </Link>

        <div className="leftBarItem">
          🔔 Notifications
        </div>

        <div className="leftBarItem">
          💬 Messages
        </div>

        <div className="leftBarItem">
          ⚙️ Settings
        </div>

      </div>

      {/* LOGOUT */}
      <div className="leftBarLogout">
        <button onClick={handleLogout}>Logout</button>
      </div>

    </div>
  );
};

export default LeftBar;

import "./topbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext.js";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../context/authActions";

export default function Topbar() {

  const { user, dispatch } = useContext(AuthContext);
  const navigate=useNavigate();

  const handleLogout = () => {
    dispatch(Logout());
    navigate('/login');
  };

  return (

    <div className="topbarContainer">

      {/* Left Section */}
      <div className="topbarLeft">

        <span className="logo">
          SocialSphere
        </span>

      </div>

      {/* Center Section */}
      <div className="topbarCenter">

        <div className="searchBar">

          <input
            type="text"
            placeholder="Search friends, posts..."
            className="searchInput"
          />

        </div>

      </div>

      {/* Right Section */}
      <div className="topbarRight">

        <div className="topbarLinks">

          <span className="topbarLink">
            Homepage
          </span>

          <span className="topbarLink">
            Timeline
          </span>

        </div>

        <div className="topbarIcons">

          <div className="topbarIconItem">
            <span>🔔</span>
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconItem">
            <span>💬</span>
            <span className="topbarIconBadge">5</span>
          </div>

        </div>

        <div className="topbarProfile">

          <img
            src="./logo512.png"
            alt="profile"
            className="topbarImg"
          />

          <span className="topbarUsername">
            {user?.username}
          </span>

          <button
            className="logoutBtn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}
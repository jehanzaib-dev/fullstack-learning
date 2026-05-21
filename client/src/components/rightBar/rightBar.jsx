import "./rightbar.css";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext.js";

export default function RightBar() {

  const { user } = useContext(AuthContext);

  const location = useLocation();

  const isProfilePage = location.pathname.includes("/profile");

  return (
    <div className="rightBar">

      <div className="rightbarWrapper">

        {isProfilePage
          ? <ProfileRightBar user={user} />
          : <HomeRightBar />
        }

      </div>

    </div>
  );
}

/* PROFILE RIGHTBAR */

const ProfileRightBar = ({ user }) => {

  return (
    <>

      <h4 className="rightBarTitle">
        User Information
      </h4>

      <div className="rightBarDataCntnr">
        <span className="rightBarDataKey">
          City:
        </span>

        <span className="rightBarDataValue">
          {user?.city || "-"}
        </span>
      </div>

      <div className="rightBarDataCntnr">
        <span className="rightBarDataKey">
          From:
        </span>

        <span className="rightBarDataValue">
          {user?.from || "-"}
        </span>
      </div>

      <div className="rightBarDataCntnr">
        <span className="rightBarDataKey">
          Relationship:
        </span>

        <span className="rightBarDataValue">
          {
            user?.relationship === 1
              ? "Single"
              : user?.relationship === 2
              ? "Married"
              : "-"
          }
        </span>
      </div>

      <h4 className="userFriendsHeading">
        User Friends
      </h4>

      <div className="userFollowingsCntnr">

        {/* FRIENDS WILL COME LATER */}

      </div>

    </>
  );
};

/* HOME RIGHTBAR */

const HomeRightBar = () => {

  return (
    <>

      <div className="birthdayContainer">

        <img
          src="/assets/gift.png"
          alt=""
          className="birthdayImg"
        />

        <span className="birthdayReminder">
          <b>Jacky Short</b> and <b>3 others</b> have birthdays today.
        </span>

      </div>

      <img
        src="/assets/ad.png"
        alt=""
        className="rightbarAd"
      />

      <h4 className="onlineTitle">
        Online Friends
      </h4>

      <ul className="onlineFriendsList">

        {/* ONLINE USERS LATER */}

      </ul>

    </>
  );
};
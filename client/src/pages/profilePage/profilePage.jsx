import "./profilePage.css";

import Topbar from "../../components/topbar/topbar.jsx";
import SideBar from "../../components/sidebar/sidebar.jsx";
import Feed from "../../components/feed/feed.jsx";
import RightBar from "../../components/rightbar/rightbar.jsx";

import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import {followUserCall, unfollowUserCall} from '../../apiCalls/apiCalls.js';
import {Follow, UnFollow} from '../../context/authActions.js';
import axios from 'axios';

export default function Profile() {

  const { user: currentUser, dispatch } = useContext(AuthContext);
const [followed, setFollowed] = useState(false);
const [profileUser, setProfileUser] = useState(null);
  const { username } = useParams();
  const handleFollow = async () => {
  try {
    if (followed) {
      await unfollowUserCall(profileUser._id, currentUser._id);
      setFollowed(false);
    } else {
      await followUserCall(profileUser._id, currentUser._id);
      setFollowed(true);
    }
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `/api/users?username=${username}`
      );
      setProfileUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchUser();
}, [username]);


  return (

    <>
      <Topbar />

      <div className="profile">

        <SideBar />

        <div className="profileRight">

          <div className="profileRightTop">

            <div className="profileCover">

              <img
                className="profileCoverImg"
                src="/assets/post/3.jpeg"
                alt=""
              />

              <img
                className="profileUserImg"
                src="/assets/person/7.jpeg"
                alt=""
              />

            </div>
            <button className="followButton" onClick={handleFollow}>
              {followed ? "Unfollow" : "Follow"}
            </button>

            <div className="profileInfo">

              <h4 className="profileInfoName">
                {username}
              </h4>

              <span className="profileInfoDesc">
                Hello my friends!
              </span>

            </div>

          </div>

          <div className="profileRightBottom">

            <Feed username={username} />

            <RightBar />

          </div>

        </div>

      </div>
    </>
  );
}
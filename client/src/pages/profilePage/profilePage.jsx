import "./profilePage.css";

import Topbar from "../../components/topbar/topbar.jsx";
import SideBar from "../../components/sidebar/sidebar.jsx";
import Feed from "../../components/feed/feed.jsx";
import RightBar from '../../components/rightBar/rightBar.jsx';
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import {followUserCall, getOneUserCall, unfollowUserCall, uploadImageCall, updateUserCall} from '../../apiCalls/apiCalls.js';
import {Follow, UnFollow, UpdateUser} from '../../context/authActions.js';
import axios from 'axios';

export default function Profile() {

  const { user:currentUser, dispatch } = useContext(AuthContext);
  const [file, setFile] = useState(null);
const [uploadType, setUploadType] = useState("");
const [followed, setFollowed] = useState(false);
const [profileUser, setProfileUser] = useState(null);
  const { username } = useParams();

  const handleUpload = async () => {

  if (!file) return;

  try {

    const data = new FormData();

    const filename =
      Date.now() + file.name;

    data.append("file", file);

    const uploadRes =
      await uploadImageCall(data);

    const imageUrl =
      uploadRes.filename;

    const updatedUser = await updateUserCall(
      currentUser._id,
      {
        [uploadType]: imageUrl,
      }
    );

    dispatch(UpdateUser(updatedUser));

    setFile(null);
    setUploadType("");

  } catch (err) {

    console.log(err);

  }
};
useEffect(() => {
  const fetchUser = async () => {
    try {
      const data =await getOneUserCall(username); 
      setProfileUser(data);
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
            <input
  type="file"
  id="profileInput"
  style={{ display: "none" }}
  onChange={(e) => {
    setFile(e.target.files[0]);
    setUploadType("profilePic");
  }}
/>

<input
  type="file"
  id="coverInput"
  style={{ display: "none" }}
  onChange={(e) => {
    setFile(e.target.files[0]);
    setUploadType("coverPic");
  }}
/>

              <img
                className="profileCoverImg"
                src={currentUser.coverPic}
                alt=""
              />
              <label htmlFor="coverInput" className="editCoverBtn">
    Change Cover
  </label>

              <img
                className="profileUserImg"
                src={currentUser.profilePic}
                alt=""
              />
            <label htmlFor="profileInput" className="editProfileBtn">
    Change Photo
  </label>  

            </div>
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

            <RightBar user={profileUser}/>

          </div>

        </div>

      </div>
    </>
  );
}
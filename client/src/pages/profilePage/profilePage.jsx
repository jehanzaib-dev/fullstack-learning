import "./profilePage.css";

import Topbar from "../../components/topbar/topbar.jsx";
import LeftBar from "../../components/leftBar/leftBar.jsx";
import Feed from "../../components/feed/feed.jsx";
import RightBar from "../../components/rightBar/rightBar.jsx";

import { useParams } from "react-router-dom";

export default function Profile() {

  const { username } = useParams();

  return (

    <>
      <Topbar />

      <div className="profile">

        <LeftBar />

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
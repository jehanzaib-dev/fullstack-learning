import { useContext, useState } from "react";
import "./postCard.css";
import {format} from 'timeago.js';
import {AuthContext} from '../../context/authContext.js';
import { LikePostCall } from "../../apiCalls/apiCalls.js";

export default function PostCard({post}) {

  const {user}=useContext(AuthContext);
  const [like, setLike]=useState(post.likes.length);
  const [isLiked, setIsLiked]=useState(post.likes.includes(user._id));
  const [liking, setLiking]=useState(false);
  const [backendError, setBackendError]=useState(null);

  const handleLike = async () => {
    if(liking) return;
    setBackendError(null);
  try {
    setLiking(true);
    await LikePostCall(post._id, user._id);

    setLike(isLiked ? like - 1 : like + 1);

    setIsLiked(!isLiked);

  } catch (err) {
    console.log(err);
    const errorMessage=err.response?.data?.message || "can't connect to server";
    setBackendError(errorMessage);
  }
  finally{
    setLiking(false);
  }
};

  return (

    <div className="postCard">

      {/* Top Section */}
      <div className="postTop">

        <div className="postTopLeft">

          <img
            src={post.user?.profilePicture || "/assets/person/noAvatar.jpeg"}
            alt="profile"
            className="postProfileImg"
          />

          <div className="postUserInfo">

            <span className="postUsername">
              {post.user?.username || "user"}
            </span>

            <span className="postDate">
              {format(post.createdAt)}
            </span>

          </div>

        </div>

        <div className="postTopRight">

          <span className="postMore">
            ...
          </span>

        </div>

      </div>

      {/* Center Section */}
      <div className="postCenter">

        <p className="postText">
          {post.desc}
        </p>
        {
          post.img && (
          <img
          src={post.img} alt="postImage"
          className="postImg"
        />
          )
        }
        

      </div>

      {/* Bottom Section */}
      <div className="postBottom">

        <div className="postBottomLeft">

          <img className="likeIcon" src="/assets/like.png" alt="" onClick={handleLike}/>

          <span className="postLikeCount">
            {
              liking ? "updating...":
              <>
              <strong>{like}</strong> people liked it
              </>
            }
          </span>

        </div>

        <div className="postBottomRight">

          <span className="postCommentText">
            4 comments
          </span>

        </div>

      </div>
      <div className="errorText">
        {
          backendError && <p>{backendError}</p>
        }
      </div>

    </div>
  );
}
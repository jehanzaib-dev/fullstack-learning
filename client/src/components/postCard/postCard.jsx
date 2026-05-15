import "./postCard.css";
import {format} from 'timeago.js';

export default function PostCard({post}) {

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

          <img className="likeIcon" src="/assets/like.png" alt=""/>

          <span className="postLikeCount">
            {post.likes?.length || 0} likes
          </span>

        </div>

        <div className="postBottomRight">

          <span className="postCommentText">
            4 comments
          </span>

        </div>

      </div>

    </div>
  );
}
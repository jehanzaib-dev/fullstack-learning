import "./postCard.css";

export default function PostCard({post}) {

  return (

    <div className="postCard">

      {/* Top Section */}
      <div className="postTop">

        <div className="postTopLeft">

          <img
            src={post.img}
            alt="profile"
            className="postProfileImg"
          />

          <div className="postUserInfo">

            <span className="postUsername">
              {post.username}
            </span>

            <span className="postDate">
              5 mins ago
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

        <img
          src={post.img} alt="postImage"
          className="postImg"
        />

      </div>

      {/* Bottom Section */}
      <div className="postBottom">

        <div className="postBottomLeft">

          <span className="likeIcon">
            ❤️
          </span>

          <span className="postLikeCount">
            12 likes
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
import "./postCard.css";

export default function PostCard() {

  return (

    <div className="postCard">

      {/* Top Section */}
      <div className="postTop">

        <div className="postTopLeft">

          <img
            src="./logo512.png"
            alt="profile"
            className="postProfileImg"
          />

          <div className="postUserInfo">

            <span className="postUsername">
              Jehanzaib
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
          Building my first fullstack social media app 🚀
        </p>

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="post"
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
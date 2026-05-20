import "./createPost.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext.js";
import { CreatePostCall } from "../../apiCalls/apiCalls.js";


export default function CreatePost({onPostCreated}) {

  // Current logged-in user
  const { user } = useContext(AuthContext);

  // Controlled textarea state
  const [desc, setDesc] = useState("");

  // Optional loading state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [FrontendError, setFrontendError]=useState(null);
  const [backendError, setBackendError]=useState(null);

  // Form submit handler
  const handleShare = async (e) => {

    // Prevent page reload
    e.preventDefault();
	setFrontendError(null);
	setBackendError(null);

    // Frontend validation
    if (!desc.trim()) {
      setFrontendError("Post cannot be empty");
      return;
    }

    // Build post payload
    const newPost = {
      userId: user._id,
      desc: desc,
    };

    try {

      // Start loading
      setIsSubmitting(true);

      // Send request to backend
      await CreatePostCall(newPost);
      onPostCreated();

      setDesc("");

      // Optional feedback
      console.log("Post created successfully");

    } catch (err) {
		console.log(err);
		const errorMessage=err.response?.data?.message || "Server not running please check";
		setBackendError(errorMessage);

    } finally {

      // Stop loading regardless of success/failure
      setIsSubmitting(false);
    }
  };

  return (
    <div className="createPostCard">
    <form
      className="createPostForm"
      onSubmit={handleShare}
    >
      <div className="topSection">

        <img
          src={user?.profilePicture || '/assets/person/noAvatar.jpeg'}
          alt="profile"
          className="profilePic"
        />

        <textarea
          placeholder={`What's on your mind ${user?.username}?`}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="postInput"
        />

      </div>

      <hr className="createPostDivider"/>

      {/* Bottom Section */}
      <div className="bottomSection">

        <div className="optionsCntnr">

          <span className="postOption">Photo</span>
          <span className="postOption">Document</span>
          <span className="postOption">Location</span>
          <span className="postOption">Feeling</span>

        </div>

        <div className="btnCntnr">

          <button
            type="submit"
            className="shareButton"
            disabled={isSubmitting || !desc.trim()}
          >
            {isSubmitting ? "Sharing..." : "Share"}
          </button>

        </div>

      </div>
      <div className="errorText">
		{
			FrontendError ? <p>{FrontendError}</p>: backendError && <p>{backendError}</p>
		}
  </div>
    </form>
  </div>
  );
}
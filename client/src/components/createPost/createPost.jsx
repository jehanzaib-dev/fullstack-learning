import "./createPost.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext.js";
import { CreatePostCall } from "../../apiCalls/apiCalls.js";


export default function CreatePost() {

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

      // Clear textarea after success
      setDesc("");

      // Optional feedback
      console.log("Post created successfully");

    } catch (err) {
		console.log(err);
		const errorMessage=err.response?.data?.message || 'Unable to create post. Please try again';
		setBackendError(errorMessage);

    } finally {

      // Stop loading regardless of success/failure
      setIsSubmitting(false);
    }
  };

  return (

    <form
      className="createPostCard"
      onSubmit={handleShare}
    >
      <div className="topSection">

        <img
          src="./logo512.png"
          alt="profile"
          className="profilePic"
        />

        <textarea
          placeholder={`What's on your mind ${user.username}?`}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="postInput"
        />

      </div>

      <hr />

      {/* Bottom Section */}
      <div className="bottomSection">

        <div className="optionsCntnr">

          <span>Photo</span>
          <span>Document</span>
          <span>Location</span>
          <span>Feeling</span>

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
		{
			FrontendError ? <p>{FrontendError}</p>: backendError && <p>{backendError}</p>
		}
    </form>
  );
}
import "./feed.css";
import { useEffect, useState } from "react";
import PostCard from "../postCard/postCard.jsx";

import { getUserPostsCall,getAllPostsCall } from "../../apiCalls/apiCalls.js";

export default function Feed({username}) {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [backendError, setBackendError] = useState(null);

  useEffect(() => {

    const fetchPosts = async () => {

      try {
        setBackendError(null);
        setIsLoading(true);

        const data = username ? await getUserPostsCall(username): await getAllPostsCall();

        setPosts(data);

      } catch (err) {

        console.log(err);

        const errorMessage =
          err.response?.data?.message ||
          "Server not running please check";

        setBackendError(errorMessage);

      } finally {

        setIsLoading(false);
      }
    };

    fetchPosts();

  }, [username]);

  return (
    <div className="feed">

      {
        isLoading && (
          <p className="feedMessage">
            Loading posts...
          </p>
        )
      }

      {
        backendError && (
          <p className="feedMessage errorMessage">
            {backendError}
          </p>
        )
      }

      <div className="postsContainer">

        {
          posts.map((post) => (
            <PostCard
              key={post._id}
              post={post} setPosts={setPosts}
            />
          ))
        }

      </div>

    </div>
  );
}
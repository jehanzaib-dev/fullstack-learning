import "./feed.css";
import { useEffect, useState } from "react";

import CreatePost from "../createPost/createPost.jsx";
import PostCard from "../postCard/postCard.jsx";

import { getAllPostsCall } from "../../apiCalls/apiCalls.js";

export default function Feed() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [backendError, setBackendError] = useState(null);

  useEffect(() => {

    const fetchPosts = async () => {

      try {

        setIsLoading(true);

        const data = await getAllPostsCall();

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

  }, []);

  return (
    <div className="feed">

      <CreatePost setPosts={setPosts} />

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
              post={post}
            />
          ))
        }

      </div>

    </div>
  );
}
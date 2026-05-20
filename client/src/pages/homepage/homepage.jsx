import './homepage.css';
import Topbar from "../../components/topbar/topbar.jsx";
import LeftBar from '../../components/leftBar/leftBar.jsx';
import CreatePost from '../../components/createPost/createPost.jsx';
import Feed from "../../components/feed/feed.jsx";
import RightBar from "../../components/rightBar/rightBar.jsx";
import { useState } from "react"

export const HomePage=()=>{

    const [refreshPosts, setRefreshPosts] = useState(false)

  const handlePostCreated = () => {
    setRefreshPosts((prev) => !prev)
  }

    return(
        <div className="page">
        <Topbar/>
            <div className="mainSection">
                <LeftBar/>
                <div className="mainCenter">
                    <CreatePost onPostCreated={handlePostCreated}/>
                    <Feed refreshPosts={refreshPosts}/>
                </div>
                <RightBar/>
            </div>
        </div>
    )
}
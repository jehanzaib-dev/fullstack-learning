import './homepage.css';
import Topbar from "../../components/topbar/topbar.jsx";
import LeftBar from '../../components/leftBar/leftBar.jsx';
import CreatePost from '../../components/createPost/createPost.jsx';
import Feed from "../../components/feed/feed.jsx";
import RightBar from "../../components/rightBar/rightBar.jsx";

export const HomePage=()=>{

    return(
        <div className="page">
        <Topbar/>
            <div className="mainSection">
                <LeftBar/>
                <div className="mainCenter">
                    <CreatePost/>
                    <Feed/>
                </div>
                <RightBar/>
            </div>
        </div>
    )
}
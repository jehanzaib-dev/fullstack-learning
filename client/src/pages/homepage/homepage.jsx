import './homepage.css';
import Topbar from "../../components/topbar/topbar.jsx";
import LeftBar from '../../components/leftBar/leftBar.jsx';
import Feed from "../../components/feed/feed.jsx";
import RightBar from "../../components/rightBar/rightBar.jsx";

export const HomePage=()=>{

    return(
        <div className="page">
        <Topbar/>
            <div className="mainSection">
                <LeftBar/>
                <Feed/>
                <RightBar/>
            </div>
        </div>
    )
}
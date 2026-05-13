import './feed.css';
import CreatePost from "../createPost/createPost";
import PostCard from "../postCard/postCard";



export default function Feed(){

    return(
        <div className='feed'>
        <CreatePost/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        </div>
    )
}
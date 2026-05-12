import './createPost.css';


export const CreatePost=()=>{

	const handleShare=()=>{
		console.log("post submitted");
	}

return(
 <div className="createPostCard">
   <div className="topSection">
     <img src="./logo512.png" alt="profilepic" className="profilePic"/>
     <input type="text" placeholder="What's in your mind?"/>
   </div>
   <hr/>
   <div className="bottomSection">
   	 <div className="optionsCntnr">
   	 	<span>photo</span>
   	 	<span>document</span>
   	 	<span>location</span>
   	 	<span>address</span>
   	 </div>
   	 <div className="btnCntnr">
   	 	<button className="shareButton" onClick={handleShare}>Share
   	 	</button>
     </div>
   </div>
 </div>
);
}
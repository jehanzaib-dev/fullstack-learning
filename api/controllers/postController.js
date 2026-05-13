import {postModel} from '../models/postModel.js';

export const CreatePost=async(req, res)=>{
	try{
	const newPost=await postModel.create(req.body);
	return res.status(200).json(newPost);
	}
	catch(err){
		console.log("Error occured:", err);
		return res.status(500).json({message:"Unable to post, something went wrong"});
	}
}

export const getPosts = async (req, res) => {

  try {

    const posts = await postModel.find().sort({
      createdAt: -1,
    });

    res.status(200).json(posts);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Unable to fetch posts",
    });
  }
};
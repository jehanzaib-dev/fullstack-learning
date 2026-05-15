import {postModel} from '../models/postModel.js';
import {userModel} from '../models/userModel.js';
import {enrichPost} from '../utils/enrichPost.js';

export const CreatePost=async(req, res)=>{
	try{
	const newPost=await postModel.create(req.body);

const user = await userModel.findById(newPost.userId);

const enrichedPost = await enrichPost(newPost);

res.status(200).json(enrichedPost);
	}
	catch(err){
		console.log("Error occured:", err);
		return res.status(500).json({message:"Unable to connect to database, please check your internet connection"});
	}
}

export const getAllPosts = async (req, res) => {

  try {
    const posts = await postModel.find().sort({ createdAt: -1 });

const enrichedPosts = await Promise.all(
  posts.map((post) => enrichPost(post))
);

res.json(enrichedPosts);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Unable to connect to database, please check your internet connection"
    });
  }
};
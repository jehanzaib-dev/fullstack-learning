import {postModel} from '../models/postModel.js';

export const CreatePost=async(req, res)=>{
	try{
	const newPost=await postModel.create(req.body);	
	return res.status(200).json(newPost);
	}
	catch(err){
		console.log("Error occured:", err);
		return res.status(500).json({message:err.message});
	}
}
import {postModel} from '../models/postModel.js';

export const CreatePost=async(req, res)=>{
	try{
	const newPost=await postModel.create(req.body);
	return res.status(200).json(newPost);
	}
	catch(err){
		console.log("Error occured:", err);
		return res.status(500).json({message:"Unable to connect to database, please check your internet connection"});
	}
}

export const getAllPosts = async (req, res) => {

  try {

    const allPosts = await postModel.find().sort({
      createdAt: -1,
    });

    res.status(200).json(allPosts);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Unable to connect to database, please check your internet connection"
    });
  }
};
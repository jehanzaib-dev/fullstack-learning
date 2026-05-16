import {postModel} from '../models/postModel.js';
import {enrichPost} from '../utils/enrichPost.js';

export const CreatePost=async(req, res)=>{
	try{
	const newPost=await postModel.create(req.body);

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

export const likePost = async (req, res) => {

  try {

    const post = await postModel.findById(req.params.id);

    // check if already liked
    if (post.likes.includes(req.body.userId)) {

      // unlike
      await post.updateOne({
        $pull: { likes: req.body.userId }
      });

      res.status(200).json("Post unliked");

    } else {

      // like
      await post.updateOne({
        $push: { likes: req.body.userId }
      });

      res.status(200).json("Post liked");
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({message:"can't connect to database"});

  }
};

export const deletePost = async (req, res) => {

  try {

    const post = await postModel.findById(req.params.id);

    // ownership check
    if (post.userId === req.body.userId) {

      await post.deleteOne();

      res.status(200).json("Post deleted successfully");

    } else {

      res.status(403).json("You can delete only your own posts");

    }

  } catch (err) {

    res.status(500).json({message:"can't connect to database"});

  }
};
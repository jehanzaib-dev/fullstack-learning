import {userModel} from '../models/userModel.js';

export const getAllUsers=async(req, res)=>{
	try{
		const users=await userModel.find().select('-password');;
		res.status(200).json(users);
	}
	catch(err){
		console.log(err);
		res.status(500).json({message:"Server error"});
	}
}



export const followUser = async (req, res) => {
  try {
    const targetUserId = req.params.id;
    const currentUserId = req.body.currentUserId;

    const user = await userModel.findById(targetUserId);
    const currentUser = await userModel.findById(currentUserId);

    if (!user.followers.includes(currentUserId)) {
      await user.updateOne({ $push: { followers: currentUserId } });
      await currentUser.updateOne({ $push: { following: targetUserId } });
    }

    res.status(200).json("User followed");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const unfollowUser = async (req, res) => {
  try {
    const targetUserId = req.params.id;
    const currentUserId = req.body.currentUserId;

    const user = await userModel.findById(targetUserId);
    const currentUser = await userModel.findById(currentUserId);

    if (user.followers.includes(currentUserId)) {
      await user.updateOne({ $pull: { followers: currentUserId } });
      await currentUser.updateOne({ $pull: { following: targetUserId } });
    }

    res.status(200).json("User unfollowed");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
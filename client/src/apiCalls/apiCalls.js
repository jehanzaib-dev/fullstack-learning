import axios from "axios";

export const RegisterCall=async(userData)=>{
    const response=await axios.post('/auth/register', userData);
    return response.data;
};

export const loginCall = async (userCredentials) => {
  const response = await axios.post("/auth/login", userCredentials);
  return response.data;
};

export const CreatePostCall=async(postData)=>{
  const response=await axios.post('/posts', postData);
  return response.data;
}
import axios from "axios";

export const RegisterCall=async(userData)=>{
    const response=await axios.post('/api/v1/auth/register', userData);
    return response.data;
};

export const loginCall = async (userCredentials) => {
  const response = await axios.post("/api/v1/auth/login", userCredentials);
  return response.data;
};

export const CreatePostCall=async(postData)=>{
  const response=await axios.post('/api/v1/posts', postData);
  return response.data;
}

export const getAllPostsCall=async()=>{
  const response=await axios.get('/api/v1/posts');
  return response.data;
}
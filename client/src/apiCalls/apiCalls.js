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

export const LikePostCall = async (postId, userId) => {

    const response = await axios.put(
      `/api/v1/posts/${postId}/like`,
      { userId }
    );
    return response.data;
  };

  export const DeletePostCall = async (postId, userId) => {

    const response = await axios.delete(
      `/api/v1/posts/${postId}`,
      {
        data: { userId }
      }
    );

    return response.data;
  };

 export const UpdatePostCall = async (
  postId,
  updatedData
) => {

  const response = await axios.put(
    `/api/v1/posts/${postId}`,
    updatedData
  );

  return response.data;
}; 
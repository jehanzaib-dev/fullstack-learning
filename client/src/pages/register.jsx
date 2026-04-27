import { useRef, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';




export const RegisterPage=()=>{
    const username=useRef();
    const email=useRef();
    const password=useRef();
    const confirmPassword=useRef();
    const [loading, setLoading]=useState(false);
    const [frontendError, setFrontendError]=useState(null);
    const [backendError, setBackendError]=useState(null);


    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setFrontendError(null);
        setBackendError(null);
        const usernameValue=username.current.value.trim();
        const emailValue=email.current.value.trim();
        const passwordValue=password.current.value.trim();
        const confirmPasswordValue=confirmPassword.current.value.trim();
        if(!usernameValue || !emailValue || !passwordValue || !confirmPasswordValue){
            setFrontendError("All firelds are required");
            return;
        }
        if(passwordValue.length<8){
            setFrontendError("Password should be atleast 8 characters long");
            return;
        }
        if(passwordValue !== confirmPasswordValue){
            setFrontendError("passwords should be same");
            return;
        }
        try{
            setLoading(true);
            
        const response=await axios.post('/auth/register',{
            username:usernameValue,
            email:emailValue,
            password:passwordValue,
            confirmPassword:confirmPasswordValue
        });
        console.log(response);
        setLoading(false);
        navigate('/login');
        }
        catch(err){
            const errorMessage=err.response?.data?.message || "something went wrong";
            setBackendError(errorMessage);
        } finally{
            setLoading(false);
        }
    }
    
    return(
<div className="Page">
    <div className="registerWrapper">
        <div className="leftContentBox">
            <h2>My Social App</h2>
            <p>connect with friends and the world around you</p>
        </div>
        <div className="rightContentBox">
            <form className="inputForm" onSubmit={handleSubmit}>
                <div className="inputsCntnr">
                    <input type="text" placeholder="username" ref={username}/>
                    <input type="email" placeholder="email" ref={email}/>
                    <input type="password" placeholder="Password" ref={password}/>
                    <input type="password" placeholder="Confirm Password" ref={confirmPassword}/>
                </div>
                <div className="buttonsCntnr">
                    <button type="submit" disabled={loading}>
                        {
                            loading ? "Loading":"Register"
                        }
                    </button>
                    <Link to="/login">Log In
                    </Link>
                </div>
            </form>
        </div>
        {
            frontendError ? <p>{frontendError}</p>:backendError && <p>{backendError}</p>
        }
    </div>
</div>
    );
};

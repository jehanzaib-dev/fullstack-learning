import { useRef, useContext, useEffect, useState } from "react";
import { loginCall } from "../apiCalls/apiCalls.js";
import { AuthContext } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const email = useRef();
  const password = useRef();
    const [frontendError, setFrontendError]=useState(null);
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFrontendError(null);
    const emailValue=email.current.value;
    const passwordValue=password.current.value;
    if(!emailValue || !passwordValue){
        setFrontendError("all fields are required");
        return;
    }
    loginCall(
      {
        email: emailValue,
        password: passwordValue,
      },
      dispatch
    );
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

return(
<div className="loginPage">
    <div className="loginWrapper">
        <div className="leftContentBox">
            <h2>My Social App</h2>
            <p>Connect with friends and the world around you</p>
        </div>
        <div className="rightContentBox">
            <form onSubmit={handleSubmit}>
                <div className="inputsBox">
                    <input type="email" placeholder="email" ref={email}/>
                    <input type="password" placeholder="Password" ref={password}/>
                </div>
                <div className="buttonsBox">
                    <button type="submit" disabled={isFetching}>{isFetching ? "Loading..." : "Log In"}
                    </button>
                    <p>Forgot Password?</p>
                    <Link to="/register">Create an Account</Link>
                </div>
            </form>
            {
            frontendError ? <p>{frontendError}</p>:error && <p>{error}</p>
        }
        </div>
    </div>
</div>
)
}
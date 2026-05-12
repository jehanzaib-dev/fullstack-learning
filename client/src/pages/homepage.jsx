import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";
import { Logout } from "../context/authActions.js";
import {CreatePost} from '../components/createPost/createPost.jsx';


export const HomePage=()=>{

    const {dispatch} = useContext(AuthContext);
	const navigate = useNavigate();
    const handleLogout = () => {
		dispatch(Logout());
		navigate("/login");
	};

    return(

        <div>Home page
        <button onClick={handleLogout} className="logoutBtn">
				Logout
			</button>
		<CreatePost/>
        </div>
    )
}
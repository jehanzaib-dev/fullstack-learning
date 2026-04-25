import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";

export const HomePage=()=>{

    const {user, dispatch} = useContext(AuthContext);
	const navigate = useNavigate();
    const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
		navigate("/login");
	};

    return(

        <div>Home page
        <button onClick={handleLogout} className="logoutBtn">
				Logout
			</button>
        </div>
    )
}
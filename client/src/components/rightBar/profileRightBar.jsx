import { useParams } from "react-router-dom";

export const ProfileRightBar = () => {
  const { username } = useParams();

  return (
    <div className="rightBarContent">

      <h3>User Info</h3>

      <div className="profileCard">
        <p><b>Username:</b> {username}</p>
        <p><b>Bio:</b> Frontend Developer</p>
        <p><b>Location:</b> Pakistan</p>
      </div>

      <div className="profileStats">
        <p>Followers: 120</p>
        <p>Following: 80</p>
      </div>

    </div>
  );
};
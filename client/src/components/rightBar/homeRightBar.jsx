export const HomeRightBar = () => {
  return (
    <div className="rightBarContent">

      <h3>Who to follow</h3>

      <div className="suggestion">
        <img src="/default-avatar.png" />
        <div>
          <h4>John Doe</h4>
          <button>Follow</button>
        </div>
      </div>

      <div className="suggestion">
        <img src="/default-avatar.png" />
        <div>
          <h4>Ali Khan</h4>
          <button>Follow</button>
        </div>
      </div>

    </div>
  );
};
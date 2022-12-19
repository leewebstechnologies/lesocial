import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="./assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img
          className="rightbarAd"
          src="https://images.unsplash.com/photo-1667032385354-7055dcc79066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          alt=""
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="https://images.unsplash.com/photo-1670525975578-4051a7803c38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;

//

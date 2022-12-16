import { PermMedia } from "@mui/icons-material";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="./assets/person/1.jpg"
            alt=""
          />
          <input
            className="shareInput"
            placeholder="What's in your mind Ali?"
            type="text"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                  <PermMedia className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Share;

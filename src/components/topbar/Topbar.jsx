import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lesocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <div className="topbarIconBadge">1</div>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <div className="topbarIconBadge">2</div>
          </div>
          <div className="topbarIconItem">
            <CircleNotificationsIcon />
            <div className="topbarIconBadge">1</div>
          </div>
          <img src="./assets/person/1.jpg" alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

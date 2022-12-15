import { RssFeed } from "@mui/icons-material";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

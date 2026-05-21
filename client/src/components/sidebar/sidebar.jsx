import "./sidebar.css";

import { Link, useLocation } from "react-router-dom";

import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";

export default function SideBar() {

  const location = useLocation();

  const sidebarItems = [
    {
      icon: <RssFeedIcon className="sidebarListItemIcon" />,
      text: "Feed",
      path: "/",
    },
    {
      icon: <ChatIcon className="sidebarListItemIcon" />,
      text: "Chats",
      path: "/chats",
    },
    {
      icon: <PlayCircleIcon className="sidebarListItemIcon" />,
      text: "Videos",
      path: "/videos",
    },
    {
      icon: <GroupIcon className="sidebarListItemIcon" />,
      text: "Groups",
      path: "/groups",
    },
    {
      icon: <BookmarkIcon className="sidebarListItemIcon" />,
      text: "Bookmarks",
      path: "/bookmarks",
    },
    {
      icon: <HelpOutlineOutlinedIcon className="sidebarListItemIcon" />,
      text: "Questions",
      path: "/questions",
    },
    {
      icon: <WorkOutlineOutlinedIcon className="sidebarListItemIcon" />,
      text: "Jobs",
      path: "/jobs",
    },
    {
      icon: <EventIcon className="sidebarListItemIcon" />,
      text: "Events",
      path: "/events",
    },
    {
      icon: <SchoolIcon className="sidebarListItemIcon" />,
      text: "Courses",
      path: "/courses",
    },
  ];

  return (
    <div className="sidebar">

      <div className="sidebarWrapper">

        <ul className="sidebarList">

          {sidebarItems.map((item) => (

            <Link
              to={item.path}
              className="sidebarLink"
              key={item.text}
            >

              <li
                className={
                  location.pathname === item.path
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
              >

                {item.icon}

                <span className="sidebarListItemText">
                  {item.text}
                </span>

              </li>

            </Link>

          ))}

        </ul>

        <button className="sidebarButton">
          Show More
        </button>

        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">

          {/* FRIENDS LATER */}

        </ul>

      </div>

    </div>
  );
}
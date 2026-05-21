
import './sidebar.css';
import * as MuiIcons from "@mui/icons-material";



export default function SideBar(){
	const FeedIcon=MuiIcons.RssFeed;
	const ChatIcon=MuiIcons.Chat;
	const VideoIcon=MuiIcons.PlayCircle;
	const GroupIcon=MuiIcons.Group;
	const BookmarkIcon=MuiIcons.Bookmark;
	const QuestionIcon=MuiIcons.HelpOutlineOutlined;
	const JobIcon=MuiIcons.WorkOutlineOutlined;
	const EventIcon=MuiIcons.Event;
	const CourseIcon=MuiIcons.School;

return(
<div className='sidebar'>
	<div className="sidebarWrapper">
		<ul className="sidebarList">
			<li className="sidebarListItem">
				<FeedIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Feed
				</span>
			</li>
			<li className="sidebarListItem">
				<ChatIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Chats
				</span>
			</li>
			<li className="sidebarListItem">
				<VideoIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Videos
				</span>
			</li>
			<li className="sidebarListItem">
				<GroupIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Groups
				</span>
			</li>
			<li className="sidebarListItem">
				<BookmarkIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Bookmarks
				</span>
			</li>
			<li className="sidebarListItem">
				<QuestionIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Questions
				</span>
			</li>
			<li className="sidebarListItem">
				<JobIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Jobs
				</span>
			</li>
			<li className="sidebarListItem">
				<EventIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Events
				</span>
			</li>
			<li className="sidebarListItem">
				<CourseIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Courses
				</span>
			</li>
		</ul>
		<button className="sidebarButton">Show more
		</button>
		<hr className="sidebarHr"/>
		<ul className="sidebarFriendList">
			
		</ul>
	</div>
</div>
	)
}




























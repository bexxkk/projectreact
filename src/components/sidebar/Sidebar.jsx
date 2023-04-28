import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://vgraphs.com/images/agents/phoenix-avatar.jpg"
          alt=""
        />
        <p>
          I'm 18 years old. Student of IITU at Cybersecurity.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">MY INTERESTS </span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Insta
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              TikTok
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Valorant 
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">GOOD LUCK!</span>
        <div className="sidebarSocial">
        </div>
      </div>
    </div>
  );
}

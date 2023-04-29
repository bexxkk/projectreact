import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg"
          alt=""
        />
        <p>
          I'm 18 years old. Student of IITU at Cybersecurity. I'm very happy that you visited my website! Have a nice time!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">MY INTERESTS </span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <a className="link">
              Insta
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link" >
              Music
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link" >
              TikTok
            </a>
          </li>
          <li className="sidebarListItem">
            <a className="link">
              Valorant 
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">THANK YOU !</span>
        <div className="sidebarSocial">
        </div>
      </div>
    </div>
  );
}

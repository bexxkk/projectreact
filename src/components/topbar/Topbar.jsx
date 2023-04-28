import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://ru-ru.facebook.com/" className="topIcon fab fa-facebook-square"></a>
        <a href="https://instagram.com/bexxkk?igshid=YmMyMTA2M2Y=" className="topIcon fab fa-instagram-square"></a>
        <a href="https://ru.pinterest.com/" className="topIcon fab fa-pinterest-square"></a>
        <a href="https://twitter.com/?lang=ru" className="topIcon fab fa-twitter-square"></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/register">
              ABOUT US
            </Link></li>
          
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/settings">
              SETTINGS
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOG IN
              </Link>
            </li>
          </ul>
      </div>
    </div>
  );
}

import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <Link className="settingsTitleDelete" to="/">Delete Account</Link>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg"
              alt=""
            />
            
          </div>
          <label>Username</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" name="password" />
          <Link className="settingsSubmitButton" type="submit" to="/" >
            Update
          </Link>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Phoenix.Learn</span>
        <span className="headerTitleLg"></span>
      </div>
      <img
        className="headerImg"
        src="https://wallpaperaccess.com/full/1556608.jpg"
        alt=""
      />
    </div>
  );
}

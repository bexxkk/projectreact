import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Phoenix</span>
        <span className="headerTitleLg"></span>
      </div>
      <img
        className="headerImg"
        src="https://wallpapers.com/images/featured/7sn5o1woonmklx1h.jpg"
        alt=""
      />
    </div>
  );
}

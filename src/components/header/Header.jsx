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
        src="https://pibig.info/uploads/posts/2022-08/thumbs/1659402419_1-pibig-info-p-chernii-fon-v-krapinku-krasivo-1.jpg"
        alt=""
      />
    </div>
  );
}

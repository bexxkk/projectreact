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
        src="https://phonoteka.org/uploads/posts/2022-01/1643147648_1-phonoteka-org-p-chernii-fon-dlya-saita-1.jpg"
        alt=""
      />
    </div>
  );
}

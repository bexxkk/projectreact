import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f5643096750899.5eb54f3381b8f.png" />
      <Post img="https://wallpaperforu.com/wp-content/uploads/2020/12/black-wallpaper-20121914144944.jpg" />
      <Post img="https://c4.wallpaperflare.com/wallpaper/853/16/894/c-plus-plus-code-development-web-development-wallpaper-thumb.jpg"/>
      <Post img="https://c4.wallpaperflare.com/wallpaper/294/834/442/reactjs-facebook-javascript-minimalism-wallpaper-preview.jpg"/>
    </div>
  );
}

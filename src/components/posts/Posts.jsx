import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://wallpapercave.com/wp/wp8042506.jpg" />
      <Post img="https://cdn.wallpapersafari.com/89/85/2rZciQ.png" />
      <Post img="https://c4.wallpaperflare.com/wallpaper/853/16/894/c-plus-plus-code-development-web-development-wallpaper-thumb.jpg"/>
      <Post img="https://w0.peakpx.com/wallpaper/757/901/HD-wallpaper-c-sharp-black-logo-programming-language-grid-metal-background-c-sharp-artwork-creative-programming-language-signs-c-sharp-logo.jpg"/>
    </div>
  );
}

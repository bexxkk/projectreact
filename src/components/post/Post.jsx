import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
             
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Start now!
          </Link>
        </span>
        <hr />
        <span className="postDate">About course</span>
      </div>
      <p className="postDesc">
        With this course, you can upgrade your skills on IT!
      </p>
    </div>
  );
}

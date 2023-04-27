import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://media.istockphoto.com/id/480288890/photo/it-background-hexadecimal-code-a01.jpg?s=1024x1024&w=is&k=20&c=R2-akiMC6dX0rs9isSxPCZDdPj98Pc2r-R2IdH-oY7E= "
          alt=""
        />
        <h1 className="singlePostTitle">
          What about is this course?
          <div className="singlePostEdit">
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Bekzat Kassymov
              </Link>
            </b>
          </span>
          <span>5 days ago</span>
        </div>
        <p className="singlePostDesc">
          In this course you will gain a lot of theoritical and practical knowledge about this subject. <br /> <br /> Python is a programming language that is widely used in internet applications, software development, data science, and machine learning. Developers have used Python because it is efficient, easy to research, and works across platforms. Python programs are free to download, come with all types of systems, and speed up development. <br /> <br />
          Server-side web development involves complex server-side functions by which websites display information to the user. For example, websites must communicate with databases and other websites and secure data as it is sent over the network. <br /> <br />

          Python is useful when writing server code because it offers many libraries consisting of pre-written code for complex server functions. Also, developers use a wide range of Python platforms that provide all the necessary tools for faster and easier creation of Internet applications. For example, developers can build the "skeleton" of an internet application in seconds because they don't have to write code from scratch. It can then be tested with the platform's testing tools independently of external testing tools.
        </p>
      </div>
    </div>
  );
}

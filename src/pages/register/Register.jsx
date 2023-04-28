import "./register.css"
import { Link } from "react-router-dom";

export default function Register() {
    return (
      <div className="regPost">
      <div className="regPostWrapper">
        <h1 className="regPostTitle">
          What about us?
          <div className="regPostEdit">
          </div>
        </h1>
        <p className="regPostDesc">
          Phoenix.Learn was created in 2017 by Kassymov Bekzat. He was very interested on teaching other people, and after that he realized his dream of teaching people. <br /> <br />
          The main goal of Phoenix.Learn is to improve skills on IT of our users. You need a desire to learn, time, and brains. <br /><br />
          From us, you will receive full support from our curators until the end of the training, complete material to become a professional specialist, as well as employment after the end of the course. <br /> <br />
        </p>
        <img
          className="regPostImg"
          src="https://phonoteka.org/uploads/posts/2021-04/1619273604_52-phonoteka_org-p-fon-dlya-shkolnogo-saita-65.jpg "
          alt=""
        />
      </div>
    </div>
    )
}

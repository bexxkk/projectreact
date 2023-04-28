import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <span className="writeTitle">Write your review</span>
      <img
        className="writeImg"
        src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Write your name"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Write your review"
            type="text"
            autoFocus={true}
          />
        </div>
        <Link className="writeSubmit" type="submit" to="/">
          Publish
        </Link>
      </form>
    </div>
  );
}

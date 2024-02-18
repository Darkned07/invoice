import Link from "next/link";
import "./navbar.css";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__links ">
        <Link className="navbar__link " href="/">
          <img
            src="./images/logo.svg"
            className="link__img"
            alt="moon-images-in the logo"
          />
        </Link>
      </div>
      <div className="navbar__nav">
        <button className="navbar__btn">
          <img src="./images/icon-sun.svg" />
        </button>
        <hr className="navbar__hr" />
        <img
          className="navabr__img"
          src="./images/image-avatar.jpg"
          alt="avatar images, user images"
        />
      </div>
    </div>
  );
}

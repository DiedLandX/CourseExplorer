import { Link } from "react-router-dom";

export function MyNavbar() {
  return (
    <nav>
      <div className="nav-link-container">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/login">
          Login
        </Link>
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
        <Link className="nav-link" to="/courses">
          Courses
        </Link>
      </div>
    </nav>
  );
}
export default MyNavbar;

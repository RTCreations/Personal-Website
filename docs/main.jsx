import { react } from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="#">Widgets</a>
        </li>
        <li className="nav-item">
          <button aria-expanded="false">Apps</button>
          <ul className="sub-menu" aria-label="Apps">
            <li><a href="#">Widgets</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
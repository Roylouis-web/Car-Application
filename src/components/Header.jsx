import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="main-header">
        <NavLink 
          to='/' 
          className="home-link"
        >
          <h2>#CARLIFE</h2>
        </NavLink>
        <nav className="main-navbar">
            <NavLink 
                to='host' 
                className={({isActive}) => isActive ? "active": ""}
            >
              Host
            </NavLink>
            <NavLink 
                to='about' 
                className={({isActive}) => isActive ? "active": ""}
            >
                About
            </NavLink>
            <NavLink 
                to='cars' 
                className={({isActive}) => isActive ? "active": ""}
            >Cars
          </NavLink>
        </nav>
    </header>
  );
};
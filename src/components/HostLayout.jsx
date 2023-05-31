import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  const styles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
   <div>
      <header className="host-header">
        <nav className="host-navbar">
          <NavLink 
              to="."
              end
              style={({isActive}) => isActive ? styles: null}
          >
                DashBoard
          </NavLink>
          <NavLink 
              to='income' 
              style={({isActive}) => isActive ? styles: null }
          >
                Income
            </NavLink>
          <NavLink 
              to='cars' 
              style={({isActive}) => isActive ? styles: null }
          >
               Cars
            </NavLink>
          <NavLink 
              to='reviews' 
              style={({isActive}) => isActive ? styles: null }
          >
                Reviews
          </NavLink>
        </nav>
      </header>
      <Outlet />
   </div>
  );
};
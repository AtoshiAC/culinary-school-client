import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Our Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        {
          user ? <Link className="mt-4 mr-4" to="/dashboard">Dashboard</Link> : <></>
        }
        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
      <>
        <div className="navbar fixed z-10 max-w-screen-xl bg-gray-300 text-black">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navOptions}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl w-60">
              Culinary School
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
          <div className="navbar-end mr-3">
            {user ? (
              <div className="avatar">
                <div
                  className="rounded-full w-10 h-10 m-1 tooltip"
                  data-tip={user?.displayName}
                >
                  <img src={user?.photoURL} alt={user?.displayName}/>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </>
    );
};

export default NavBar;
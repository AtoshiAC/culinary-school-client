import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome,FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    return (
      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-secondary drawer-button lg:hidden"
          >
            Expand
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-gray-300 text-black">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminhome">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItem">
                    {" "}
                    <FaBook></FaBook> Add classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageitems">
                    <FaWallet></FaWallet> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaBook></FaBook> Booking classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userhome">
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaCalendarAlt></FaCalendarAlt> Classes Schedule
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaWallet></FaWallet> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart> My Classes
                    <span className="badge inl badge-secondary">
                      +{cart?.length || 0}
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/menu">
                <FaBook></FaBook> All classes
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaBook></FaBook> Pending classes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;
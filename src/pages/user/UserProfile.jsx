import { Navbar } from "../../components/Navbar";
import { NavLink, Outlet } from "react-router-dom";
import "./UserProfile.css";

export const UserProfile = () => {
  const tabs = [
    {
      header: "Profile",
      link: "/user/",
    },
    {
      header: "Addresses",
      link: "/user/address",
    },
    {
      header: "Orders",
      link: "/user/orders",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="center user">
        <h1>My Account</h1>
        <div className="tabs">
          <div className="tabs-con">
            {tabs.map(({ header, link }) => (
              <NavLink
                to={link}
                className={({ isActive }) =>
                  isActive ? "tab-active tab-normal" : "tab-normal"
                }
                end
                key={header}
              >
                {header}
              </NavLink>
            ))}
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

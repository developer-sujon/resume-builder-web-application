//External Import
import { useEffect } from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Internal Import
import UserRequest from "../../APIRequest/UserRequest";
import { SetLogout } from "../../redux/slices/AuthSlice";

const PrivateNavigation = () => {
  const dispatch = useDispatch();
  const { UserDetails } = useSelector((state) => state.User);

  useEffect(() => {
    UserRequest.UserDetails();
  }, []);

  return (
    <div className="shadow-md">
      <Navbar fluid={true} rounded={false}>
        <Link className="flex items-center" to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Cv Builder
          </span>
        </Link>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="user"
                img={UserDetails && UserDetails.Image}
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">
                {UserDetails && UserDetails.FullName}
              </span>
              <span className="block truncate text-sm font-medium">
                {UserDetails && UserDetails.Email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link to="/dashboard">Dashboard</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/template">Template</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/settings">Settings</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => dispatch(SetLogout())}>
              Sign out
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {/* <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        {/* <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default PrivateNavigation;

//External Import
import React, { useEffect } from "react";
import { useState } from "react";
import {
  AiOutlineLogout,
  AiOutlineMenuUnfold,
  AiOutlineUser,
} from "react-icons/ai";
import { BsArrowsFullscreen } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserRequest from "../../APIRequest/UserRequest";
import ToastMessage from "../../helper/ToastMessage";

//Internal Import
import { SetLogout } from "../../redux/slices/AuthSlice";
import store from "../../redux/store/store";

function Navigation({ openMenu, setOpenMenu, title = "Home" }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    UserRequest.UserDetails();
  }, []);

  const { UserDetails } = useSelector((state) => state.User);

  const FullScreen = () => {
    if (isFullScreen === true) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    } else {
      let elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
      setIsFullScreen(true);
    }
  };

  const logoutUser = () => {
    store.dispatch(SetLogout());
    ToastMessage.successMessage("User Logout Successfull");
  };

  return (
    <>
      <title>Inventory - {title}</title>
    </>
  );
}

export default Navigation;

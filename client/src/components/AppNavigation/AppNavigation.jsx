//External Lib
import { useSelector } from "react-redux";

//Internal Lib
import PrivateNavigation from "./PrivateNavigation";
import PublicNavigation from "./PublicNavigation";

function Navigation({ openMenu, setOpenMenu, title = "Home" }) {
  const { accessToken } = useSelector((state) => state.Auth);

  return (
    <>
      <title>{title}</title>
      {accessToken ? <PrivateNavigation /> : <PublicNavigation />}
    </>
  );
}

export default Navigation;

//External lib imports
import React, { Suspense, lazy } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";
import AppNavigation from "../../components/AppNavigation/AppNavigation";

const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);
const Profile = lazy(() => import("../../components/User/Profile/Profile"));

const ProfilePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <AppNavigation title="Profile Page" />
      <Profile />
    </Suspense>
  );
};

export default ProfilePage;

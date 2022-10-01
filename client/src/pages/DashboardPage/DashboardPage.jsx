//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const Dashboard = lazy(() => import("../../components/Dashboard/Dashboard"));
const AppNavigation = lazy(() =>
  import("../../components/AppNavigation/AppNavigation"),
);

const DashboardPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <AppNavigation title="Dashboard Page" />
      <Dashboard />
    </Suspense>
  );
};

export default DashboardPage;

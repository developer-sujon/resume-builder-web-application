//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";
import AppNavigation from "../../components/AppNavigation/AppNavigation";
const Template = lazy(() => import("../../components/Template/Template"));

const TemplatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <AppNavigation title="Template Page" />
      <Template />
    </Suspense>
  );
};

export default TemplatePage;

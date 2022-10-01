//External lib imports
import React, { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../../components/Common/LazyLoader";
const SentOtp = lazy(() =>
  import("../../APIRequest/SendOtp"),
);
const AppNavigation = lazy(() =>
  import("../../components/AppNavigation/AppNavigation"),
);

const SendOptPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <AppNavigation title="Sent Otp Page" />
        <SentOtp />
      </Suspense>
    </>
  );
};

export default SendOptPage;

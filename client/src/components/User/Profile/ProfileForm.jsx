//External Import
import React from "react";
import { Formik, Form } from "formik";

//Internal Import
import UserRequest from "../../../APIRequest/UserRequest";
import Personal from "./Personal/Personal";
import EducationTraining from "./EducationTraining/EducationTraining";
import { validationSchema } from "./validationSchema";
import Employment from "./Employment/Employment";
import OtherInformation from "./OtherInformation/OtherInformation";
import Photograph from "./Photograph/Photograph";
import { useSelector } from "react-redux";

const ProfileForm = ({ category }) => {
  const { UserDetails } = useSelector((state) => state.User);

  return (
    <Formik
      enableReinitialize
      initialValues={UserDetails}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        UserRequest.UserUpdate(values);
      }}
      render={({ values }) => (
        <Form>
          <ViewProfileForm categoryName={category} values={values} />

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Update Profile
          </button>
        </Form>
      )}
    />
  );
};

export default ProfileForm;

const ViewProfileForm = ({ categoryName, values }) => {
  if (categoryName === "PersonalInfo") {
    return <Personal {...values} />;
  }
  if (categoryName === "EducationTraining") {
    return <EducationTraining {...values} />;
  }
  if (categoryName === "Employment") {
    return <Employment {...values} />;
  }
  if (categoryName === "OtherInformation") {
    return <OtherInformation {...values} />;
  }
  if (categoryName === "Photograph") {
    return <Photograph {...values} />;
  }
};

//External Import
import React from "react";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";

//Internal Import
import SkillsEducation from "./SkillsEducation";
import ExperienceProjects from "./ExperienceProjects";
import UserRequest from "../../../APIRequest/UserRequest";
import Personal from "./Personal/Personal";
import { validationSchema } from "./validationSchema";

const ProfileForm = ({ category }) => {
  const { UserDetails } = useSelector((state) => state.User);

  return (
    <Formik
      enableReinitialize
      initialValues={UserDetails}
      validationSchema={validationSchema}
      onSubmit={(values) => {
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
  if (categoryName === "SkillsEducation") {
    return <SkillsEducation {...values} />;
  }
  if (categoryName === "ExperienceProjects") {
    return <ExperienceProjects {...values} />;
  }
};

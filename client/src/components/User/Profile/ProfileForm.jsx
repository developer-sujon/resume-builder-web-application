//External Import
import React from "react";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";

//Internal Import
import PersonalInfo from "./PersonalInfo";
import SkillsEducation from "./SkillsEducation";
import ExperienceProjects from "./ExperienceProjects";
import UserRequest from "../../../APIRequest/UserRequest";

const validationSchema = Yup.object().shape({
  FullName: Yup.string().required("Full Name is Required"),
  UserName: Yup.string().required("User Name is Required"),
  Phone: Yup.string()
    .required("Mobile Number is Required")
    .matches(
      /(^(\+88|0088|88)?(01){1}[3456789]{1}(\d){8})$/,
      "Invalid Phone Number",
    ),
  Email: Yup.string()
    .required("Email is Required")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid Email address",
    ),
  Address: Yup.string().required("Address is Required"),
  CarrierObjective: Yup.string().required("Carrier Objective is Required"),
  Education: Yup.array().of(
    Yup.object().shape({
      Qualification: Yup.string().required("Qualification is Required"),
      Percentage: Yup.string().required("Percentage is Required"),
      Institution: Yup.string().required("Institution is Required"),
      YearRange: Yup.string().required("YearRange is Required"),
    }),
  ),
  Skills: Yup.array().of(
    Yup.object().shape({
      Technology: Yup.string().required("Technology is Required"),
      Rating: Yup.string().required("Rating is Required"),
    }),
  ),
  Experience: Yup.array().of(
    Yup.object().shape({
      Company: Yup.string().required("Company is Required"),
      Website: Yup.string().required("Website is Required"),
      Place: Yup.string().required("Place is Required"),
      YearRange: Yup.string().required("Year Range is Required"),
    }),
  ),
  Projects: Yup.array().of(
    Yup.object().shape({
      Title: Yup.string().required("Title is Required"),
      Description: Yup.string().required("Description is Required"),
      YearRange: Yup.string().required("Year Range is Required"),
      Link: Yup.string().required("Link is Required"),
    }),
  ),
});

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
    return <PersonalInfo {...values} />;
  }
  if (categoryName === "SkillsEducation") {
    return <SkillsEducation {...values} />;
  }
  if (categoryName === "ExperienceProjects") {
    return <ExperienceProjects {...values} />;
  }
};

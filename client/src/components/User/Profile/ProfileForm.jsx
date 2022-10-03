//External Import
import React from "react";
import { Formik, Form } from "formik";

//Internal Import
import ExperienceProjects from "./ExperienceProjects";
import UserRequest from "../../../APIRequest/UserRequest";
import Personal from "./Personal/Personal";
import EducationTraining from "./EducationTraining/EducationTraining";
import { validationSchema } from "./validationSchema";

const ProfileForm = ({ category }) => {
  // const { UserDetails } = useSelector((state) => state.User);

  const UserDetails = {
    FirstName: "Mohammd",
    LastName: "Sujon",
    FatherName: "Md Babu",
    MotherName: "Mst Ambia Khatun",
    DateofBirth: "fsfsfd",
    Gender: "Female",
    Religion: "Islam",
    MaritalStatus: "Single",
    Nationality: "Bangladesh",
    NationalId: "920389ssd",
    PassportNumber: "234234234dsfsdfs34234",
    PassportIssueDate: "fsfsfd",
    Phone: "+8801772703036",
    SecondaryMobile: "+8801772703036",
    EmergencyContact: "+8801772703036",
    Email: "devoloper.sujon@gmail.com",
    AlternateEmail: "devoloper.sujon@gmail.com",
    BloodGroup: "devoloper.sujon@gmail.com",
    HeightMeters: "5.8",
    WeightKg: "57",
    Country: "Bangladesh",
    PresentAddress: {
      District: "Dhaka",
      Upazila: "Companiganj",
      Union: "Amjhupi",
    },
    PermanentAddress: {
      District: "Dhaka",
      Upazila: "Companiganj",
      Union: "Amjhupi",
    },
    Road: "fsfsfd",
    CarrierObjective: "sdfklsdfjkskakfjskjldfkljsldkjf",
    PresentSalary: "25000",
    ExpectedSalary: "35000",
    JobLevel: "Mid Level",
    JobNature: "Full time",
    PreferredAreas: [
      "AccountingFinance",
      "MedicalPharma",
      "স্যুইংমেশিনঅপারেটর",
    ],
    PreferredJobLocationInsideBangladesh: [],
    PreferredJobLocationOutsideBangladesh: [],
    PreferredOrganization: [],
    OtherRelevantInformation: [],
    CareerSummary: "",
    SpecialQualification: "",
    Keywords: "",
    NationalDisability: "",
    Educations: [],
    Training: [],
    Professionals: [],
  };

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
  if (categoryName === "EducationTraining") {
    return <EducationTraining {...values} />;
  }
  if (categoryName === "ExperienceProjects") {
    return <ExperienceProjects {...values} />;
  }
};

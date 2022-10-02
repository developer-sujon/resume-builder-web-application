//External Import
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  FirstName: Yup.string().required("First Name is Required"),
  DateofBirth: Yup.string().required("Date of Birth is Required"),
  Gender: Yup.string().required("Gender Name is Required"),
  MaritalStatus: Yup.string().required("Marital Status is Required"),
  Nationality: Yup.string().required("Nationality is Required"),
  Phone: Yup.string().matches(
    /(^(\+88|0088|88)?(01){1}[3456789]{1}(\d){8})$/,
    "Invalid Phone Number",
  ),

  
  Dejection: Yup.string().required("Dejection is Required"),
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

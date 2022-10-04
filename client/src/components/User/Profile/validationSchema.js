//External Import
import * as Yup from "yup";

// export const validationSchema = Yup.object().shape({
//   FirstName: Yup.string().required("First Name is Required"),
//   DateofBirth: Yup.string().required("Date of Birth is Required"),
//   Gender: Yup.string().required("Gender Name is Required"),
//   MaritalStatus: Yup.string().required("Marital Status is Required"),
//   Nationality: Yup.string().required("Nationality is Required"),
//   Email: Yup.string()
//     .required("Email is Required")
//     .matches(
//       /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//       "Invalid Email address",
//     ),
//   PresentAddress: Yup.object().shape({
//     Country: Yup.string().required("Country is Required"),
//     District: Yup.string().required("District is Required"),
//     Upazila: Yup.string().required("Upazila is Required"),
//     Union: Yup.string().required("Union is Required"),
//   }),
//   Road: Yup.string().required("Road is Required"),
//   CarrierObjective: Yup.string().required("Carrier Objective is Required"),
//   PreferredAreas: Yup.array()
//     .min(1, "Please select preferred Job Categories!")
//     .max(3, "You cannot add more than 3 Categories!"),
//   PreferredJobLocationInsideBangladesh: Yup.array()
//     .min(1, "Please select preferred districts Inside Bangladesh!")
//     .max(15, "You cannot add more than 15 districts Inside Bangladesh!"),
//   PreferredJobLocationOutsideBangladesh: Yup.array()
//     .min(1, "Please select preferred districts Outside Bangladesh!")
//     .max(10, "You cannot add more than 10 districts Outside Bangladesh!"),
//   PreferredOrganization: Yup.array().max(
//     12,
//     "You cannot add more than 12 Preferred Organization",
//   ),
//   Keywords: Yup.string().required("Keywords is Required"),
//   Educations: Yup.array().of(
//     Yup.object().shape({
//       LevelOfEducation: Yup.string().required("Level Of Education is Required"),
//       ExamDegreeTitle: Yup.string().required("ExamDegree Title is Required"),
//       ConcentrationMajorGroup: Yup.string().required(
//         "Concentration Major Group is Required",
//       ),
//       Board: Yup.string().required("Board is Required"),
//       InstituteName: Yup.string().required("Institute Name is Required"),
//       Result: Yup.string().required("Result is Required"),
//       YearOfPassing: Yup.string().required("Year Of Passing is Required"),
//     }),
//   ),

//   Trainings: Yup.array().of(
//     Yup.object().shape({
//       Title: Yup.string().required("Title is Required"),
//       Country: Yup.string().required("Country is Required"),
//       Year: Yup.string().required("Year is Required"),
//       Institute: Yup.string().required("Institute is Required"),
//       Duration: Yup.string().required("Duration is Required"),
//     }),
//   ),

//   Professionals: Yup.array().of(
//     Yup.object().shape({
//       Certification: Yup.string().required("Certification is Required"),
//       Institute: Yup.string().required("Institute is Required"),
//       StartDate: Yup.string().required("Duration is Required"),
//       EndDate: Yup.string().required("Duration is Required"),
//     }),
//   ),

//   EmploymentHistorys: Yup.array().of(
//     Yup.object().shape({
//       CompanyName: Yup.string().required("CompanyName is Required"),
//       CompanyBusiness: Yup.string().required("CompanyBusiness is Required"),
//       Designation: Yup.string().required("Designation is Required"),
//       Department: Yup.string().required("Department is Required"),
//       StartDate: Yup.string().required("Start Date is Required"),
//       EndDate: Yup.string().required("End Date is Required"),
//     }),
//   ),

//   EmploymentHistoryArmi: Yup.object().shape({
//     BANo: Yup.string().required("BANo is Required"),
//     BANoInput: Yup.string().required("BANo Input is Required"),
//     Ranks: Yup.string().required("Ranks is Required"),
//     Type: Yup.string().required("Type is Required"),
//     Arms: Yup.string().required("Arms is Required"),
//     Trade: Yup.string().required("Trade is Required"),
//     Course: Yup.string().required("Course is Required"),
//     DateOfCommission: Yup.string().required("Date Of Commission is Required"),
//     DateOfRetirement: Yup.string().required("Date Of Retirement is Required"),
//   }),

//   Specialization: Yup.array().of(
//     Yup.object().shape({
//       Skill: Yup.string().required("Skill is Required"),
//       HowDidYouLearn: Yup.string().required("How Did You Learn is Required"),
//     }),
//   ),

//   LanguageProficiency: Yup.array().of(
//     Yup.object().shape({
//       Language: Yup.string().required("Language is Required"),
//       Reading: Yup.string().required("Reading is Required"),
//       Writing: Yup.string().required("Writing is Required"),
//       Speaking: Yup.string().required("Speaking is Required"),
//     }),
//   ),

//   References: Yup.array().of(
//     Yup.object().shape({
//       Name: Yup.string().required("Name is Required"),
//       Designation: Yup.string().required("Designation is Required"),
//       Organization: Yup.string().required("Organization is Required"),
//     }),
//   ),
// });

export const validationSchema = Yup.object().shape({});

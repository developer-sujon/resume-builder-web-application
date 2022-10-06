//External Import
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import AuthRequest from "../../APIRequest/AuthRequest";

//Internal Import
const validationSchema = Yup.object().shape({
  FirstName: Yup.string().required("First Name is Required"),
  LastName: Yup.string().required("Last Name is Required"),
  Gender: Yup.string().required("Gender is Required"),
  PreferredAreas: Yup.string().required("Preferred Areas is Required"),
  Email: Yup.string()
    .required("Email is Required")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid Email address",
    ),
  Password: Yup.string().required("Password is Required"),
  ConfirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf(
      [Yup.ref("Password"), null],
      "Passwords and Confirm Password must match",
    ),
});

const RegisterUser = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create a new account
            </h1>
            <Formik
              initialValues={{
                FirstName: "",
                LastName: "",
                Gender: "",
                PreferredAreas: "",
                Phone: "",
                Email: "",
                Password: "",
                ConfirmPassword: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                AuthRequest.RegisterUser(values).then((result) => {
                  if (result) {
                    navigate("/login");
                  }
                });
              }}
            >
              {(props: FormikProps<any>) => (
                <Form>
                  <div className="flex flex-wrap mx-[-15px] my-3">
                    <div className="px-[15px] w-full md:w-[50%]">
                      <MyInput
                        name="FirstName"
                        label="First Name"
                        type="text"
                        placeholder="Mohammad"
                        require={true}
                      />
                    </div>
                    <div className="px-[15px] w-full md:w-[50%]">
                      <MyInput
                        name="LastName"
                        label="Last Name"
                        type="text"
                        placeholder="Salman"
                        require={true}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-[-15px]  my-3">
                    <div className="px-[15px] w-full md:w-[50%]">
                      <label className="mb-2">
                        Gender
                        <span className="text-red-600 ml-1">*</span>
                      </label>
                      <div className="flex items-center mr-4">
                        <label>
                          <Field
                            type="radio"
                            name="Gender"
                            value="Male"
                            className="mx-1"
                          />
                          Male
                        </label>
                        <label>
                          <Field
                            type="radio"
                            name="Gender"
                            value="Frmale"
                            className="mx-1"
                          />
                          Frmale
                        </label>
                        <label>
                          <Field
                            type="radio"
                            name="Gender"
                            value="Other"
                            className="mx-1"
                          />
                          Other
                        </label>
                      </div>
                      <p
                        id="filled_error_help"
                        className="mt-2 text-md text-red-600 dark:text-red-400"
                      >
                        <ErrorMessage name="Gender" />
                      </p>
                    </div>
                    <div className="px-[15px] w-full md:w-[50%]">
                      <MySelectField
                        name="PreferredAreas"
                        label="Select your skill from following list"
                        require={true}
                        options={[
                          {
                            label: "Accounting/Finance",
                            value: "AccountingFinance",
                          },
                          {
                            label: "Bank/Non-Bank Fin. Institution",
                            value: "BankNonBankFinInstitution",
                          },
                          {
                            label: "Commercial/Supply Chain",
                            value: "CommercialSupplyChain",
                          },
                          {
                            label: "Education/Training",
                            value: "EducationTraining",
                          },
                          {
                            label: "Engineer/Architect",
                            value: "EngineerArchitect",
                          },
                          {
                            label: "Garments/ Textile",
                            value: "GarmentsTextile",
                          },
                        ]}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-[-15px]  my-3">
                    <div className="px-[15px] w-full md:w-[50%]">
                      <label className="mb-2 block">
                        Mobile
                        <span className="text-red-600 ml-1">*</span>
                      </label>
                      <Field name="Phone">
                        {({
                          field,
                          form: { touched, errors, setFieldValue, values },
                          meta,
                        }) => (
                          <>
                            <PhoneInput
                              type="tel"
                              placeholder="Enter phone number"
                              name={field?.name}
                              value={field?.value}
                              onChange={(phone, country) =>
                                setFieldValue("Phone", phone)
                              }
                            />
                            {meta.touched && meta.error && (
                              <p
                                id="filled_error_help"
                                className="mt-2 text-md text-red-600 dark:text-red-400"
                              >
                                {meta.error}
                              </p>
                            )}
                          </>
                        )}
                      </Field>
                    </div>
                    <div className="px-[15px] w-full md:w-[50%]">
                      <MyInput
                        name="Email"
                        label="Email Address"
                        type="email"
                        placeholder="Email Address"
                        require={true}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-[-15px] my-3">
                    <div className="px-[15px] w-full md:w-[50%]">
                      <MyInput
                        name="Password"
                        label="Password"
                        type="password"
                        placeholder="******"
                        require={true}
                      />
                    </div>
                    <div className="px-[15px] w-full md:w-[50%]">
                      <MyInput
                        name="ConfirmPassword"
                        label="Confirm Password"
                        type="password"
                        placeholder="....."
                        require={true}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sign Up
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterUser;

const MyInput = ({ name, label, type, placeholder }) => {
  return (
    <>
      <Field name={name}>
        {({ field, form: { touched, errors }, meta }) => (
          <>
            <label
              htmlFor={name}
              className=" my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {label}
            </label>
            {require && <span className="text-red-600 ml-1">*</span>}
            <input
              type={type}
              id={name}
              placeholder={placeholder}
              {...field}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {meta.touched && meta.error && (
              <p
                id="filled_error_help"
                className="mt-2 text-md text-red-600 dark:text-red-400"
              >
                {meta.error}
              </p>
            )}
          </>
        )}
      </Field>
    </>
  );
};

const MySelectField = ({ name, label, require, options }) => {
  return (
    <>
      <label
        htmlFor="PreferredAreas"
        className="inline-block my-3 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white "
      >
        {label}
      </label>

      {require && <span className="text-red-600 ml-1">*</span>}

      <Field
        id="PreferredAreas"
        name="PreferredAreas"
        as="select"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option, i) => (
          <option value={option.value} key={i}>
            {option.label}
          </option>
        ))}
      </Field>
    </>
  );
};

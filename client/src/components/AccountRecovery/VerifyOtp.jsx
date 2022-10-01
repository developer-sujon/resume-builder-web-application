//External Import
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactCodeInput from "react-code-input";
import { useFormik } from "formik";
import * as Yup from "yup";

//External Import
import UserRequest from "../../APIRequest/UserRequest";
import FormValidation from "../../helper/FormValidation";
import SessionHelper from "../../helper/SessionHelper";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const props = {
    className: "reactCodeInput",
    inputStyle: {
      margin: "4px",
      width: "45px",
      borderRadius: "3px",
      fontSize: "14px",
      height: "26px",
      paddingLeft: "7px",
      backgroundColor: "rgb(55 65 81 / var(--tw-bg-opacity))",
      color: "#ffff",
      border: "1px solid lightskyblue",
    },
    inputStyleInvalid: {
      margin: "4px",
      width: "45px",
      borderRadius: "3px",
      fontSize: "14px",
      height: "26px",
      paddingLeft: "7px",
      backgroundColor: "#ffff",
      color: "#ffff",
      border: "1px solid red",
    },
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Email: SessionHelper.GetOtpEmail(),
      OtpCode: otp,
    },

    validationSchema: Yup.object({
      Email: Yup.string()
        .required("Email is Required")
        .matches(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Invalid Email address",
        ),
      OtpCode: Yup.string()
        .required("Otp Code is Required")
        .min(6, "Otp Otp must be 6 characters"),
    }),

    onSubmit: (values) => {
      UserRequest.VerifyRecoveryOtp(values.OtpCode).then((result) => {
        if (result) {
          navigate("/reset-password");
        }
      });
    },
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Verify Otp Code
          </h1>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <input
                disabled
                type="email"
                name="Email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@example.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Email}
              />
              {formik.touched.Email &&
                formik.errors.Email &&
                FormValidation.isError(formik.errors.Email)}
              <label
                htmlFor="otpcode"
                className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Otp Code
              </label>
              <ReactCodeInput
                type="text"
                fields={6}
                {...props}
                name="OtpCode"
                onChange={(value) => setOtp(value)}
                onBlur={formik.handleBlur}
                value={formik.values.OtpCode}
              />
              {formik.touched.OtpCode &&
                formik.errors.OtpCode &&
                FormValidation.isError(formik.errors.OtpCode)}
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className=" w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <Link
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    to="/terms-and-conditions"
                  >
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Verify Opt
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VerifyOtp;

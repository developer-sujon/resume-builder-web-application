//External lib Import
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

//Internal  lib import
import FormValidation from "../../helper/FormValidation";
import UserRequest from "../../APIRequest/UserRequest";

const SendOtp = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Email: "",
    },

    validationSchema: Yup.object({
      Email: Yup.string()
        .required("Email is Required")
        .matches(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Invalid Email address",
        ),
    }),

    onSubmit: (values) => {
      UserRequest.SendRecoveryOtp(values.Email).then((result) => {
        if (result) {
          navigate("/verify-otp");
        }
      });
    },
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Forgot your password?
          </h1>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Don't fret! Just type in Your Email and we will send you a code to
            reset your password!
          </p>
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
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
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
              Reset password
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

export default SendOtp;

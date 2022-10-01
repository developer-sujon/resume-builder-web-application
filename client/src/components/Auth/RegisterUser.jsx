//External Import
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

//Internal Import
import FormValidation from "../../helper/FormValidation";
import AuthRequest from "../../APIRequest/AuthRequest";

const RegisterUser = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      FullName: "",
      UserName: "",
      Phone: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    },

    validationSchema: Yup.object({
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
      Password: Yup.string().required("Password is Required"),
      ConfirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf(
          [Yup.ref("Password"), null],
          "Passwords and Confirm Password must match",
        ),
    }),

    onSubmit: (values) => {
      const { ConfirmPassword, ...postBody } = values;

      AuthRequest.RegisterUser(postBody).then((result) => {
        if (result) {
          navigate("/login");
        }
      });
    },
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create a new account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex flex-wrap mx-[-15px]">
                <div className="px-[15px] w-full md:w-[50%]">
                  <label
                    htmlFor="FullName"
                    className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="FullName"
                    id="FullName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Mohammad Salman"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.FullName}
                  />
                  {formik.touched.FullName &&
                    formik.errors.FullName &&
                    FormValidation.isError(formik.errors.FullName)}
                </div>

                <div className="px-[15px] w-full md:w-[50%]">
                  <label
                    htmlFor="UserName"
                    className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    name="UserName"
                    id="UserName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Salman23"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.UserName}
                  />
                  {formik.touched.UserName &&
                    formik.errors.UserName &&
                    FormValidation.isError(formik.errors.UserName)}
                </div>
              </div>

              <div className="flex flex-wrap mx-[-15px]">
                <div className="px-[15px] w-full md:w-[50%]">
                  <label
                    htmlFor="phone"
                    className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    name="Phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+8801880000000"
                    min={1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Phone}
                  />
                  {formik.touched.Phone &&
                    formik.errors.Phone &&
                    FormValidation.isError(formik.errors.Phone)}
                </div>

                <div className="px-[15px] w-full md:w-[50%]">
                  <label
                    htmlFor="email"
                    className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
              </div>

              <div className="flex flex-wrap mx-[-15px]">
                <div className="px-[15px] w-full md:w-[50%]">
                  <label
                    htmlFor="password"
                    className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="Password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Password}
                  />
                  {formik.touched.Password &&
                    formik.errors.Password &&
                    FormValidation.isError(formik.errors.Password)}
                </div>
                <div className="px-[15px] w-full md:w-[50%]">
                  <label
                    htmlFor="confirm-password"
                    className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="ConfirmPassword"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ConfirmPassword}
                  />
                  {formik.touched.ConfirmPassword &&
                    formik.errors.ConfirmPassword &&
                    FormValidation.isError(formik.errors.ConfirmPassword)}
                </div>
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
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
              >
                Create an account
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
      </div>
    </section>
  );
};

export default RegisterUser;

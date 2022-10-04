//External Import
import { Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

//Internal Import
import FormValidation from "../../helper/FormValidation";
import AuthRequest from "../../APIRequest/AuthRequest";

const validationSchema = Yup.object().shape({
  FirstName: Yup.string().required("First Name is Required"),
  LastName: Yup.string().required("Last Name is Required"),
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
                Phone: "",
                Email: "",
                Password: "",
                ConfirmPassword: "",
                Gender: "Other",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
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
                      />
                    </div>
                    <div className="px-[15px] w-full md:w-[50%]">
                      <MyInput
                        name="LastName"
                        label="Last Name"
                        type="text"
                        placeholder="Salman"
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
                          <Field type="radio" name="Gender" value="Male" /> Male
                        </label>
                        <label>
                          <Field type="radio" name="Gender" value="Frmale" />
                          Frmale
                        </label>
                        <label>
                          <Field type="radio" name="Gender" value="Other" />
                          Other
                        </label>
                      </div>
                    </div>
                    <div className="px-[15px] w-full md:w-[50%]">
                      <MyInput
                        name="LastName"
                        label="Mobile Number"
                        type="text"
                        placeholder="Mobile Number"
                      />
                    </div>
                  </div>

                  <button type="submit">Submit</button>
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
              className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {label}
            </label>
            <input
              type={type}
              placeholder={placeholder}
              {...field}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </>
        )}
      </Field>
    </>
  );
};

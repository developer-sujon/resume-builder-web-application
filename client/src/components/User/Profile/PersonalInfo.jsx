//External Import
import { Field, ErrorMessage } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//Inernal Import

const PersonalInfo = (values) => {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-[33.333333%]">
          <label
            htmlFor="FullName"
            className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Full Name
          </label>

          <Field
            id="FullName"
            type="text"
            name="FullName"
            placeholder="Mohammad Salman"
            component={MyInput}
          />
          <p
            id="filled_error_help"
            className="mt-2 text-md text-red-600 dark:text-red-400"
          >
            <ErrorMessage name="FullName" />
          </p>
        </div>
        <div className="px-[15px] w-full md:w-[33.333333%]">
          <label
            htmlFor="UserName"
            className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>

          <Field
            id="UserName"
            type="text"
            name="UserName"
            placeholder="Salman"
            component={MyInput}
          />
          <p
            id="filled_error_help"
            className="mt-2 text-md text-red-600 dark:text-red-400"
          >
            <ErrorMessage name="UserName" />
          </p>
        </div>

        <div className="px-[15px] w-full md:w-[33.333333%]">
          <label
            htmlFor="Email"
            className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email Address
          </label>

          <Field
            id="Email"
            type="text"
            name="Email"
            placeholder="name@example.com"
            component={MyInput}
          />
          <p
            id="filled_error_help"
            className="mt-2 text-md text-red-600 dark:text-red-400"
          >
            <ErrorMessage name="Email" />
          </p>
        </div>
      </div>

      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-[33.333333%]">
          <label
            htmlFor="Phone"
            className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mobile Number
          </label>

          <Field
            id="Phone"
            type="number"
            min="0"
            name="Phone"
            placeholder="+8801880000000"
            component={MyInput}
          />
          <p
            id="filled_error_help"
            className="mt-2 text-md text-red-600 dark:text-red-400"
          >
            <ErrorMessage name="Phone" />
          </p>
        </div>
        <div className="px-[15px] w-full md:w-[33.333333%]">
          <label
            htmlFor="Portfolio"
            className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Portfolio
          </label>

          <Field
            id="Portfolio"
            type="url"
            name="Portfolio"
            placeholder="https://www.example.com"
            component={MyInput}
          />
        </div>
        <div className="px-[15px] w-full md:w-[33.333333%]">
          <Field name="Address">
            {({ field, form: { touched, errors }, meta }) => (
              <>
                <label
                  htmlFor="Address"
                  className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <textarea
                  id="Address"
                  name="Address"
                  placeholder="Address"
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
        </div>
      </div>

      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full">
          <Field name="CarrierObjective">
            {({
              field,
              form: { touched, errors, setFieldValue, values },
              meta,
            }) => (
              <>
                <label
                  htmlFor="CarrierObjective"
                  className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Carrier Objective
                </label>
                <ReactQuill
                  onChange={(html) => setFieldValue("CarrierObjective", html)}
                  value={values?.CarrierObjective}
                  theme="snow"
                  bounds={".app"}
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
      </div>
    </>
  );
};

export default PersonalInfo;

const MyInput = ({ field, form, ...props }) => {
  return (
    <input
      {...field}
      {...props}
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  );
};

//External Import
import { Field } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//Inernal Import

const OtherRelevantInformation = () => {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full">
          <Field name="CareerSummary">
            {({
              field,
              form: { touched, errors, setFieldValue, values },
              meta,
            }) => (
              <>
                <label
                  htmlFor="CareerSummary"
                  className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Career Summary
                </label>
                <ReactQuill
                  onChange={(html) => setFieldValue("CareerSummary", html)}
                  value={values?.CareerSummary}
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
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full">
          <Field name="SpecialQualification">
            {({
              field,
              form: { touched, errors, setFieldValue, values },
              meta,
            }) => (
              <>
                <label
                  htmlFor="SpecialQualification"
                  className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Special Qualification
                </label>
                <ReactQuill
                  onChange={(html) =>
                    setFieldValue("SpecialQualification", html)
                  }
                  value={values?.SpecialQualification}
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
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full">
          <MyInputField
            name="Keywords"
            type="text"
            label="Keywords"
            placeholder="HTML, CSS, Js"
            require={true}
          />
        </div>
      </div>
    </>
  );
};

export default OtherRelevantInformation;

const MyInputField = ({ name, type, label, placeholder, require }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="inline-block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>

      {require && <span className="text-red-600 ml-1">*</span>}

      <Field name={name}>
        {({ field, form: { touched, errors }, meta }) => (
          <>
            <input
              min="1"
              id={name}
              name={name}
              type={type}
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

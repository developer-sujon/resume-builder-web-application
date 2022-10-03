//External Import
import { Field, ErrorMessage } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//Inernal Import

const CareerandApplicationInformation = () => {
  return (
    <>
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
                  Carrier Objective <span className="text-red-600 ml-1">*</span>
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
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-6/12">
          <MyInputField
            name="PresentSalary"
            type="number"
            label="Present Salary"
            placeholder="Present Salary"
            require={false}
          />
          <span>TK/ Month</span>
        </div>
        <div className="px-[15px] w-full md:w-6/12">
          <MyInputField
            name="ExpectedSalary"
            type="number"
            label="Expected Salary"
            placeholder="Expected Salary"
            require={false}
          />
          <span>TK/ Month</span>
        </div>
      </div>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-6/12">
          <div className="flex flex-col">
            <label>Looking for (Job Level)</label>
            <div className="flex items-center mr-4">
              <MyInputRadioField
                name="JobLevel"
                label="Entry Level"
                id="EntryLevel"
                value="Entry Level"
              />
              <MyInputRadioField
                name="JobLevel"
                label="Mid Level"
                id="MidLevel"
                value="Mid Level"
              />
              <MyInputRadioField
                name="JobLevel"
                label="Top Level"
                id="TopLevel"
                value="Top Level"
              />
            </div>
          </div>
        </div>
        <div className="px-[15px] w-full md:w-6/12">
          <div className="flex flex-col">
            <label>Available for (Job Nature)</label>
            <div className="flex items-center mr-4">
              <MyInputRadioField
                name="JobNature"
                label="Full time"
                id="Fulltime"
                value="Full time"
              />
              <MyInputRadioField
                name="JobNature"
                label="Part time"
                id="Parttime"
                value="Part time"
              />
              <MyInputRadioField
                name="JobNature"
                label="Contract"
                id="Contract"
                value="Contract"
              />
              <MyInputRadioField
                name="JobNature"
                label="Internship"
                id="Internship"
                value="Internship"
              />
              <MyInputRadioField
                name="JobNature"
                label="Freelance"
                id="Freelance"
                value="Freelance"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerandApplicationInformation;

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

const MyInputRadioField = ({ name, label, id, value }) => {
  return (
    <>
      <Field
        id={id}
        type="radio"
        name={name}
        value={value}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />

      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-900 dark:text-gray-300  mx-2"
      >
        {label}
      </label>
    </>
  );
};

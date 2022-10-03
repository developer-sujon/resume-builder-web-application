//External Import
import { Field } from "formik";
import "react-quill/dist/quill.snow.css";

//Inernal Import
const NationalDisability = () => {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full">
          <MyInputField
            name="NationalDisability"
            type="text"
            label="National Disability Id"
            placeholder="If you are a person with disability and have no Disability ID Number, please contact i2i support +88 01730369802 by Call/ SMS/ WhatsApp"
            require={false}
          />
        </div>
      </div>
    </>
  );
};

export default NationalDisability;

const MyInputField = ({ name, type, label, placeholder, require }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="inline-block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label> <br />
      <span>You didn't mention your ID yet.</span>

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

//External Import
import { AiOutlinePlus } from "react-icons/ai";
import { Field } from "formik";
import { useSelector } from "react-redux";
import { countryList } from "../../../../helper/countryList";
import { useState } from "react";

//Inernal Import

const AddressDetails = (props) => {
  const { UserDetails } = useSelector((state) => state.User);
  const [insideBangladesh, setInideBangladesh] = useState(true);

  return (
    <div className="flex flex-wrap mx-[-15px] my-5">
      <div className="px-[15px] w-full">
        <MyInputField
          name="Phone"
          type="text"
          label="Present Address"
          placeholder="Present Address"
          require={true}
          insideBangladesh={insideBangladesh}
          setInideBangladesh={setInideBangladesh}
        />
      </div>
    </div>
  );
};

export default AddressDetails;

const MyInputField = ({
  name,
  type,
  label,
  placeholder,
  require,
  insideBangladesh,
  setInideBangladesh,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className="inline-block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>

      {require && <span className="text-red-600 ml-1">*</span>}

      <div className="flex mb-3">
        <div className="flex items-center mr-4">
          <input
            id="InsideBangladesh"
            type="radio"
            defaultValue
            name="inline-radio-group"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onClick={() => setInideBangladesh(true)}
          />
          <label
            htmlFor="InsideBangladesh"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            onClick={() => setInideBangladesh(true)}
          >
            Inside Bangladesh
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="OutsideBangladesh"
            type="radio"
            defaultValue
            name="inline-radio-group"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onClick={() => setInideBangladesh(false)}
          />
          <label
            htmlFor="OutsideBangladesh"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            onClick={() => setInideBangladesh(false)}
          >
            Outside Bangladesh
          </label>
        </div>
      </div>

      {insideBangladesh ? (
        <Field
          id={name}
          name={name}
          as="select"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {countryList.map((country) => (
            <option value={country.name}>{country.name}</option>
          ))}
        </Field>
      ) : (
        <Field
          id={name}
          name={name}
          as="select"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {countryList.map((country) => (
            <option value={country.name}>{country.name}3423424</option>
          ))}
        </Field>
      )}
    </>
  );
};

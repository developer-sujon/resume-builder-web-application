//External Import
import { Field } from "formik";
import { useSelector } from "react-redux";
import {
  countryList,
  districtsLists,
  unions,
  upazilas,
} from "../../../../helper/countryList";
import { useState } from "react";

//Inernal Import
const AddressDetails = (props) => {
  const { UserDetails } = useSelector((state) => state.User);
  const [insidePresentBangladesh, setinsidePresentBangladesh] = useState(true);
  const [insidePermanentBangladesh, setinsidePermanentBangladesh] =
    useState(true);

  return (
    <div className="flex flex-wrap mx-[-15px] my-5">
      <div className="px-[15px] w-full">
        <PresentAddress
          name="PresentAddress"
          label="Present Address"
          placeholder="Present Address"
          require={true}
          insidePresentBangladesh={insidePresentBangladesh}
          setinsidePresentBangladesh={setinsidePresentBangladesh}
        />
        <div className="flex flex-wrap mx-[-15px] my-5">
          <div className="w-full px-[15px]">
            <Field name="PresentAddress.Road">
              {({ field, form: { touched, errors }, meta }) => (
                <>
                  <input
                    id="PresentAddress.Road"
                    type="text"
                    placeholder="Type your House No/Road/Village"
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
      </div>
      <div className="px-[15px] w-full">
        <PermanentAddress
          name="PermanentAddress"
          label="Permanent Address"
          placeholder="Permanent Address"
          require={true}
          insidePermanentBangladesh={insidePermanentBangladesh}
          setinsidePermanentBangladesh={setinsidePermanentBangladesh}
        />
        <div className="flex flex-wrap mx-[-15px] my-5">
          <div className="w-full px-[15px]">
            <Field name="PermanentAddress.Road">
              {({ field, form: { touched, errors }, meta }) => (
                <>
                  <input
                    id="PermanentAddress.Road"
                    type="text"
                    placeholder="Type your House No/Road/Village"
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
      </div>
    </div>
  );
};

export default AddressDetails;

const PresentAddress = ({
  name,
  label,
  placeholder,
  require,
  insidePresentBangladesh,
  setinsidePresentBangladesh,
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
            id="insidePresentBangladesh"
            type="radio"
            defaultValue
            name="PresentAddressCountry"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onClick={() => setinsidePresentBangladesh(true)}
            defaultChecked={insidePresentBangladesh}
          />
          <label
            htmlFor="insidePresentBangladesh"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            onClick={() => setinsidePresentBangladesh(true)}
          >
            Inside Bangladesh
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="outsidePresentBangladesh"
            type="radio"
            defaultValue
            name="PresentAddressCountry"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onClick={() => setinsidePresentBangladesh(false)}
          />
          <label
            htmlFor="outsidePresentBangladesh"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            onClick={() => setinsidePresentBangladesh(false)}
          >
            Outside Bangladesh
          </label>
        </div>
      </div>
      {insidePresentBangladesh ? (
        <>
          <div className="flex flex-wrap mx-[-15px] my-5">
            <div className="w-full md:w-4/12 px-[15px]">
              <Field
                id="PresentAddressDistrict"
                name="PresentAddress.District"
                as="select"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {districtsLists.map((district, i) => (
                  <option value={district.name} key={i}>
                    {district.name}
                  </option>
                ))}
              </Field>
            </div>
            <div className="w-full md:w-4/12 px-[15px]">
              <Field
                id="PresentAddressUpazila"
                name="PresentAddress.Upazila"
                as="select"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {upazilas.map((upazila, i) => (
                  <option value={upazila.name} key={i}>
                    {upazila.name}
                  </option>
                ))}
              </Field>
            </div>
            <div className="w-full md:w-4/12 px-[15px]">
              <Field
                id="PresentAddressUnion"
                name="PresentAddress.Union"
                as="select"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {unions.map((union, i) => (
                  <option value={union.postOffice} key={i}>
                    {union.postOffice}
                  </option>
                ))}
              </Field>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-wrap mx-[-15px] my-5">
            <div className="w-full px-[15px]">
              <Field
                id="PresentAddressCountry"
                name="PresentAddress.Country"
                as="select"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {countryList.map((country, i) => (
                  <option value={country.name} key={i}>
                    {country.name}
                  </option>
                ))}
              </Field>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const PermanentAddress = ({
  name,
  label,
  placeholder,
  require,
  insidePermanentBangladesh,
  setinsidePermanentBangladesh,
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
            id="insidePermanentBangladesh"
            type="radio"
            defaultValue
            name="PermanentAddressCountry"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onClick={() => setinsidePermanentBangladesh(true)}
            defaultChecked={insidePermanentBangladesh}
          />
          <label
            htmlFor="insidePermanentBangladesh"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            onClick={() => setinsidePermanentBangladesh(true)}
          >
            Inside Bangladesh
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="outsidePermanentBangladesh"
            type="radio"
            defaultValue
            name="PermanentAddressCountry"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onClick={() => setinsidePermanentBangladesh(false)}
          />
          <label
            htmlFor="outsidePermanentBangladesh"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            onClick={() => setinsidePermanentBangladesh(false)}
          >
            Outside Bangladesh
          </label>
        </div>
      </div>
      {insidePermanentBangladesh ? (
        <>
          <div className="flex flex-wrap mx-[-15px] my-5">
            <div className="w-full md:w-4/12 px-[15px]">
              <Field
                id="PermanentAddressDistrict"
                name="PermanentAddress.District"
                as="select"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {districtsLists.map((district, i) => (
                  <option value={district.name} key={i}>
                    {district.name}
                  </option>
                ))}
              </Field>
            </div>
            <div className="w-full md:w-4/12 px-[15px]">
              <Field
                id="PermanentAddressUpazila"
                name="PermanentAddress.Upazila"
                as="select"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {upazilas.map((upazila, i) => (
                  <option value={upazila.name} key={i}>
                    {upazila.name}
                  </option>
                ))}
              </Field>
            </div>
            <div className="w-full md:w-4/12 px-[15px]">
              <Field
                id="PermanentAddressUnion"
                name="PermanentAddress.Union"
                as="select"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {unions.map((union, i) => (
                  <option value={union.postOffice} key={i}>
                    {union.postOffice}
                  </option>
                ))}
              </Field>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-wrap mx-[-15px] my-5">
            <div className="w-full px-[15px]">
              <Field
                id="PermanentAddressCountry"
                name="PermanentAddress.Country"
                as="select"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {countryList.map((country, i) => (
                  <option value={country.name} key={i}>
                    {country.name}
                  </option>
                ))}
              </Field>
            </div>
          </div>
        </>
      )}
    </>
  );
};

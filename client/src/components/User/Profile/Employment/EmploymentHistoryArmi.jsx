import React from "react";
import { ErrorMessage, Field } from "formik";

const EmploymentHistoryArmi = () => {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="w-full md:w-6/12 px-[15px]">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full md:w-4/12 px-[15px]">
              <MySelectField
                name="BANo"
                label="BA No"
                require={true}
                options={[
                  { name: "BA" },
                  { name: "BSS" },
                  { name: "JSS" },
                  { name: "BSP" },
                  { name: "BJO" },
                  { name: "No" },
                ]}
              />
            </div>
            <div className="w-full md:w-8/12 px-[15px]">
              <MyInputField
                name="BANoInput"
                type="text"
                label="BANo"
                placeholder="BANo"
                require={true}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 px-[15px]">
          <MySelectField
            name="Ranks"
            label="Ranks"
            require={true}
            options={[
              { name: "2Lt" },
              { name: "Lt" },
              { name: "Capt" },
              { name: "Maj" },
              { name: "Lt Col" },
              { name: "Col" },
              { name: "Brig Gen" },
              { name: "Lt Gen" },
              { name: "Gen" },
              { name: "CoSnkl" },
              { name: "L/cpl" },
              { name: "Cpl" },
              { name: "Sgt" },
              { name: "WO" },
              { name: "SWO" },
              { name: "MWO" },
              { name: "H/Lt" },
              { name: "H/Capt" },
            ]}
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="w-full md:w-6/12 px-[15px]">
          <MySelectField
            name="Type"
            label="Type"
            require={true}
            options={[{ name: "Officer" }, { name: "JCO" }, { name: "NCO" }]}
          />
        </div>
        <div className="w-full md:w-6/12 px-[15px]">
          <MySelectField
            name="Arms"
            label="Arms"
            require={true}
            options={[
              { name: "Sigs" },
              { name: "Engr" },
              { name: "EME" },
              { name: "Ord" },
              { name: "AMC" },
              { name: "AEC" },
              { name: "CMP" },
              { name: "ADC" },
              { name: "AFNS" },
              { name: "RVFC" },
              { name: "ACC" },
            ]}
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="w-full md:w-6/12 px-[15px]">
          <MyInputField
            name="Trade"
            type="text"
            label="Trade"
            placeholder="Trade"
            require={false}
          />
        </div>
        <div className="w-full md:w-6/12 px-[15px]">
          <MyInputField
            name="Course"
            type="text"
            label="Course"
            placeholder="Course"
            require={false}
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="w-full md:w-6/12 px-[15px]">
          <MyInputField
            name="DateOfCommission"
            type="date"
            label="Date of Commission"
            placeholder=""
            require={true}
          />
        </div>
        <div className="w-full md:w-6/12 px-[15px]">
          <MyInputField
            name="DateOfRetirement"
            type="date"
            label="Date of Retirement"
            placeholder=""
            require={true}
          />
        </div>
      </div>
    </>
  );
};

export default EmploymentHistoryArmi;

const MySelectField = ({ name, label, require, options }) => {
  return (
    <>
      <label
        htmlFor={`EmploymentHistoryArmi.${name}`}
        className="inline-block my-3 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white "
      >
        {label}
      </label>

      {require && <span className="text-red-600 ml-1">*</span>}

      <Field
        id={`EmploymentHistoryArmi.${name}`}
        name={`EmploymentHistoryArmi.${name}`}
        as="select"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option) => (
          <option value={option.name}>{option.name}</option>
        ))}
      </Field>
    </>
  );
};

const MyInputField = ({ name, type, label, placeholder, require }) => {
  return (
    <>
      <label
        htmlFor={`EmploymentHistoryArmi.${name}`}
        className="inline-block my-3 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white "
      >
        {label}
      </label>
      {require && <span className="text-red-600 ml-1">*</span>}

      <Field
        id={`EmploymentHistoryArmi.${name}`}
        type={type}
        name={`EmploymentHistoryArmi.${name}`}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <p
        id="filled_error_help"
        className="mt-2 text-md text-red-600 dark:text-red-400"
      >
        <ErrorMessage name={`EmploymentHistoryArmi.${name}`} />
      </p>
    </>
  );
};

import React from "react";
import { ErrorMessage, Field, FieldArray } from "formik";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const LanguageProficiency = (values) => {
  return (
    <>
      <FieldArray
        name="LanguageProficiency"
        render={(arrayHelpers) => (
          <div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-5">
              Add Language{" "}
              <button type="button">
                <AiOutlinePlus
                  onClick={() =>
                    arrayHelpers.push({
                      Language: "",
                      Reading: "",
                      Writing: "",
                      Speaking: "",
                    })
                  }
                />
              </button>
            </h1>
            {values.LanguageProficiency &&
              values.LanguageProficiency.length > 0 &&
              values.LanguageProficiency.map((skill, index) => (
                <div className="py-10 border-b-4 border-blue-500">
                  <div className="flex flex-wrap mx-[-15px] my-5">
                    <div className="w-full md:w-6/12 px-[15px]">
                      <MyInputField
                        index={index}
                        name="Language"
                        type="text"
                        label="Language"
                        placeholder="Language"
                        require={true}
                      />
                    </div>
                    <div className="w-full md:w-6/12 px-[15px]">
                      <MySelectField
                        index={index}
                        name="Reading"
                        label="Reading"
                        require={true}
                        options={[
                          { name: "High" },
                          { name: "Medium" },
                          { name: "Secondary" },
                          { name: "Low" },
                        ]}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-[-15px] my-5">
                    <div className="w-full md:w-6/12 px-[15px]">
                      <MySelectField
                        index={index}
                        name="Writing"
                        label="Writing"
                        require={true}
                        options={[
                          { name: "High" },
                          { name: "Medium" },
                          { name: "Secondary" },
                          { name: "Low" },
                        ]}
                      />
                    </div>
                    <div className="w-full md:w-6/12 px-[15px]">
                      <MySelectField
                        index={index}
                        name="Speaking"
                        label="Speaking"
                        require={true}
                        options={[
                          { name: "High" },
                          { name: "Medium" },
                          { name: "Secondary" },
                          { name: "Low" },
                        ]}
                      />
                    </div>
                  </div>

                  <div className="px-[15px] w-full md:w-1/12 md:mt-10">
                    <label className="text-white my-3 block"></label>
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      <IoIosRemoveCircleOutline />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      />
    </>
  );
};

export default LanguageProficiency;

const MyInputField = ({ index, name, type, label, placeholder, require }) => {
  return (
    <>
      <label
        htmlFor={`LanguageProficiency.${index}.${name}`}
        className="inline-block my-3 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white "
      >
        {label}
      </label>
      {require && <span className="text-red-600 ml-1">*</span>}
      <Field
        id={`LanguageProficiency.${index}.${name}`}
        type={type}
        name={`LanguageProficiency.${index}.${name}`}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <p
        id="filled_error_help"
        className="mt-2 text-md text-red-600 dark:text-red-400"
      >
        <ErrorMessage name={`LanguageProficiency.${index}.${name}`} />
      </p>
    </>
  );
};

const MySelectField = ({ index, name, label, require, options }) => {
  return (
    <>
      <label
        htmlFor={`LanguageProficiency.${index}.${name}`}
        className="inline-block my-3 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white "
      >
        {label}
      </label>

      {require && <span className="text-red-600 ml-1">*</span>}

      <Field
        id={`LanguageProficiency.${index}.${name}`}
        name={`LanguageProficiency.${index}.${name}`}
        as="select"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option, i) => (
          <option value={option.name} key={i}>{option.name}</option>
        ))}
      </Field>
    </>
  );
};

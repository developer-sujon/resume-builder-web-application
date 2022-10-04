import React from "react";
import { ErrorMessage, Field, FieldArray } from "formik";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const References = (values) => {
  return (
    <>
      <FieldArray
        name="References"
        render={(arrayHelpers) => (
          <div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-5">
              Add Reference{" "}
              <button type="button">
                <AiOutlinePlus
                  onClick={() =>
                    arrayHelpers.push({
                      Name: "",
                      Designation: "",
                      Organization: "",
                      Email: "",
                      Relation: "",
                      Mobile: "",
                      PhoneOff: "",
                      PhoneRes: "",
                      Address: "",
                    })
                  }
                />
              </button>
            </h1>
            {values.References &&
              values.References.length > 0 &&
              values.References.map((skill, index) => (
                <div className="py-10 border-b-4 border-blue-500" key={index}>
                  <div className="flex flex-wrap mx-[-15px] my-5">
                    <div className="w-full md:w-6/12 px-[15px]">
                      <MyInputField
                        index={index}
                        name="Name"
                        type="text"
                        label="Name"
                        placeholder="Name"
                        require={true}
                      />
                    </div>
                    <div className="w-full md:w-6/12 px-[15px]">
                      <MyInputField
                        index={index}
                        name="Designation"
                        type="text"
                        label="Designation"
                        placeholder="Designation"
                        require={true}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-[-15px] my-5">
                    <div className="w-full md:w-6/12 px-[15px]">
                      <MyInputField
                        index={index}
                        name="Organization"
                        type="text"
                        label="Organization"
                        placeholder="Organization"
                        require={true}
                      />
                    </div>
                    <div className="w-full md:w-6/12 px-[15px]">
                      <MyInputField
                        index={index}
                        name="Email"
                        type="text"
                        label="Email"
                        placeholder="Email"
                        require={false}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-[-15px] my-5">
                    <div className="w-full md:w-6/12 px-[15px]">
                      <MySelectField
                        index={index}
                        name="Relation"
                        label="Relation"
                        require={false}
                        options={[
                          { name: "Relative" },
                          { name: "Family Friend" },
                          { name: "Academic" },
                          { name: "Professional" },
                          { name: "Others" },
                        ]}
                      />
                    </div>
                    <div className="w-full md:w-6/12 px-[15px]">
                      <MyInputField
                        index={index}
                        name="Mobile"
                        type="number"
                        label="Mobile"
                        placeholder="Mobile"
                        require={false}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-[-15px] my-5">
                    <div className="w-full md:w-6/12 px-[15px]">
                      <MyInputField
                        index={index}
                        name="PhoneOff"
                        type="number"
                        label="Phone (Off)"
                        placeholder="Phone (Off)"
                        require={false}
                      />
                    </div>
                    <div className="w-full md:w-6/12 px-[15px]">
                      <MyInputField
                        index={index}
                        name="PhoneRes"
                        type="number"
                        label="Phone (Res)"
                        placeholder="Phone (Res)"
                        require={false}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-[-15px] my-5">
                    <div className="w-full px-[15px]">
                      <Field
                        name={`References.${index}.${"Address"}`}
                        type="textarea"
                      >
                        {({
                          field,
                          form: { touched, errors, setFieldValue, values },
                          meta,
                        }) => (
                          <>
                            <label
                              htmlFor={`References.${index}.${"Address"}`}
                              className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Address
                            </label>

                            <textarea
                              id={`References.${index}.${"Address"}`}
                              cols="60"
                              rows="5"
                              {...field}
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            ></textarea>
                          </>
                        )}
                      </Field>
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-[-15px]">
                    <div className="px-[15px] w-full md:w-1/12 md:mt-10">
                      <label className="text-white block"></label>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        <IoIosRemoveCircleOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      />
    </>
  );
};

export default References;

const MyInputField = ({ index, name, type, label, placeholder, require }) => {
  return (
    <>
      <label
        htmlFor={`References.${index}.${name}`}
        className="inline-block my-3 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white "
      >
        {label}
      </label>
      {require && <span className="text-red-600 ml-1">*</span>}
      <Field
        min="1"
        id={`References.${index}.${name}`}
        type={type}
        name={`References.${index}.${name}`}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      <p
        id="filled_error_help"
        className="mt-2 text-md text-red-600 dark:text-red-400"
      >
        <ErrorMessage name={`References.${index}.${name}`} />
      </p>
    </>
  );
};

const MySelectField = ({ index, name, label, require, options }) => {
  return (
    <>
      <label
        htmlFor={`References.${index}.${name}`}
        className="inline-block my-3 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white "
      >
        {label}
      </label>

      {require && <span className="text-red-600 ml-1">*</span>}

      <Field
        id={`References.${index}.${name}`}
        name={`References.${index}.${name}`}
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

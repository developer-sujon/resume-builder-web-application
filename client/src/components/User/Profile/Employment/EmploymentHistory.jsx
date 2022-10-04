//External Import
import { ErrorMessage, Field, FieldArray } from "formik";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

const EmploymentHistory = (values) => {
  return (
    <>
      <FieldArray
        name="EmploymentHistorys"
        render={(arrayHelpers) => (
          <div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-5">
              Add Experience{" "}
              <button type="button">
                <AiOutlinePlus
                  onClick={() =>
                    arrayHelpers.push({
                      CompanyName: "",
                      CompanyBusiness: "",
                      Designation: "",
                      Department: "",
                      StartDate: "",
                      EndDate: "",
                      Responsibilities: "",
                      CompanyLocation: "",
                    })
                  }
                />
              </button>
            </h1>
            {values.EmploymentHistorys &&
              values.EmploymentHistorys.length > 0 &&
              values.EmploymentHistorys.map((skill, index) => (
                <div className="py-10 border-b-4 border-blue-500">
                  <div className="flex flex-wrap mx-[-15px] mb-3">
                    <div className="px-[15px] w-full md:w-6/12">
                      <MyInputField
                        index={index}
                        name="CompanyName"
                        type="text"
                        label="Company Name"
                        placeholder=""
                        require={true}
                      />
                    </div>
                    <div className="px-[15px] w-full md:w-6/12">
                      <MyInputField
                        index={index}
                        name="CompanyBusiness"
                        type="text"
                        label="Company Business"
                        placeholder=""
                        require={false}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mx-[-15px] mb-3">
                    <div className="px-[15px] w-full md:w-6/12">
                      <MyInputField
                        index={index}
                        name="Designation"
                        type="text"
                        label="Designation"
                        placeholder=""
                        require={true}
                      />
                    </div>
                    <div className="px-[15px] w-full md:w-6/12">
                      <MyInputField
                        index={index}
                        name="Department"
                        type="text"
                        label="Department"
                        placeholder=""
                        require={true}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mx-[-15px] mb-3">
                    <div className="px-[15px] w-full md:w-6/12">
                      <label
                        htmlFor="EmploymentPeriod"
                        className="inline-block my-3 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white "
                      >
                        Employment Period
                      </label>
                      {require && <span className="text-red-600 ml-1">*</span>}
                      <div className="flex flex-wrap mx-[-15px] mb-3">
                        <div className="px-[15px] w-full md:w-6/12">
                          <Field
                            id="StartDate"
                            type="date"
                            name={`EmploymentHistorys.${index}.${"StartDate"}`}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                          <p
                            id="filled_error_help"
                            className="mt-2 text-md text-red-600 dark:text-red-400"
                          >
                            <ErrorMessage
                              name={`EmploymentHistorys.${index}.${"StartDate"}`}
                            />
                          </p>
                        </div>

                        <div className="px-[15px] w-full md:w-6/12">
                          <Field
                            id="EndDate"
                            type="date"
                            name={`EmploymentHistorys.${index}.${"EndDate"}`}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                          <p
                            id="filled_error_help"
                            className="mt-2 text-md text-red-600 dark:text-red-400"
                          >
                            <ErrorMessage
                              name={`EmploymentHistorys.${index}.${"StartDate"}`}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap mx-[-15px] my-5">
                    <div className="px-[15px] w-full">
                      <Field
                        name={`EmploymentHistorys.${index}.${"Responsibilities"}`}
                        type="textarea"
                      >
                        {({
                          field,
                          form: { touched, errors, setFieldValue, values },
                          meta,
                        }) => (
                          <>
                            <label
                              htmlFor={`EmploymentHistorys.${index}.${"Responsibilities"}`}
                              className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Responsibilities{" "}
                            </label>

                            <textarea
                              id={`EmploymentHistorys.${index}.${"Responsibilities"}`}
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

                  <div className="flex flex-wrap mx-[-15px] mb-3">
                    <div className="px-[15px] w-full">
                      <MyInputField
                        index={index}
                        name="CompanyLocation"
                        type="text"
                        label="Company Location"
                        placeholder=""
                        require={false}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => arrayHelpers.remove(index)}
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    <IoIosRemoveCircleOutline />
                  </button>
                </div>
              ))}
          </div>
        )}
      />
    </>
  );
};

export default EmploymentHistory;

const MyInputField = ({ index, name, type, label, placeholder, require }) => {
  return (
    <>
      <label
        htmlFor={`${name}`}
        className="inline-block my-3 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white "
      >
        {label}
      </label>
      {require && <span className="text-red-600 ml-1">*</span>}
      <Field
        id={`${name}`}
        type={type}
        name={`EmploymentHistorys.${index}.${name}`}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      <p
        id="filled_error_help"
        className="mt-2 text-md text-red-600 dark:text-red-400"
      >
        <ErrorMessage name={`EmploymentHistorys.${index}.${name}`} />
      </p>
    </>
  );
};

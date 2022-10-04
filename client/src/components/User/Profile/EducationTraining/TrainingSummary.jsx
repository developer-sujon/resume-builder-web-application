//External Import
import { ErrorMessage, Field, FieldArray } from "formik";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

const TrainingSummary = (values) => {
  return (
    <>
      <FieldArray
        name="Trainings"
        render={(arrayHelpers) => (
          <div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-5">
              Add Training{" "}
              <button type="button">
                <AiOutlinePlus
                  onClick={() =>
                    arrayHelpers.push({
                      Title: "",
                      Country: "",
                      Covered: "",
                      Year: "",
                      Institute: "",
                      Duration: "",
                      Location: "",
                    })
                  }
                />
              </button>
            </h1>
            {values.Trainings &&
              values.Trainings.length > 0 &&
              values.Trainings.map((skill, index) => (
                <div className="py-10 border-b-4 border-blue-500">
                  <div className="flex flex-wrap mx-[-15px] mb-3">
                    <div className="px-[15px] w-full md:w-6/12">
                      <MyInputField
                        index={index}
                        name="Title"
                        type="text"
                        label="Training Title"
                        placeholder=""
                        require={true}
                      />
                    </div>
                    <div className="px-[15px] w-full md:w-6/12">
                      <MyInputField
                        index={index}
                        name="Country"
                        type="text"
                        label="Country"
                        placeholder=""
                        require={true}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mx-[-15px] mb-3">
                    <div className="px-[15px] w-full md:w-6/12">
                      <MyInputField
                        index={index}
                        name="Covered"
                        type="text"
                        label="Topics Covered"
                        placeholder=""
                        require={false}
                      />
                    </div>
                    <div className="px-[15px] w-full md:w-6/12">
                      <MySelectField
                        index={index}
                        name="Year"
                        label="Training Year"
                        require={true}
                        options={[
                          { name: "2010" },
                          { name: "2015" },
                          { name: "2020" },
                          { name: "2030" },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mx-[-15px] mb-3">
                    <div className="px-[15px] w-full md:w-6/12">
                      <MyInputField
                        index={index}
                        name="Institute"
                        type="text"
                        label="Institute"
                        placeholder=""
                        require={true}
                      />
                    </div>
                    <div className="px-[15px] w-full md:w-6/12">
                      <MyInputField
                        index={index}
                        name="Duration"
                        type="text"
                        label="Duration"
                        placeholder=""
                        require={true}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mx-[-15px] mb-3">
                    <div className="px-[15px] w-full md:w-6/12">
                      <MyInputField
                        index={index}
                        name="Location"
                        type="text"
                        label="Location"
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

export default TrainingSummary;

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
        name={`Trainings.${index}.${name}`}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <p
        id="filled_error_help"
        className="mt-2 text-md text-red-600 dark:text-red-400"
      >
        <ErrorMessage name={`Trainings.${index}.${name}`} />
      </p>
    </>
  );
};

const MySelectField = ({ index, name, label, require, options }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="inline-block my-3 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white "
      >
        {label}
      </label>

      {require && <span className="text-red-600 ml-1">*</span>}

      <Field
        id={name}
        name={`Trainings.${index}.${name}`}
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

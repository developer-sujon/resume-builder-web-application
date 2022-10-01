//External Import
import { Field, FieldArray, ErrorMessage } from "formik";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

const SkillsEducation = (values) => {
  return (
    <>
      <>
        <FieldArray
          name="Education"
          render={(arrayHelpers) => (
            <div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-5">
                Add Education{" "}
                <button type="button">
                  <AiOutlinePlus
                    onClick={() =>
                      arrayHelpers.push({
                        Qualification: "",
                        Percentage: "",
                        Institution: "",
                        YearRange: "",
                      })
                    }
                  />
                </button>
              </h1>
              {values.Education &&
                values.Education.length > 0 &&
                values.Education.map((skill, index) => (
                  <div key={index} className="flex flex-wrap mx-[-15px] mb-3">
                    <div className="px-[15px] w-full md:w-4/12 py-2 md:py-0">
                      <MyEducationFrilds
                        index={index}
                        name="Qualification"
                        placeholder="Diploma in Engineering Certificate"
                      />
                      <p
                        id="filled_error_help"
                        className="mt-2 text-md text-red-600 dark:text-red-400"
                      >
                        <ErrorMessage
                          name={`Education.${index}.Qualification`}
                        />
                      </p>
                    </div>
                    <div className="px-[15px] w-full md:w-2/12 py-2 md:py-0">
                      <MyEducationFrilds
                        index={index}
                        name="Percentage"
                        placeholder="100%"
                        type="number"
                      />
                      <p
                        id="filled_error_help"
                        className="mt-2 text-md text-red-600 dark:text-red-400"
                      >
                        <ErrorMessage name={`Education.${index}.Percentage`} />
                      </p>
                    </div>
                    <div className="px-[15px] w-full md:w-3/12 py-2 md:py-0">
                      <MyEducationFrilds
                        index={index}
                        name="Institution"
                        placeholder="Meherpur College of Engineering and Technology"
                      />
                      <p
                        id="filled_error_help"
                        className="mt-2 text-md text-red-600 dark:text-red-400"
                      >
                        <ErrorMessage name={`Education.${index}.Institution`} />
                      </p>
                    </div>

                    <div className="px-[15px] w-full md:w-2/12 py-2 md:py-0">
                      <MyEducationFrilds
                        index={index}
                        name="YearRange"
                        placeholder="2010-2015"
                      />
                      <p
                        id="filled_error_help"
                        className="mt-2 text-md text-red-600 dark:text-red-400"
                      >
                        <ErrorMessage name={`Education.${index}.YearRange`} />
                      </p>
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

      <>
        <FieldArray
          name="Skills"
          render={(arrayHelpers) => (
            <div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white  my-5">
                Add Skills{" "}
                <button type="button">
                  <AiOutlinePlus
                    onClick={() =>
                      arrayHelpers.push({
                        Technology: "",
                        Rating: "",
                      })
                    }
                  />
                </button>
              </h1>
              {values.Skills &&
                values.Skills.length > 0 &&
                values.Skills.map((skill, index) => (
                  <div key={index} className="flex flex-wrap mx-[-15px]  mb-3">
                    <div className="px-[15px] w-full md:w-6/12 py-2 md:py-0">
                      <MySkillsFrilds
                        index={index}
                        name="Technology"
                        placeholder="PHP"
                      />
                      <p
                        id="filled_error_help"
                        className="mt-2 text-md text-red-600 dark:text-red-400"
                      >
                        <ErrorMessage name={`Skills.${index}.Technology`} />
                      </p>
                    </div>
                    <div className="px-[15px] w-full md:w-5/12 py-2 md:py-0">
                      <MySkillsFrilds
                        index={index}
                        name="Rating"
                        placeholder="100"
                        type="number"
                      />
                      <p
                        id="filled_error_help"
                        className="mt-2 text-md text-red-600 dark:text-red-400"
                      >
                        <ErrorMessage name={`Skills.${index}.Rating`} />
                      </p>
                    </div>
                    <div className="px-[15px] w-full md:w-1/12 py-2 md:py-0 md:mt-[3rem]">
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
    </>
  );
};

export default SkillsEducation;

const MySkillsFrilds = ({ index, name, placeholder, type = "text" }) => {
  return (
    <>
      <label htmlFor={`${name}`} className="text-white my-3 block">
        {name}
      </label>
      <Field
        id={`${name}`}
        type={type}
        name={`Skills.${index}.${name}`}
        placeholder={placeholder}
        className='className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
      />
    </>
  );
};

const MyEducationFrilds = ({ index, name, placeholder, type = "text" }) => {
  return (
    <>
      <label htmlFor={`${name}`} className="text-white my-3 block">
        {name}
      </label>
      <Field
        id={`${name}`}
        type={type}
        name={`Education.${index}.${name}`}
        placeholder={placeholder}
        className='className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
      />
    </>
  );
};

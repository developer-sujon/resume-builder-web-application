//External Import
import { Field, FieldArray, ErrorMessage } from "formik";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

const ExperienceProjects = (values) => {
  return (
    <>
      <>
        <FieldArray
          name="Experience"
          render={(arrayHelpers) => (
            <div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-5">
                Add Experience{" "}
                <button type="button">
                  <AiOutlinePlus
                    onClick={() =>
                      arrayHelpers.push({
                        Company: "",
                        Website: "",
                        Place: "",
                        YearRange: "",
                      })
                    }
                  />
                </button>
              </h1>
              {values.Experience &&
                values.Experience.length > 0 &&
                values.Experience.map((skill, index) => (
                  <div key={index} className="flex flex-wrap mx-[-15px] mb-3">
                    <div className="px-[15px] w-full md:w-4/12 py-2 md:py-0">
                      <MyExperienceFrilds
                        index={index}
                        name="Company"
                        placeholder="Glossy It"
                      />
                      <p
                        id="filled_error_help"
                        className="mt-2 text-md text-red-600 dark:text-red-400"
                      >
                        <ErrorMessage name={`Experience.${index}.Company`} />
                      </p>
                    </div>
                    <div className="px-[15px] w-full md:w-2/12 py-2 md:py-0">
                      <MyExperienceFrilds
                        index={index}
                        name="Website"
                        placeholder="https://www.glossyit.com"
                        type="url"
                      />
                      <p
                        id="filled_error_help"
                        className="mt-2 text-md text-red-600 dark:text-red-400"
                      >
                        <ErrorMessage name={`Experience.${index}.Website`} />
                      </p>
                    </div>
                    <div className="px-[15px] w-full md:w-3/12 py-2 md:py-0">
                      <MyExperienceFrilds
                        index={index}
                        name="Place"
                        placeholder="Avenue 6, Mirpur DOHS Dhaka - 1216, Bangladesh"
                      />
                      <p
                        id="filled_error_help"
                        className="mt-2 text-md text-red-600 dark:text-red-400"
                      >
                        <ErrorMessage name={`Experience.${index}.Place`} />
                      </p>
                    </div>

                    <div className="px-[15px] w-full md:w-2/12 py-2 md:py-0">
                      <MyExperienceFrilds
                        index={index}
                        name="YearRange"
                        placeholder="2010-2015"
                      />
                      <p
                        id="filled_error_help"
                        className="mt-2 text-md text-red-600 dark:text-red-400"
                      >
                        <ErrorMessage name={`Experience.${index}.YearRange`} />
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
          name="Projects"
          render={(arrayHelpers) => (
            <div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white  my-5">
                Add Projects{" "}
                <button type="button">
                  <AiOutlinePlus
                    onClick={() =>
                      arrayHelpers.push({
                        Title: "",
                        Description: "",
                        YearRange: "",
                        Link: "",
                      })
                    }
                  />
                </button>
              </h1>
              {values.Projects &&
                values.Projects.length > 0 &&
                values.Projects.map((skill, index) => (
                  <div key={index} className="flex flex-wrap mx-[-15px]  mb-3">
                    <div className="px-[15px] w-full md:w-3/12 py-2 md:py-0">
                      <MyProjectsFrilds
                        index={index}
                        name="Title"
                        placeholder="Todo List Application"
                      />
                      <p
                        id="filled_error_help"
                        className="mt-2 text-md text-red-600 dark:text-red-400"
                      >
                        <ErrorMessage name={`Projects.${index}.Title`} />
                      </p>
                    </div>
                    <div className="px-[15px] w-full md:w-4/12 py-2 md:py-0">
                      <MyProjectsFrilds
                        index={index}
                        name="Description"
                        placeholder="Todolist is daily taks notes"
                      />
                      <p
                        id="filled_error_help"
                        className="mt-2 text-md text-red-600 dark:text-red-400"
                      >
                        <ErrorMessage name={`Projects.${index}.Description`} />
                      </p>
                    </div>
                    <div className="px-[15px] w-full md:w-2/12 py-2 md:py-0">
                      <MyProjectsFrilds
                        index={index}
                        name="YearRange"
                        placeholder="2010-2015"
                      />
                      <p
                        id="filled_error_help"
                        className="mt-2 text-md text-red-600 dark:text-red-400"
                      >
                        <ErrorMessage name={`Experience.${index}.YearRange`} />
                      </p>
                    </div>
                    <div className="px-[15px] w-full md:w-2/12 py-2 md:py-0">
                      <MyProjectsFrilds
                        index={index}
                        name="Link"
                        placeholder="https://todo.glossyit.com"
                        type="url"
                      />
                      <p
                        id="filled_error_help"
                        className="mt-2 text-md text-red-600 dark:text-red-400"
                      >
                        <ErrorMessage name={`Projects.${index}.Link`} />
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

export default ExperienceProjects;

const MyProjectsFrilds = ({ index, name, placeholder, type = "text" }) => {
  return (
    <>
      <label htmlFor={`${name}`} className="text-white my-3 block">
        {name}
      </label>
      <Field
        id={`${name}`}
        type={type}
        name={`Projects.${index}.${name}`}
        placeholder={placeholder}
        className='className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
      />
    </>
  );
};

const MyExperienceFrilds = ({ index, name, placeholder, type = "text" }) => {
  return (
    <>
      <label htmlFor={`${name}`} className="text-white my-3 block">
        {name}
      </label>
      <Field
        id={`${name}`}
        type={type}
        name={`Experience.${index}.${name}`}
        placeholder={placeholder}
        className='className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
      />
    </>
  );
};

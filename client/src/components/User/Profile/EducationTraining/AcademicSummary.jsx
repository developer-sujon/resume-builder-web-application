//External Import
import { Field, FieldArray, ErrorMessage } from "formik";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

const AcademicSummary = (values) => {
  return (
    <>
      <FieldArray
        name="Educations"
        render={(arrayHelpers) => (
          <div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-5">
              Add Education{" "}
              <button type="button">
                <AiOutlinePlus
                  onClick={() =>
                    arrayHelpers.push({
                      LevelOfEducation: "",
                      ExamDegreeTitle: "",
                      ConcentrationMajorGroup: "",
                      Board: "",
                      InstituteName: "",
                      Result: "",
                      YearOfPassing: "",
                      Duration: "",
                      Achievement: "",
                    })
                  }
                />
              </button>
            </h1>
            {values.Educations &&
              values.Educations.length > 0 &&
              values.Educations.map((skill, index) => (
                <div className="py-10 border-b-4 border-blue-500">
                  <div className="flex flex-wrap mx-[-15px] mb-3">
                    <div className="px-[15px] w-full md:w-6/12">
                      <MySelectField
                        index={index}
                        name="LevelOfEducation"
                        label="Level of Education"
                        require={true}
                        options={[
                          { name: "PSC/5 pass" },
                          { name: "JSC/JDC/8 pass" },
                          { name: "Secondary" },
                          { name: "Higher Secondary" },
                          { name: "Diploma" },
                          { name: "Bachelor/Honors" },
                          { name: "Masters" },
                          { name: "PhD (Doctor of Philosophy)" },
                        ]}
                      />
                    </div>
                    <div className="px-[15px] w-full md:w-6/12">
                      <MySelectField
                        index={index}
                        name="ExamDegreeTitle"
                        label="Exam/Degree Title"
                        require={true}
                        options={[
                          { name: "SSC" },
                          { name: "O Level" },
                          { name: "Secondary" },
                          { name: "Dakhil (Madrasah)" },
                          { name: "SSC (Vocational)" },
                          { name: "Other" },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mx-[-15px] mb-3">
                    <div className="px-[15px] w-full md:w-6/12">
                      <MyInputField
                        index={index}
                        name="ConcentrationMajorGroup"
                        type="text"
                        label="Concentration/ Major/Group"
                        placeholder="Computer Science"
                        require={true}
                      />
                    </div>
                    <div className="px-[15px] w-full md:w-6/12">
                      <MySelectField
                        index={index}
                        name="Board"
                        label="Board"
                        require={true}
                        options={[
                          { name: "Barishal" },
                          { name: "Chattogram" },
                          { name: "Cumilla" },
                          { name: "Dhaka" },
                          { name: "Dinajpur" },
                          { name: "Jashore" },
                          { name: "Mymensingh" },
                          { name: "Rajshahi" },
                          { name: "Sylhet" },
                          { name: "Madrasah" },
                          { name: "Technical" },
                          { name: "BOU" },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mx-[-15px] mb-3">
                    <div className="px-[15px] w-full">
                      <MyInputField
                        index={index}
                        name="InstituteName"
                        type="text"
                        label="Institute Name"
                        placeholder=""
                        require={true}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mx-[-15px] mb-3">
                    <div className="px-[15px] w-full md:w-6/12">
                      <MySelectField
                        index={index}
                        name="Result"
                        label="Result"
                        require={true}
                        options={[
                          { name: "First Division/Class" },
                          { name: "Second  Division/Class" },
                          { name: "Third Division/Class" },
                          { name: "Grade" },
                          { name: "Appeared" },
                          { name: "Enrolled" },
                          { name: "Masters" },
                          { name: "PhD (Doctor of Philosophy)" },
                        ]}
                      />
                    </div>
                    <div className="px-[15px] w-full md:w-6/12">
                      <MySelectField
                        index={index}
                        name="YearOfPassing"
                        label="Year of Passing"
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
                        name="Duration"
                        type="text"
                        label="Duration (Years)"
                        placeholder=""
                        require={false}
                      />
                    </div>
                    <div className="px-[15px] w-full md:w-6/12">
                      <MyInputField
                        index={index}
                        name="Achievement"
                        type="text"
                        label="Achievement"
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

export default AcademicSummary;

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
        name={`Educations.${index}.${name}`}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      <p
        id="filled_error_help"
        className="mt-2 text-md text-red-600 dark:text-red-400"
      >
        <ErrorMessage name={`Educations.${index}.${name}`} />
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
        name={`Educations.${index}.${name}`}
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

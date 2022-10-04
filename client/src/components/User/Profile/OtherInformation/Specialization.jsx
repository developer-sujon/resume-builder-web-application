import React from "react";
import { Field, FieldArray, ErrorMessage } from "formik";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const Specialization = (values) => {
  return (
    <>
      <FieldArray
        name="Specialization"
        render={(arrayHelpers) => (
          <div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-5">
              Add Skill{" "}
              <button type="button">
                <AiOutlinePlus
                  onClick={() =>
                    arrayHelpers.push({
                      Skill: "",
                      HowDidYouLearn: "",
                      SkillDescription: "",
                      ExtracurricularActivities: "",
                    })
                  }
                />
              </button>
            </h1>
            {values.Specialization &&
              values.Specialization.length > 0 &&
              values.Specialization.map((skill, index) => (
                <div className="py-10 border-b-4 border-blue-500">
                  <div className="flex flex-wrap mx-[-15px] my-5">
                    <div className="w-full px-[15px]">
                      <MyInputField
                        index={index}
                        name="Skill"
                        type="text"
                        label="Skill"
                        placeholder="Skill"
                        require={true}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mx-[-15px] my-5">
                    <div className="px-[15px] w-full">
                      <div className="flex flex-col">
                        <label className="mb-2">
                          How did you learn the skill?{" "}
                          <span className="text-red-600 ml-1">*</span>
                        </label>
                        <div className="flex items-center mr-4">
                          <MyInputRadioField
                            index={index}
                            name="HowDidYouLearn"
                            label="Self"
                            id="Self"
                            value="Self"
                          />
                          <MyInputRadioField
                            index={index}
                            name="HowDidYouLearn"
                            label="Job"
                            id="Job"
                            value="Job"
                          />
                          <MyInputRadioField
                            index={index}
                            name="HowDidYouLearn"
                            label="Educational"
                            id="Educational"
                            value="Educational"
                          />
                          <MyInputRadioField
                            index={index}
                            name="HowDidYouLearn"
                            label="Professional Training"
                            id="ProfessionalTraining"
                            value="ProfessionalTraining"
                          />
                          <MyInputRadioField
                            index={index}
                            name="HowDidYouLearn"
                            label="NTVQF"
                            id="NTVQF"
                            value="NTVQF"
                          />
                        </div>
                        <p
                          id="filled_error_help"
                          className="mt-2 text-md text-red-600 dark:text-red-400"
                        >
                          <ErrorMessage
                            name={`Specialization.${index}.${"HowDidYouLearn"}`}
                          />
                        </p>
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
                  <div className="flex flex-wrap mx-[-15px] my-5">
                    <div className="px-[15px] w-full">
                      <Field
                        name={`Specialization.${index}.${"SkillDescription"}`}
                        type="textarea"
                      >
                        {({
                          field,
                          form: { touched, errors, setFieldValue, values },
                          meta,
                        }) => (
                          <>
                            <label
                              htmlFor={`Specialization.${index}.${"SkillDescription"}`}
                              className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Skill Description
                            </label>

                            <textarea
                              id={`Specialization.${index}.${"SkillDescription"}`}
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
                  <div className="flex flex-wrap mx-[-15px] my-5">
                    <div className="px-[15px] w-full">
                      <Field
                        name={`Specialization.${index}.${"ExtracurricularActivities"}`}
                        type="textarea"
                      >
                        {({
                          field,
                          form: { touched, errors, setFieldValue, values },
                          meta,
                        }) => (
                          <>
                            <label
                              htmlFor={`Specialization.${index}.${"ExtracurricularActivities"}`}
                              className="block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Extracurricular Activities{" "}
                            </label>

                            <textarea
                              id={`Specialization.${index}.${"ExtracurricularActivities"}`}
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
                </div>
              ))}
          </div>
        )}
      />
    </>
  );
};

export default Specialization;

const MyInputField = ({ index, name, type, label, placeholder, require }) => {
  return (
    <>
      <label
        htmlFor={`Specialization.${index}.${name}`}
        className="inline-block my-3 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white "
      >
        {label}
      </label>
      {require && <span className="text-red-600 ml-1">*</span>}
      <Field
        id={`Specialization.${index}.${name}`}
        type={type}
        name={`Specialization.${index}.${name}`}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <p
        id="filled_error_help"
        className="mt-2 text-md text-red-600 dark:text-red-400"
      >
        <ErrorMessage name={`Specialization.${index}.${name}`} />
      </p>
    </>
  );
};

const MyInputRadioField = ({ index, name, label, id, value }) => {
  return (
    <>
      <Field
        id={id}
        type="radio"
        name={`Specialization.${index}.${name}`}
        value={value}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />

      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-900 dark:text-gray-300  mx-2"
      >
        {label}
      </label>
    </>
  );
};

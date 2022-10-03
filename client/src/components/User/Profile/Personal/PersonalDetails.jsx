//External Import
import { Field } from "formik";
import "react-quill/dist/quill.snow.css";
import { countryList } from "../../../../helper/countryList";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

//Inernal Import

const PersonalDetails = () => {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-6/12">
          <MyInputField
            name="FirstName"
            type="text"
            label="First Name"
            placeholder="First Name"
            require={true}
          />
        </div>
        <div className="px-[15px] w-full md:w-6/12">
          <MyInputField
            name="LastName"
            type="text"
            label="Last Name"
            placeholder="Last Name"
            require={false}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-6/12">
          <MyInputField
            name="FatherName"
            type="text"
            label="Father's Name"
            placeholder="Father's Name"
            require={false}
          />
        </div>
        <div className="px-[15px] w-full md:w-6/12">
          <MyInputField
            name="MotherName"
            type="text"
            label="Mother's Name"
            placeholder="Mother's Name"
            require={false}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-6/12">
          <MyInputField
            name="DateofBirth"
            type="date"
            label="Date of Birth"
            placeholder="Date of Birth"
            require={true}
          />
        </div>
        <div className="px-[15px] w-full md:w-6/12">
          <MySelectField
            name="Gender"
            label="Gender"
            require={true}
            options={[{ name: "Male" }, { name: "Female" }, { name: "Others" }]}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-6/12">
          <MySelectField
            name="Religion"
            label="Religion"
            require={false}
            options={[
              { name: "" },
              { name: "Buddhism" },
              { name: "Christianity" },
              { name: "Hinduism" },
              { name: "Islam" },
              { name: "Jainism" },
              { name: "Judaism" },
              { name: "Sikhism" },
              { name: "Others" },
            ]}
          />
        </div>
        <div className="px-[15px] w-full md:w-6/12">
          <MySelectField
            name="MaritalStatus"
            label="Marital Status"
            require={true}
            options={[
              { name: "Unmarried" },
              { name: "Married" },
              { name: "Single" },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-6/12">
          <MySelectField
            name="Nationality"
            label="Nationality"
            require={true}
            options={countryList}
          />
        </div>
        <div className="px-[15px] w-full md:w-6/12">
          <MyInputField
            name="NationalId"
            type="text"
            label="National Id"
            placeholder="National Id"
            require={false}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-6/12">
          <MyInputField
            name="PassportNumber"
            type="text"
            label="Passport Number"
            placeholder="Passport Number"
            require={false}
          />
        </div>
        <div className="px-[15px] w-full md:w-6/12">
          <MyInputField
            name="PassportIssueDate"
            type="date"
            label="Passport Issue Date"
            require={false}
            options={["Unmarried", " Married", " Single"]}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-6/12">
          <label
            htmlFor="Phone"
            className="inline-block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Primary Mobile
          </label>
          <Field name="Phone">
            {({ field, form: { touched, errors, setFieldValue }, meta }) => (
              <>
                <PhoneInput
                  type="tel"
                  placeholder="Enter phone number"
                  name={field?.name}
                  value={field?.value}
                  onChange={(phone, country) => setFieldValue({ Phone: phone })}
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
        <div className="px-[15px] w-full md:w-6/12">
          <label
            htmlFor="SecondaryMobile"
            className="inline-block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Secondary Mobile
          </label>
          <Field name="SecondaryMobile">
            {({ field, form: { touched, errors, setFieldValue }, meta }) => (
              <>
                <PhoneInput
                  type="tel"
                  placeholder="Secondary Mobile"
                  name={field?.name}
                  value={field?.value}
                  onChange={(phone, country) =>
                    setFieldValue({ SecondaryMobile: phone })
                  }
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
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-6/12">
          <label
            htmlFor="EmergencyContact"
            className="inline-block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Emergency Contact
          </label>
          <Field name="EmergencyContact">
            {({ field, form: { touched, errors, setFieldValue }, meta }) => (
              <>
                <PhoneInput
                  type="tel"
                  placeholder="Emergency Contact"
                  name={field?.name}
                  value={field?.value}
                  onChange={(phone, country) =>
                    setFieldValue({ EmergencyContact: phone })
                  }
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
        <div className="px-[15px] w-full md:w-6/12">
          <MyInputField
            name="Email"
            type="email"
            label="Primary Email"
            placeholder="Primary Email"
            require={false}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-6/12">
          <MyInputField
            name="AlternateEmail"
            type="email"
            label="Alternate Email"
            placeholder="Alternate Email"
            require={false}
          />
        </div>
        <div className="px-[15px] w-full md:w-6/12">
          <MySelectField
            name="BloodGroup"
            label="Blood Group"
            require={false}
            options={[
              { name: "" },
              { name: "A(+ve)" },
              { name: "A(-ve)" },
              { name: "B(+ve)" },
              { name: "B(-ve)" },
              { name: "O(+ve)" },
              { name: "O(-ve)" },
              { name: "AB(+ve)" },
              { name: "AB(-ve)" },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-6/12">
          <MyInputField
            name="HeightMeters"
            type="text"
            label="Height (meters)"
            placeholder="Height (meters)"
            require={false}
          />
        </div>
        <div className="px-[15px] w-full md:w-6/12">
          <MyInputField
            name="WeightKg"
            type="text"
            label="Weight(kg)"
            placeholder="Weight(kg)"
            require={false}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;

const MyInputField = ({ name, type, label, placeholder, require }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="inline-block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>

      {require && <span className="text-red-600 ml-1">*</span>}

      <Field name={name}>
        {({ field, form: { touched, errors }, meta }) => (
          <>
            <input
              min="1"
              id={name}
              name={name}
              type={type}
              placeholder={placeholder}
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
    </>
  );
};

const MySelectField = ({ name, label, require, options, PrimaryMobile }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="inline-block my-2 md:my-0 md:mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>

      {require && <span className="text-red-600 ml-1">*</span>}

      {PrimaryMobile ? (
        <Field
          id={name}
          name={name}
          as="select"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {options.map((option) => (
            <option value={option.name}>
              {option.name + " "}({option.dial_code})
            </option>
          ))}
        </Field>
      ) : (
        <Field
          id={name}
          name={name}
          as="select"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {options.map((option) => (
            <option value={option.name}>{option.name}</option>
          ))}
        </Field>
      )}
    </>
  );
};

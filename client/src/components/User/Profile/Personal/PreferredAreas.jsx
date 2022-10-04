//External Import
import { ErrorMessage, Field } from "formik";
import "react-quill/dist/quill.snow.css";
import Select from "react-select";
import {
  countryOptions,
  PreferredJobLocationOutsideBangladeshList,
  PreferredOrganizationList,
} from "../../../../helper/countryList";

//Inernal Import
const PreferredAreas = () => {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full">
          <label aria-label="Preferred Job Categories" class="has-error">
            Preferred Job Categories
            <span className="text-red-600 ml-1">*</span>
            <p>You can add maximum 3 Functional category!</p>
          </label>
        </div>
      </div>
      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-6/12">
          <i>Functional (max 3)</i>
          <div className="h-[150px] overflow-y-scroll">
            <MyCheckboxInput
              name="PreferredAreas"
              value="AccountingFinance"
              label="Accounting/Finance"
            />
            <MyCheckboxInput
              name="PreferredAreas"
              value="BankNonBankFinInstitution"
              label="Bank/Non-Bank Fin. Institution"
            />
            <MyCheckboxInput
              name="PreferredAreas"
              value="CommercialSupplyChain"
              label="Commercial/Supply Chain"
            />
            <MyCheckboxInput
              name="PreferredAreas"
              value="EducationTraining"
              label="Education/Training"
            />
            <MyCheckboxInput
              name="PreferredAreas"
              value="EngineerArchitect"
              label="Engineer/Architect"
            />
            <MyCheckboxInput
              name="PreferredAreas"
              value="GarmentsTextile"
              label="Garments/ Textile"
            />
            <MyCheckboxInput
              name="PreferredAreas"
              value="GeneralManagementAdmin"
              label="General Management/Admin"
            />
            <MyCheckboxInput
              name="PreferredAreas"
              value="ITTelecommunication"
              label="IT/Telecommunication"
            />
            <MyCheckboxInput
              name="PreferredAreas"
              value="MarketingSales"
              label="Marketing/Sales"
            />
            <MyCheckboxInput
              name="PreferredAreas"
              value="MediaAdvertisementEvent Mgt."
              label="Media/Advertisement/Event Mgt."
            />
            <MyCheckboxInput
              name="PreferredAreas"
              value="MedicalPharma"
              label="Medical/Pharma"
            />
          </div>

          <p
            id="filled_error_help"
            class="mt-2 text-md text-red-600 dark:text-red-400"
          >
            <ErrorMessage name="PreferredAreas" />
          </p>
        </div>
        <div className="px-[15px] w-full md:w-6/12">
          <i>Special Skills (max 3)</i>
          <div className="h-[150px] overflow-y-scroll">
            <MyCheckboxInput
              name="PreferredAreas"
              value="ওয়েল্ডার"
              label="ওয়েল্ডার"
            />
            <MyCheckboxInput
              name="PreferredAreas"
              value="স্যুইংমেশিনঅপারেটর"
              label="স্যুইং মেশিন অপারেটর"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full">
          <label aria-label="Preferred Job Categories" class="has-error">
            Preferred Job Location
            <span className="text-red-600 ml-1">*</span>
            <p>
              Preferred Job Location defines the geographical place where you
              prefer to work. Add your priority wise preferred job locations.
              i.e. 1st: Dhaka, 2nd: Sylhet, 3rd: Khulna.
            </p>
          </label>
        </div>
      </div>

      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full md:w-6/12">
          <i>Inside Bangladesh Add Districts (max 15)</i>
          <Field name="PreferredJobLocationInsideBangladesh">
            {({
              field,
              form: { touched, errors, setFieldValue, values },
              meta,
            }) => (
              <Select
                closeMenuOnSelect={false}
                defaultValue={[
                  values?.PreferredJobLocationInsideBangladesh[0],
                  values?.PreferredJobLocationInsideBangladesh[1],
                ]}
                isMulti
                name="colors"
                options={countryOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(value) =>
                  setFieldValue("PreferredJobLocationInsideBangladesh", value)
                }
              />
            )}
          </Field>
          <p
            id="filled_error_help"
            class="mt-2 text-md text-red-600 dark:text-red-400"
          >
            <ErrorMessage name="PreferredJobLocationInsideBangladesh" />
          </p>
        </div>

        <div className="px-[15px] w-full md:w-6/12">
          <i>Outside Bangladesh Add Countries (max 10)</i>
          <Field name="PreferredJobLocationOutsideBangladesh">
            {({
              field,
              form: { touched, errors, setFieldValue, values },
              meta,
            }) => (
              <Select
                closeMenuOnSelect={false}
                defaultValue={[
                  values?.PreferredJobLocationOutsideBangladesh[0],
                  values?.PreferredJobLocationOutsideBangladesh[1],
                ]}
                isMulti
                name="colors"
                options={PreferredJobLocationOutsideBangladeshList}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(value) =>
                  setFieldValue("PreferredJobLocationOutsideBangladesh", value)
                }
              />
            )}
          </Field>
          <p
            id="filled_error_help"
            class="mt-2 text-md text-red-600 dark:text-red-400"
          >
            <ErrorMessage name="PreferredJobLocationOutsideBangladesh" />
          </p>
        </div>
      </div>

      <div className="flex flex-wrap mx-[-15px] my-5">
        <div className="px-[15px] w-full">
          <i>Add your preferred organization type (max 12)</i>
          <Field name="PreferredOrganization">
            {({
              field,
              form: { touched, errors, setFieldValue, values },
              meta,
            }) => (
              <Select
                closeMenuOnSelect={false}
                defaultValue={[
                  values?.PreferredOrganization[0],
                  values?.PreferredOrganization[1],
                ]}
                isMulti
                name="colors"
                options={PreferredOrganizationList}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(value) =>
                  setFieldValue("PreferredOrganization", value)
                }
              />
            )}
          </Field>
          <p
            id="filled_error_help"
            class="mt-2 text-md text-red-600 dark:text-red-400"
          >
            <ErrorMessage name="PreferredOrganization" />
          </p>
        </div>
      </div>
    </>
  );
};

export default PreferredAreas;

const MyCheckboxInput = ({ name, value, label }) => {
  return (
    <div>
      <label>
        <Field type="checkbox" name={name} value={value} className="mr-2" />
        {label}
      </label>
    </div>
  );
};

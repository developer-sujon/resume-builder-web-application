//Intenal Import
import { ErrorMessage, Field } from "formik";
import React, { useRef } from "react";
import { useSelector } from "react-redux";

//Intenal Import
import GetBase64 from "../../../../helper/GetBase64";

const Photograph = (value) => {
  const { UserDetails } = useSelector((state) => state.User);

  let userImgRef,
    userImgView = useRef();

  const previewImage = (setFieldValue) => {
    const imgFile = userImgRef.files[0];
    GetBase64(imgFile).then((base64Img) => {
      userImgView.src = base64Img;
      setFieldValue("Image", base64Img);
    });
  };

  return (
    <div className="flex flex-wrap mx-[-15px] mb-3">
      <div className="px-[15px] w-full md:w-4/12 py-2 md:py-0">
        <img
          ref={(input) => (userImgView = input)}
          className="w-36 h-36 rounded mb-4"
          src={UserDetails?.Image}
          alt={UserDetails?.Email}
        />

        <Field name="Image">
          {({
            field,
            form: { touched, errors, setFieldValue, values },
            meta,
          }) => (
            <div>
              <input
                onChange={() => previewImage(setFieldValue)}
                ref={(input) => (userImgRef = input)}
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
              <p
                id="filled_error_help"
                className="mt-2 text-md text-red-600 dark:text-red-400"
              >
                <ErrorMessage name="Image" />
              </p>
            </div>
          )}
        </Field>
      </div>
    </div>
  );
};

export default Photograph;

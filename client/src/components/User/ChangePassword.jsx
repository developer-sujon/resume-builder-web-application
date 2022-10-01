//External Lib Import
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import UserRequest from "../../APIRequest/UserRequest";

//Internal Lib Import
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";

const ChangePassword = () => {
  const navigate = useNavigate();

  let previousPasswordRef,
    newPasswordRef,
    confirmNewPasswordRef = useRef();

  const updatePassword = () => {
    if (FormValidation.isEmpty(previousPasswordRef.value)) {
      ToastMessage.errorMessage("Previous Password is Required");
    } else if (FormValidation.isEmpty(newPasswordRef.value)) {
      ToastMessage.errorMessage("New Password is Required");
    } else if (FormValidation.isEmpty(confirmNewPasswordRef.value)) {
      ToastMessage.errorMessage("Confirm Password is Required");
    } else if (newPasswordRef.value !== confirmNewPasswordRef.value) {
      ToastMessage.errorMessage("New & Confirm Password Not Match");
    } else {
      UserRequest.UserChangePassword({
        PreviousPassword: previousPasswordRef.value,
        NewPassword: newPasswordRef.value,
      }).then((result) => {
        if (result) {
          navigate("/");
        }
      });
    }
  };

  return <></>;
};

export default ChangePassword;

import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AddNewContactRenderer } from "./add-new-contact-renderer";

import { AuthContext } from "../../Context/AuthContext";

export const AddNewContactComponent = () => {
  const {
    listItem,
    setListItem,
    userData,
    setUserData,
    toggleSubmit,
    setToggleSubmit,
    inputEditButtonId,
    setInputEditButtonId,
  } = React.useContext(AuthContext);

  const onInputChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSaveContactButton = () => {
    if (!(userData.name && userData.email && userData.phone && userData.note)) {
      toast.error("Please enter data", { autoClose: 2000 });
    } else if (
      userData.name &&
      userData.email &&
      userData.phone &&
      userData.note &&
      !toggleSubmit
    ) {
      setListItem(
        listItem.map((prevData: any, index: any) => {
          if (index === inputEditButtonId) {
            return userData;
          }
          return prevData;
        })
      );

      setToggleSubmit(true);
      setInputEditButtonId(null);
      setUserData({
        name: "",
        email: "",
        phone: "",
        note: "",
      });
    } else {
      setListItem([...listItem, userData]);
      setUserData({
        name: "",
        email: "",
        phone: "",
        note: "",
      });
      console.log(userData);
      console.log(listItem); //why it is delayed one step?
    }
  };

  const states = {
    onInputChange: onInputChange,
    onSaveContactButton: onSaveContactButton,
    userData: userData,
    listItem: listItem,
    toggleSubmit: toggleSubmit,
  };

  return <AddNewContactRenderer states={states} />;
};

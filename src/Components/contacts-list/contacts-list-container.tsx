import React from "react";
import { ContactsListRenderer } from "./contacts-list-renderer";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export const ContactsListComponent = () => {
  const navigate = useNavigate();

  const {
    listItem,
    setListItem,
    userData,
    setUserData,
    setToggleSubmit,
    setInputEditButtonId,
    setListItemData,
  } = React.useContext<any>(AuthContext);

  const handleEditButton = (id: any) => {
    const editItem = listItem.find((prevData: any, index: any) => {
      return id === index;
    });
    setUserData(editItem);
    setInputEditButtonId(id);
    setToggleSubmit(false);
  };

  const handleDeleteButton = (id: any) => {
    setListItem(
      listItem.filter((prevData: any, index: any) => {
        return id !== index;
      })
    );
    if (userData.name || userData.email || userData.phone || userData.note)
      setUserData({
        name: "",
        email: "",
        phone: "",
        note: "",
      });
    setToggleSubmit(true);
  };

  const onNewContactForm = () => {
    navigate("/");
    if (userData.name || userData.email || userData.phone || userData.note)
      setUserData({
        name: "",
        email: "",
        phone: "",
        note: "",
      });
  };

  const onListItemClick = (item: any) => {
    setListItemData(item);
    navigate("/viewcontact");
  };

  const states = {
    listItem: listItem,
    handleEditButton: handleEditButton,
    handleDeleteButton: handleDeleteButton,
    onListItemClick: onListItemClick,
    onNewContactForm: onNewContactForm,
  };
  return <ContactsListRenderer states={states} />;
};

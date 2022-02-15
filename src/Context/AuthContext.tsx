import React from "react";

export const AuthContext = React.createContext<any>("");

const getLocalStorageData = () => {
  const localStorageListItemContactsApp = localStorage.getItem(
    "localStorageListItemContactsApp"
  );
  if (localStorageListItemContactsApp) {
    return JSON.parse(localStorageListItemContactsApp);
  }
  return [];
};

export const AuthProvider = ({ children }: any) => {
  const [listItem, setListItem] = React.useState<any>(getLocalStorageData());

  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });

  const [toggleSubmit, setToggleSubmit] = React.useState<any>(true);

  const [inputEditButtonId, setInputEditButtonId] = React.useState<any>(null);

  const [listItemData, setListItemData] = React.useState<any>({});

  const store = {
    listItem,
    setListItem,
    userData,
    setUserData,
    toggleSubmit,
    setToggleSubmit,
    inputEditButtonId,
    setInputEditButtonId,
    listItemData,
    setListItemData,
  };

  React.useEffect(() => {
    localStorage.setItem(
      "localStorageListItemContactsApp",
      JSON.stringify(listItem)
    );
  }, [listItem]);

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};

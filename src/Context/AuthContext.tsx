import React from "react";

interface IStringArray {
  (): {}[];
}

export interface IAuthContext {
  listItem: {}[];
  setListItem: (listItem: {}[]) => void;
  userData: { name: string; email: string; phone: string; note: string };
  setUserData: (userData: {
    name: string;
    email: string;
    phone: string;
    note: string;
  }) => void;
  toggleSubmit: boolean;
  setToggleSubmit: (toggleSubmit: boolean) => void;
  inputEditButtonId: null | number;
  setInputEditButtonId: (inputEditButtonId: null | number) => void;
  listItemData: { name: string; email: string; phone: string; note: string };
  setListItemData: (listItemData: {
    name: string;
    email: string;
    phone: string;
    note: string;
  }) => void;
}

export const AuthContext: React.Context<IAuthContext> =
  React.createContext<IAuthContext>({
    listItem: [],
    setListItem: () => {},
    userData: { name: "", email: "", phone: "", note: "" },
    setUserData: () => {},
    toggleSubmit: true,
    setToggleSubmit: () => {},
    inputEditButtonId: null,
    setInputEditButtonId: () => {},
    listItemData: { name: "", email: "", phone: "", note: "" },
    setListItemData: () => {},
  });

const getLocalStorageData: IStringArray = () => {
  const localStorageListItemContactsApp = localStorage.getItem(
    "localStorageListItemContactsApp"
  );
  if (localStorageListItemContactsApp) {
    return JSON.parse(localStorageListItemContactsApp);
  }
  return [];
};

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [listItem, setListItem] = React.useState(getLocalStorageData());

  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });

  const [toggleSubmit, setToggleSubmit] = React.useState(true);

  const [inputEditButtonId, setInputEditButtonId] = React.useState<
    number | null
  >(null);

  const [listItemData, setListItemData] = React.useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });

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

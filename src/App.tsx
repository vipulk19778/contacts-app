import { AddNewContact } from "./Components/add-new-contact";
import { ContactsList } from "./Components/contacts-list";
import { ViewContacts } from "./Components/view-contacts";

import { AuthProvider } from "./Context/AuthContext";
import { useStyles } from "./AppStyles";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  const classes = useStyles();

  return (
    <AuthProvider>
      <div className={classes.main_div}>
        <div className={classes.center_div}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddNewContact />
                  <ContactsList />
                </>
              }
            />
            <Route
              path="/viewcontact"
              element={
                <>
                  <ViewContacts />
                  <ContactsList />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
};

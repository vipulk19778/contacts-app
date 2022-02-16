import { useStyles } from "./add-new-contact-styles";
import { FormControl, Input, InputLabel } from "@mui/material";
import { Button } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
export const AddNewContactRenderer = ({ states }: any) => {
  const { userData, onInputChange, onSaveContactButton, toggleSubmit } = states;

  const classes = useStyles();
  return (
    <div className={classes.contactFormContainer}>
      <h1 className={classes.h1}>Add New Contact</h1>
      <ToastContainer />
      <div className={classes.inputFieldContainer}>
        <div className={classes.inputField}>
          <FormControl>
            <InputLabel htmlFor="name">Contact Name</InputLabel>
            <Input
              type="text"
              name="name"
              value={userData.name}
              onChange={onInputChange}
            />
          </FormControl>
        </div>

        <div className={classes.inputField}>
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              type="email"
              name="email"
              value={userData.email}
              onChange={onInputChange}
            />
          </FormControl>
        </div>

        <div className={classes.inputField}>
          <FormControl>
            <InputLabel htmlFor="phone">Phone</InputLabel>
            <Input
              type="text"
              name="phone"
              value={states.userData.phone}
              onChange={onInputChange}
            />
          </FormControl>
        </div>

        <div className={classes.inputField}>
          <FormControl>
            <InputLabel htmlFor="note">Note</InputLabel>
            <Input
              placeholder="Write Something..."
              name="note"
              value={userData.note}
              onChange={onInputChange}
            />
          </FormControl>
        </div>
      </div>

      {toggleSubmit ? (
        <Button
          onClick={onSaveContactButton}
          className={classes.submit}
          variant="contained"
          size="small"
          color="primary"
          style={{ margin: "20px 0" }}
        >
          Save Contact
        </Button>
      ) : (
        <Button
          onClick={onSaveContactButton}
          className={classes.submit}
          variant="contained"
          size="small"
          color="primary"
          style={{ margin: "20px 0" }}
        >
          Update Contact
        </Button>
      )}
    </div>
  );
};

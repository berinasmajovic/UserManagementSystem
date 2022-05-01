import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddUserForm = (props) => {

  return (
    <div>
      {props.error && <h3 style={{ color: "red" }}>{props.error}</h3>}
      <form
        noValidate
        autoComplete="off"
        style={{ marginTop: 20 }}
        onSubmit={props.handleSubmit}
      >
        <TextField
          name="firstname"
          id="standard-basic"
          label="First name"
          value={props.user.firstname || ""}
          type="text"
          onChange={props.handleInputChange}
        />
        <br />
        <TextField
          name="lastname"
          id="standard-basic"
          label="Last name"
          value={props.user.lastname || ""}
          type="text"
          onChange={props.handleInputChange}
        />
        <br />
        <TextField
          name="email"
          id="standard-basic"
          label="Email"
          value={props.user.email || ""}
          type="email"
          onChange={props.handleInputChange}
        />
        <br />
        <TextField
          name="status"
          id="standard-basic"
          label="Status"
          value={props.user.status || ""}
          type="text"
          onChange={props.handleInputChange}
        />
        <br />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          onClick={props.handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddUserForm;

import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddUserPermissionForm = (props) => {

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
          name="code"
          id="standard-basic"
          label="Code"
          value={props.permission.code || ""}
          type="text"
          onChange={props.handleInputChange}
        />
        <br />
        <TextField
          name="description"
          id="standard-basic"
          label="Description"
          value={props.permission.description || ""}
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

export default AddUserPermissionForm;

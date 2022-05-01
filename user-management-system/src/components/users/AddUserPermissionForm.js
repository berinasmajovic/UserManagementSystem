import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        ...sx,
      }}
      {...other}
    />
  );
}

const AddUserPermissionForm = (props) => {
  return (
    <div>
      {props.error && <h4 style={{ color: "red" }}>{props.error}</h4>}
      <form
        noValidate
        autoComplete="off"
        style={{ marginTop: 20 }}
        onSubmit={props.handleSubmit}
      >
        <Item>
          <label>Code: </label>
          <Select
            name="code"
            value={props.permission.code}
            onChange={props.handleInputChange}
          >
            <MenuItem key="createUser" value="CREATE-USER">
              CREATE-USER
            </MenuItem>
            <MenuItem key="deleteUser" value="DELETE-USER">
              DELETE-USER
            </MenuItem>
            <MenuItem key="editUser" value="EDIT-USER">
              EDIT-USER
            </MenuItem>
          </Select>
        </Item>
        <Item>
          <TextField
            name="description"
            id="standard-basic"
            label="Description"
            value={props.permission.description || ""}
            type="text"
            onChange={props.handleInputChange}
          />
        </Item>
        <Item>
        </Item>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          onClick={props.handleSubmit}
        >
          Submit
        </Button>
        <Button
              variant="contained"
              onClick={() => props.navigate("/")}
              style={{ margin: 20 }}
            >
              Cancel
            </Button>
      </form>
    </div>
  );
};

export default AddUserPermissionForm;

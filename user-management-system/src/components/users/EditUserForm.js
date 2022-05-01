import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

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

const EditUserForm = (props) => {
  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        style={{ marginTop: 20 }}
        onSubmit={props.handleSubmit}
      >
        {props.error && <h3 style={{ color: "red" }}>{props.error}</h3>}
        <Box
          sx={{
            alignItems: "center",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            height: 100,
            borderRadius: 1,
          }}
        >
          <Item>
            <TextField
              name="firstname"
              id="standard-basic"
              label="First name"
              value={props.user.firstname || ""}
              type="text"
              onChange={props.handleInputChange}
            />
          </Item>
          <Item>
            <TextField
              name="lastname"
              id="standard-basic"
              label="Last name"
              value={props.user.lastname || ""}
              type="text"
              onChange={props.handleInputChange}
            />
          </Item>
          <Item>
            <TextField
              name="username"
              id="standard-basic"
              label="Username"
              value={props.user.username || ""}
              type="text"
              inputProps={
                { readOnly: true, }
            }
            />
          </Item>
          <Item>
            <TextField
              name="password"
              id="standard-basic"
              label="Password"
              value={props.user.password || ""}
              type="password"
              inputProps={
                { readOnly: true, }
            }
            />
          </Item>
          <Item>
            <TextField
              name="email"
              id="standard-basic"
              label="Email"
              value={props.user.email || ""}
              type="email"
              onChange={props.handleInputChange}
            />
          </Item>
          <Item>
            {" "}
            <label>Status: </label>{" "}
            <Select
              name="status"
              value={props.user.status || "ACTIVE"}
              defaultValue={"active"}
              onChange={props.handleInputChange}
            >
              <MenuItem key="active" value="ACTIVE">
                ACTIVE
              </MenuItem>
              <MenuItem key="inactive" value="INACTIVE">
                INACTIVE
              </MenuItem>
            </Select>
            
          </Item>
          <Item>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              onClick={props.handleSubmit}
            >
              Submit
            </Button>
          </Item>
        </Box>
      </form>
    </div>
  );
};

export default EditUserForm;

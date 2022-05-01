import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const AssignedPermissionsList = (props) => {
  return (
    <TableContainer component={Paper}>
      <h2>Permissions</h2>
      <Table
        sx={{ marginTop: 10, minWidth: 700, width: "50%", margin: "0 auto" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.user.permissions &&
            props.user.permissions.map((permission, index) => (
              <TableRow key={permission.code}>
                <TableCell component="th" scope="row" name="code">
                  {permission.code}
                </TableCell>
                <TableCell align="right" name="decription">
                  {permission.description}
                </TableCell>
                <TableCell align="right">
                  <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                  >
                    <Button
                      color="error"
                      onClick={() =>
                        props.handleDelete(props.user, permission.id)
                      }
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AssignedPermissionsList;

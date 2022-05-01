import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import TablePagination from "@mui/material/TablePagination";

const UsersList = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, props.users.length - page * rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ marginTop: 10, minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users &&
            props.users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row">
                    {user.firstname}
                  </TableCell>
                  <TableCell align="right" name="lastname">
                    {user.lastname}
                  </TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.status}</TableCell>
                  <TableCell align="right">
                    <ButtonGroup
                      variant="outlined"
                      aria-label="outlined button group"
                    >
                      <Button
                        color="primary"
                        onClick={() => props.navigate(`/editUser/${user.id}`)}
                      >
                        Edit
                      </Button>
                      <Button
                        color="error"
                        onClick={() => props.handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        color="secondary"
                        onClick={() =>
                          props.navigate(`/assignPermission/${user.id}`)
                        }
                      >
                        Assign
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={props.users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default UsersList;

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
import TablePagination from "@mui/material/TablePagination";
import { visuallyHidden } from "@mui/utils";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import { getComparator } from "../../helpers/Comparator";


const headCells = [
  {
    id: "firstname",
    disablePadding: true,
    label: "First name",
  },
  {
    id: "lastname",
    disablePadding: false,
    label: "Last name",
  },
  {
    id: "username",
    disablePadding: false,
    label: "Username",
  },
  {
    id: "password",
    disablePadding: false,
    label: "Password",
  },
  {
    id: "email",
    disablePadding: false,
    label: "Email",
  },
  {
    id: "status",
    disablePadding: false,
    label: "Status",
  },
  {
    id: "action",
    disablePadding: false,
    label: "Action",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const UsersList = (props) => {
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState(props.users);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, props.users.length - page * rowsPerPage);


  return (
    <div>
      <TableContainer component={Paper}>
      <h2>List of users</h2>
        <Table
          sx={{ minWidth: 750, width: "80%", margin: "0 auto", marginTop: 10 }}
          size={"medium"}
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={props.users.length}
          />
          <TableBody>
            {props.users &&
              props.users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .sort(getComparator(order, orderBy))
                .map((user, index) => (
                  <TableRow key={user.id}>
                    <TableCell align="center" component="th" scope="row">
                      {user.firstname}
                    </TableCell>
                    <TableCell align="center" name="lastname">
                      {user.lastname}
                    </TableCell>
                    <TableCell align="center" name="username">
                      {user.username}
                    </TableCell>
                    <TableCell align="center" name="password">
                      {"***"}
                    </TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">{user.status}</TableCell>
                    <TableCell align="center">
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
    </div>
  );
};

export default UsersList;

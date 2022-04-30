import React, {useEffect} from 'react';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

const UsersList = ({users, handleDelete}) => {
  return (
    <TableContainer component={Paper}>
    <Table
      sx={{ marginTop: 20, minWidth: 700 }}
      aria-label="customized table"
    >
      <TableHead>
        <TableRow>
          <StyledTableCell>First name</StyledTableCell>
          <StyledTableCell align="center">Last name</StyledTableCell>
          <StyledTableCell align="center">Email</StyledTableCell>
          <StyledTableCell align="center">Status</StyledTableCell>
          <StyledTableCell align="center">Action</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users &&
          users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.firstname}
              </StyledTableCell>
              <StyledTableCell align="center">
                {user.lastname}
              </StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">
                {user.status}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "& > *": {
                      m: 1,
                    },
                  }}
                >
                  <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                  >
                    <Button color="primary">Edit</Button>
                    <Button
                      color="error"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default UsersList
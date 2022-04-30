import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import UsersList from "../components/UsersList";

const Home = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
      dispatch(loadUsers());
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={() => navigate("/addUser")}>
        Add user
      </Button>
      <UsersList users={users} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;

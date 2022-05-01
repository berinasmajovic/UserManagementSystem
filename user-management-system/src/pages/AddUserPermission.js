import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/actions";
import AddUserForm from "../components/users/AddUserForm";
import AddUserPermissionForm from "../components/users/AddUserPermissionForm";
import { updateUser, getUser } from "../redux/actions";

const AddUserPermission = () => {
  const [state, setState] = useState({
    code: "",
    description: "",
  });
  let { id } = useParams();
  const [error, setError] = useState("");
  const { user } = useSelector((state) => state.data);

  const { code, description } = state;

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !code) {
      setError("Please input all fields");
    } else {
      var newPermissionList = [
        ...(user.permissions || []),
        { id: Math.random().toString(16).slice(2), code, description },
      ];
      dispatch(updateUser({ ...user, permissions: newPermissionList }, id));
      navigate(`/assignPermission/${id}`);
      setError("");
    }
  };

  return (
    <div>
      <AddUserPermissionForm
        permission={{ code, description }}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddUserPermission;

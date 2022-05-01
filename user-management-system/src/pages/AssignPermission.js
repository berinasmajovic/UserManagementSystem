import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import AssignedPermissionsList from "../components/users/AssignedPermissionList";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, updateUser } from "../redux/actions";

const AssignPermission = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    status: "",
    permissions: [],
  });
  let { id } = useParams();
  const { user } = useSelector((state) => state.data);
  const { firstname, lastname, email, status, permissions } = state;

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleDelete = (user, permissionId) => {
    var permissionList = user.permissions.filter((x) => {
      return x.id !== permissionId;
    });
    if (window.confirm("Are you sure you want to delete this permission?")) {
      dispatch(updateUser({ ...state, permissions: permissionList }, id));
      dispatch(getUser(id));
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => navigate(`/assignPermission/${id}/addPermission`)}
      >
        Add permission
      </Button>
      <AssignedPermissionsList
        user={{ firstname, lastname, email, status, permissions }}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default AssignPermission;

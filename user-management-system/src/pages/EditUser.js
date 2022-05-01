import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../redux/actions";
import EditUserForm from "../components/users/EditUserForm";

const EditUser = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    status: "",
  });
  const [error, setError] = useState("");
  let { id } = useParams();
  const { user } = useSelector((state) => state.data);
  const { firstname, lastname, username, password, email, status } = state;

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

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !status) {
      setError("Please input all fields");
    } else {
      dispatch(updateUser(state, id));
      navigate("/");
      setError("");
    }
  };

  return (
    <div>
      <h2>Edit user</h2>
      <EditUserForm
        user={{ firstname, lastname, username, password, email, status }}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditUser;

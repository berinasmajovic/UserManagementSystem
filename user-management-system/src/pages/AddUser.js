import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import AddUserForm from "../components/users/AddUserForm";

const AddUser = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    status: "",
  });
  const [error, setError] = useState("");
  const { firstname, lastname, email, status } = state;

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
      dispatch(addUser(state));
      navigate("/");
      setError("");
    }
  };

  return (
    <div>
      <AddUserForm
        user={{ firstname, lastname, email, status }}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddUser;

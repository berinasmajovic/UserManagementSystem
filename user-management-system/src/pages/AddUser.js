import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import AddUserForm from "../components/users/AddUserForm";

const jsSHA = require("jssha");

const AddUser = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    status: "",
  });
  const [error, setError] = useState("");
  const { firstname, lastname, username, password, email, status } = state;

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !username || !password) {
      setError("Please input all fields");
    } else {
      var hashObj = new jsSHA("SHA-512", "TEXT", { numRounds: 1 });
      hashObj.update(password);
      var hash = hashObj.getHash("HEX");
      dispatch(addUser({ ...state, password: hash }));
      navigate("/");
      setError("");
    }
  };

  return (
    <div>
      <AddUserForm
        user={{ firstname, lastname, username, password, email, status }}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddUser;

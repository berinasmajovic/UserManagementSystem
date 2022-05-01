import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../redux/actions";
import AddUserForm from "../components/users/AddUserForm";

const EditUser = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    status: "",
  });
  const [error, setError] = useState("");
  let { id } = useParams();
  const { user } = useSelector((state) => state.data);
  const { firstname, lastname, email, status } = state;

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
      <AddUserForm
        user={{ firstname, lastname, email, status }}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditUser;

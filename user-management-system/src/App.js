import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AssignPermission from "./pages/AssignPermission";
import AddUserPermission from "./pages/AddUserPermission";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addUser" element={<AddUser />} />
        <Route exact path="/editUser/:id" element={<EditUser />} />
        <Route exact path="/assignPermission/:id" element={<AssignPermission />} />
        <Route exact path="/assignPermission/:id/addPermission" element={<AddUserPermission />} />
      </Routes>
    </div>
  );
}

export default App;

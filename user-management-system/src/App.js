import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addUser" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import UserList from "./Components/UserList";
import UserProfile from "./Components/UserProfile";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setListOfUsers(response.data);
      });
    }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<UserList listOfUsers={listOfUsers}/>} />
        <Route path="/:id" element={<UserProfile listOfUsers={listOfUsers}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

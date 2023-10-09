import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientList from "./ClientList";
import ClientEdit from "./ClientEdit";
import withAuth from "./helper/withAuth";

const ProtectedClientList = withAuth(ClientList);
const ProtectedClientEdit = withAuth(ClientEdit);

const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/clients" exact={true} element={<ProtectedClientList/>}/>
        <Route path="/clients/:id" element={<ProtectedClientEdit/>}/>
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import './App.css';
import AppNavbar from "./AppNavbar";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";

const Home = () => {
    return (
        <div color="dark" className="home-container">
            <AppNavbar/>
            <Container fluid className="d-flex justify-content-center">
                <Button className="btn-outline-info" style={{borderRadius: 5, verticalAlign: "top"}} tag={Link} to="/clients">Manage Client List</Button>
            </Container>
        </div>
    );
}

export default Home;
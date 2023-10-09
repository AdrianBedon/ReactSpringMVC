import React from "react";
import './App.css';
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";

export default class WelcomeContent extends React.Component {

    render() {
        return (
            <div>
                <h1 className="welcome-message">Welcome to this MVC App Welcome</h1>
                <Container fluid className="d-flex justify-content-center">
                    <Button className="btn-outline-info" style={{ borderRadius: 5, verticalAlign: "top" }} tag={Link} to="/clients">Manage Client List</Button>
                </Container>
            </div>
        );
    };
}
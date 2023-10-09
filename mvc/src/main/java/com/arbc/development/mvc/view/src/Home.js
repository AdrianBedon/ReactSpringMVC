import React from "react";
import './App.css';
import AppNavbar from "./AppNavbar";
import LoginForm from "./LoginForm";
import WelcomeContent from "./WelcomeContent";
import { setAuthHeader, request } from "./helper/axios_helper";
import Buttons from './Buttons';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "welcome"
        };
    }

    login = () => {
        this.setState({componentToShow: "login"})
    };

    logout = () => {
        this.setState({componentToShow: "welcome"})
        setAuthHeader(null);
    };

    onLogin = (e, username, password) => {
        e.preventDefault();
        request(
            "POST",
            "/login",
            {
                login: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({ componentToShow: "mvc" });
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({ componentToShow: "welcome" });
            }
        );
    };

    onRegister = (event, firstName, lastName, username, password) => {
        event.preventDefault();
        request(
            "POST",
            "/register",
            {
                firstName: firstName,
                lastName: lastName,
                login: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({ componentToShow: "mvc" });
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({ componentToShow: "welcome" });
            }
        );
    };

    render() {
        return (
            <div color="dark" className="home-container">
                <AppNavbar />
                <Buttons
                    login={this.login}
                    logout={this.logout}
                    />
                {this.state.componentToShow === "welcome" && <WelcomeContent />}
                {this.state.componentToShow === "login" && <LoginForm onLogin={this.onLogin} onRegister={this.onRegister} />}
                {this.state.componentToShow === "mvc" && <Button className="btn-outline-info" style={{ borderRadius: 5, verticalAlign: "top" }} tag={Link} to="/clients">Manage Client List</Button>}
            </div>
        );
    };
}

export default Home;
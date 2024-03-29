import React, {useState} from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const AppNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar color="dark" dark expandable="md">
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="justify-content-end" style={{width: "100%"}} navbar>
                    <NavItem>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default AppNavbar;
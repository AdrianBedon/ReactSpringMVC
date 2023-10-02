import React, {useEffect, useState} from "react";
import { Button, ButtonGroup, Collapse, Container, Table } from "reactstrap";
import AppNavbar from "./AppNavbar";
import {Link} from "react-router-dom";

const ClientList = () => {

    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('api/clients')
            .then(response => response.json())
            .then(data => {
                setClients(data);
                setLoading(false);
            })
    }, []);

    const remove = async (id) => {
        await fetch(`/api/client/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/jason'
            }
        }).then(() => {
            let updatedClients = [...clients].filter(i => i.id !== id);
            setClients(updatedClients);
        });
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    const clientList = clients.map(client => {
        return <tr key={client.id}>
            <td style={{whiteSpace: 'nowrap'}}>{client.username}</td>
            <td>{client.name}</td>
            <td>{client.lastname}</td>
            <td>{client.email}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/clients/" + client.id}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => remove(client.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    });

    return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <div className="float-end" responsive>
                    <Button color="success" tag={Link} to="/clients/new">Add Client</Button>
                </div>
                <h3>My Client List</h3>
                <Table className="mt-4 table-striped" hover style={{borderRadius: 10, overflow: "hidden"}}>
                    <thead>
                        <tr className="table-dark">
                            <th>Username</th>
                            <th width="20%">Name</th>
                            <th width="20%">Lastname</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientList}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ClientList;
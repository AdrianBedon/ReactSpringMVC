import React, {useEffect, useState} from "react";
import { Button, ButtonGroup, Collapse, Container, ModalFooter, Table, Modal, ModalBody, ModalHeader } from "reactstrap";
import AppNavbar from "./AppNavbar";
import {Link} from "react-router-dom";
import axios from "axios";
import { request } from "./helper/axios_helper";

const ClientList = () => {

    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [clientIdToDelete, setClientIdToDelete] = useState(null);

    useEffect(() => {
        setLoading(true);

        request(
            'GET',
            'api/clients',
            {   })
            .then(response => {
                setClients(response.data);
                setLoading(false);
            });
    }, []);

    const remove = (id) => {
        setShowConfirmation(true);
        setClientIdToDelete(id);
    }

    const confirmDelete = async () => {
        await request(
            'DELETE',
            `/api/client/${clientIdToDelete}`,
            {})
        .then(() => {
            let updatedClients = clients.filter(i => i.id !== clientIdToDelete);
            setClients(updatedClients);
            setShowConfirmation(false);
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
                <div className="float-end">
                    <Button color="success" tag={Link} to="/clients/new">Add Client</Button>
                </div>
                <h3>My Client List</h3>
                <Table className="mt-4 table-striped" hover style={{borderRadius: 10, overflow: "hidden"}}>
                    <thead>
                        <tr className="table-dark">
                            <th>Username</th>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientList}
                    </tbody>
                </Table>
            </Container>

            <Modal isOpen={showConfirmation}>
                <ModalHeader>Confirmation</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete this client?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={confirmDelete}>Delete</Button>
                    <Button color="secondary" onClick={() => setShowConfirmation(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ClientList;
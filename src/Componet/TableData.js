import React, { useState, Fragment } from "react";
import './Table.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './userdata.json';
import { nanoid } from 'nanoid';
import ReadOnlyData from "./ReadOnlyData";
import EditRow from "./EditRow";
import Table from 'react-bootstrap/Table';
import { Button, Form, Row, Col, Container, InputGroup  } from 'react-bootstrap'

const TableData = () => {
    const [dataInfo, setDataInfo] = useState(data);
    const [addFormData, setAddFormData] = useState({
        Name: "",
        Age: "",
        Nickname: ""
    });

    const [editFormData, setEditFormData] = useState({
        Name: "",
        Age: "",
        Nickname: ""
    });

    const [editDataId, setEditDataId] = useState(null);

    // Add Data --- Start
    const AddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    const addFormSubmit = (event) => {
        event.preventDefault();

        const newData = {
            id: nanoid(),
            Name: addFormData.Name,
            Age: addFormData.Age,
            Nickname: addFormData.Nickname
        };

        const newDatainfo = [...dataInfo, newData];
        setDataInfo(newDatainfo);
    };
    // Add Data --- End

    // Edit Data --- Start
    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const editFormSubmit = (event) => {
        event.preventDefault();

        const editedDataInfo = {
            id: editDataId,
            Name: editFormData.Name,
            Age: editFormData.Age,
            Nickname: editFormData.Nickname
        }

        const newDatainfos = [...dataInfo];

        const index = dataInfo.findIndex((dataInfo) => dataInfo.id === editDataId)

        newDatainfos[index] = editedDataInfo;

        setDataInfo(newDatainfos);
        setEditDataId(null);
    }

    const handleEditClick = (event, dataInfo) => {
        event.preventDefault();
        setEditDataId(dataInfo.id);

        const formValues = {
            Name: dataInfo.Name,
            Age: dataInfo.Age,
            Nickname: dataInfo.Nickname,
        };

        setEditFormData(formValues);
    };

    const DeleteClick = (DataId) => {
        const newContacts = [...dataInfo];

        const index = dataInfo.findIndex((dataInfo) => dataInfo.id === DataId);

        newContacts.splice(index, 1);

        setDataInfo(newContacts);
    };


    const CancelClick = () => {
        setEditDataId(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        window.location.href = "/";
    }

    return (
        <div className="ContainerMain">
            <br></br>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col><Button type="button" variant="warning" size="sm" className="mb-2 ButtonSty" onClick={handleLogout}>Logout</Button></Col>
            </Row>
            <Container>

                <br></br>
                <Form onSubmit={editFormSubmit}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Nickname</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataInfo.map((dataInfo) => (
                                <Fragment>
                                    {editDataId === dataInfo.id ? (
                                        <EditRow
                                            editFormData={editFormData}
                                            handleEditFormChange={handleEditFormChange}
                                            CancelClick={CancelClick} />)
                                        : (<ReadOnlyData
                                            dataInfo={dataInfo}
                                            handleEditClick={handleEditClick}
                                            DeleteClick={DeleteClick} />)}
                                </Fragment>

                            ))}

                        </tbody>

                    </Table>
                </Form>

                <Form onSubmit={addFormSubmit}>
                    <Row>
                        <Col><Form.Control type="text" name="Name" placeholder="Name" required="required" onChange={AddFormChange}></Form.Control></Col>
                        <Col xs="auto">
                            <InputGroup className="mb-2">
                                <InputGroup.Text>Ages :</InputGroup.Text><Form.Select name="Age" onChange={AddFormChange} >
                                    <option value="none"></option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                    <option value="60">60</option>
                                    <option value="70">70</option>
                                    <option value="80">80</option>
                                    <option value="90">90</option>
                                </Form.Select>
                                </InputGroup>
                                </Col>

                                <Col><Form.Control type="text" name="Nickname" placeholder="Nickname" required="required" onChange={AddFormChange}></Form.Control></Col>
                                <Col><Button type="submit" className="ButtonSty" variant="success">Add</Button></Col>
                            </Row>
                        </Form>
                        <br></br>
                    </Container>
                </div>
                );
};

                export default TableData;
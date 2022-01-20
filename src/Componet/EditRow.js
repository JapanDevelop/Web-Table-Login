import React from "react";
import './EditRow.css';
import { Button,Form } from 'react-bootstrap'

const EditRow = ({editFormData, handleEditFormChange, CancelClick}) => {
    
    return (
        <tr>
            <td>
                <Form.Control type="text" name="Name" placeholder="Name" required="required" value={editFormData.Name} onChange={handleEditFormChange}></Form.Control>
            </td>
            <td>
                <Form.Select name="Age" onChange={handleEditFormChange}>
                <option defaultValue={editFormData.Age}>{editFormData.Age}</option>
                    <option value="none">----</option>
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
            </td>
            <td>
                <Form.Control type="text" name="Nickname" placeholder="Nickname" required="required" value={editFormData.Nickname} onChange={handleEditFormChange}></Form.Control>
            </td>
            <td>
                <Button type="submit" className='buttonStyle'>Save</Button>
                <Button type="button" className='buttonStyle' variant='danger' onClick={CancelClick} >Cancel</Button>
            </td>
        </tr>
    )
}

export default EditRow;
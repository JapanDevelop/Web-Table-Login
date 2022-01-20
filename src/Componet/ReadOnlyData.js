import React from 'react';
import { Button } from 'react-bootstrap';
import './ReadOnlyData.css';

const ReadOnlyData = ({dataInfo, handleEditClick, DeleteClick}) => {
    return (
        <tr>
            <td>{dataInfo.Name}</td>
            <td>{dataInfo.Age}</td>
            <td>{dataInfo.Nickname}</td>
            <td>
                <Button className='buttonStyle'
                type='button' 
                onClick={(event) => handleEditClick(event, dataInfo)}>Edit</Button>
                
                <Button variant='danger' 
                type='button' 
                onClick={() => DeleteClick(dataInfo.id)}>Delete</Button>
            </td>
        </tr>
    )
}

export default ReadOnlyData;

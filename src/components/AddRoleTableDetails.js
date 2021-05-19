import React from 'react';
import { Table } from 'react-bootstrap';
import { addRoleDetails } from '../data/addRoleDetails.data';
import AddRoleContentDetails from './AddRoleContentDetails';

const AddRoleTableDetails = ({ className }) => {
    return (
        <article className={`role-table-details ${className}`}>
            <Table className={className} bordered>
                <thead>
                    <tr className="text-center">
                        <th>Deparment/Role Name</th>
                        <th>Access Level</th>
                        <th>Summary</th>
                        <th>Last Updated</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {addRoleDetails.map((role) => (
                        <AddRoleContentDetails {...role} key={role.id} />
                    ))}
                </tbody>
            </Table>
        </article>
    );
};

export default AddRoleTableDetails;

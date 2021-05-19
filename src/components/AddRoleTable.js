import React from 'react';
import { Table } from 'react-bootstrap';
import { addRole } from '../data/addRole.data';
import AddRoleContent from './AddRoleContent';

const AddRoleTable = ({ className }) => {
    return (
        <Table className={className} bordered>
            <thead>
                <tr className="text-center">
                    <th>Deparment/Role Name</th>
                    <th>Access Level</th>
                    <th>No of members</th>
                    <th>Last Updated</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {addRole.map((role) => (
                    <AddRoleContent {...role} key={role.id} />
                ))}
            </tbody>
        </Table>
    );
};

export default AddRoleTable;

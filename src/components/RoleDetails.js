import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import AddRoleTableDetails from './AddRoleTableDetails';
import { addRole } from '../data/addRole.data';
import { useParams } from 'react-router';
import { faArrowLeft, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const RoleDetails = () => {
    const { id } = useParams();
    const addedRole = addRole.find((data) => data.id === Number(id));

    return (
        <Container className="role-detail mt-4">
            <div className="role-btn">
                <Link to="/accessControl">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span className="ml-3">{addedRole.title}</span>
                </Link>
                <button>
                    <FontAwesomeIcon icon={faPen} />
                </button>
            </div>
            <Tabs
                className="tabs-item mt-4"
                defaultActiveKey="accessControl"
                id="tab"
            >
                <Tab eventKey="accessControl" title="Access Control">
                    <AddRoleTableDetails className="mt-3" />
                </Tab>
                <Tab eventKey="assigedMembers" title="Assiged Members"></Tab>
            </Tabs>
        </Container>
    );
};

export default RoleDetails;

import React from 'react';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import RoleDetails from './RoleDetails';
import Sidebar from './Sidebar';

const AccessControlDetails = () => {
    return (
        <Row className="access-control-details">
            <Col md={3}>
                <div className="position-relative">
                    <Sidebar />
                </div>
            </Col>
            <Col md={9} className="mt-7">
                <Tabs
                    className="tabs-item"
                    defaultActiveKey="permissions"
                    id="tab"
                >
                    <Tab eventKey="permissions" title="Permissions">
                        <RoleDetails />
                    </Tab>
                    <Tab
                        eventKey="approvalMatrix"
                        title="Approval Matrix"
                    ></Tab>
                </Tabs>
            </Col>
        </Row>
    );
};

export default AccessControlDetails;

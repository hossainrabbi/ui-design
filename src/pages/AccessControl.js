import React from 'react';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import AddRole from '../components/AddRole';
import Sidebar from '../components/Sidebar';

const AccessControl = () => {
    return (
        <Row>
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
                        <AddRole />
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

export default AccessControl;

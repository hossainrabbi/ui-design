import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';

const AccessControl = () => {
    return (
        <Row>
            <Col md={3}>
                <Sidebar />
            </Col>
            <Col md={9}>hello world</Col>
        </Row>
    );
};

export default AccessControl;

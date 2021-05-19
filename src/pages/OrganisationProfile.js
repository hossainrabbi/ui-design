import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';

const OrganisationProfile = () => {
    return (
        <Row>
            <Col md={3}>
                <div className="position-relative">
                    <Sidebar />
                </div>
            </Col>
            <Col md={9} className="mt-7">
                <h2>Coming Soon...</h2>
            </Col>
        </Row>
    );
};

export default OrganisationProfile;

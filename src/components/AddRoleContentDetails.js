import React, { useState } from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';

const permissions = [
    { id: 1, title: 'View items in access' },
    { id: 2, title: 'Edit items in access' },
    { id: 3, title: 'Create items in access' },
    { id: 4, title: 'Delete items in access' },
];

const AddRoleContentDetails = ({ title, access, updated }) => {
    const [showInfo, setShowInfo] = useState(false);
    const [toggleChenge, settoggleChenge] = useState(true);

    return (
        <>
            <tr className="role-content-details text-center">
                <td className="text-left">
                    <div>
                        <div
                            className="role-btn"
                            onClick={() => setShowInfo(!showInfo)}
                        >
                            <button>
                                <FontAwesomeIcon
                                    icon={showInfo ? faMinus : faPlus}
                                />
                            </button>
                            <span className="ml-3">{title}</span>
                        </div>
                    </div>
                </td>
                <td>
                    <span
                        className={`${access} ${
                            !toggleChenge ? 'disable' : ''
                        }`}
                    >
                        {access}
                    </span>
                </td>
                <td>
                    <button className="costomize-btn">View</button>
                    <button className="costomize-btn">Create</button>
                    <button className="costomize-btn">Edit</button>
                    <button className="costomize-btn">Delete</button>
                </td>
                <td>{updated}</td>
                <td>
                    <label className="switch">
                        <input
                            type="checkbox"
                            defaultChecked={toggleChenge ? true : ''}
                            onClick={() => settoggleChenge(!toggleChenge)}
                        />
                        <span className="slider round"></span>
                    </label>
                </td>
            </tr>
            {showInfo && (
                <tr>
                    <td className="info" colSpan="5">
                        <p>All aspects in the bidding module</p>
                        <Row className="justify-content-around ml-4 mb-3">
                            <Col md={6} className="access-control">
                                <p>Access Control</p>
                                <form>
                                    <div className="form-check mb-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="access"
                                            id="allAccess"
                                            value="allAccess"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="allAccess"
                                        >
                                            All Access
                                            <span className="mb-0 d-block light-gray-color">
                                                Can access all items
                                            </span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="access"
                                            id="restricted"
                                            value="restricted"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="restricted"
                                        >
                                            Restricted Access
                                            <span className="mb-0 d-block light-gray-color">
                                                Can access only assigned or
                                                created items
                                            </span>
                                        </label>
                                    </div>
                                </form>
                            </Col>
                            <Col>
                                <p>Permissions</p>
                                <form>
                                    {permissions.map((permission) => (
                                        <div
                                            className="form-check"
                                            key={permission.id}
                                        >
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={permission.id}
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor={permission.id}
                                            >
                                                {permission.title}
                                            </label>
                                        </div>
                                    ))}
                                </form>
                            </Col>
                        </Row>
                    </td>
                </tr>
            )}
        </>
    );
};

export default AddRoleContentDetails;

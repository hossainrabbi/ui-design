import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

const AddRole = () => {
    return (
        <Container className="add-role mt-4">
            <div className="role-btn">
                <button>
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Add Role</span>
                </button>
                <button>
                    <FontAwesomeIcon icon={faPen} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </Container>
    );
};

export default AddRole;

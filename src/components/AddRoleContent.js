import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AddRoleContent = ({ id, title, access, members, updated, disabled }) => {
    return (
        <tr className="text-center">
            <td className="text-left">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="roleRadio"
                        id={id}
                        value={title}
                        disabled={disabled && 'disabled'}
                    />
                    <label className="form-check-label" htmlFor={id}>
                        {title}
                    </label>
                </div>
            </td>
            <td>
                <span className={access}>{access}</span>
            </td>
            <td>{members}</td>
            <td>{updated}</td>
            <td>
                <Link className="link" to={`accessControl/${id}`}>
                    <FontAwesomeIcon icon={faEye} />
                </Link>
            </td>
        </tr>
    );
};

export default AddRoleContent;

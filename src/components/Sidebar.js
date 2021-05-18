import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="mt-7">
                <li>
                    <NavLink
                        className="sidebar-link"
                        to="/projects"
                        activeClassName="sidebar-active"
                    >
                        <FontAwesomeIcon icon={faTasks} /> <span>Projects</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="sidebar-link"
                        to="/organisationProfile"
                        activeClassName="sidebar-active"
                    >
                        <FontAwesomeIcon icon={faTasks} />
                        <span>Organisation Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="sidebar-link"
                        to="/accessControl"
                        activeClassName="sidebar-active"
                    >
                        <FontAwesomeIcon icon={faTasks} />
                        <span>Access Control</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

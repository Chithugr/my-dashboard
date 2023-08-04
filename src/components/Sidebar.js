import React from 'react';
import styles from './Sidebar.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';
function Sidebar() {
    return (

        <div className={styles.sidebar}>
            <h2>Dashboard</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/syear">Start_Year</Link></li>
                    <li><Link to="/inten">Intensity</Link></li>
                    <li><Link to="/publish">Published</Link></li>
                    <li><Link to="/source">Source</Link></li>
                    <li><Link to="/title">Title</Link></li>
                    <li><Link to="/country">Country</Link></li>
                    <li><Link to="/region">Region</Link></li>
                    <li><Link to="/city">City</Link></li>
                    <li><Link to="/invoice">Invoice</Link></li>
                    <li><Link to="/eyear">End_Year</Link></li>

                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;

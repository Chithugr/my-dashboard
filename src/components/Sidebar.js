import React from 'react';
import styles from './Sidebar.module.css'; // Import the CSS module

function Sidebar() {
    return (

        <div className={styles.sidebar}>
            <h2>Dashboard</h2>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Start_Year</li>
                    <li>Title</li>
                    <li>Published</li>
                    <li>Source</li>
                    <li>Title</li>
                    <li>Country</li>
                    <li>Region</li>
                    <li>City</li>
                    <li>Invoice</li>
                    <li>End_Year</li>

                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;

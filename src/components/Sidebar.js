import React from 'react';
import styles from './Sidebar.module.css'; // Import the CSS module

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>E-Mail</li>
                    <li>Chat</li>
                    <li>Calender</li>
                    <li>Invoice</li>
                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;

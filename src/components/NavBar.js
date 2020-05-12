import React from 'react';
import { Link } from '@material-ui/core';

export default function TableGrid(props) {
    return(
        <nav className="nav-bar">
            <div className="nav-bar-items">
                <ul>
                    <li><Link style={{ cursor: 'pointer' }} onClick={() => props.setCurrentTab('home')}>Home</Link></li>
                    <li><Link style={{ cursor: 'pointer' }} onClick={() => props.setCurrentTab('tournamentList')}>Tournaments</Link></li>
                    <li><Link style={{ cursor: 'pointer' }} onClick={() => props.setCurrentTab('playerList')}>Players</Link></li>
                    <li><Link style={{ cursor: 'pointer' }} onClick={() => props.setCurrentTab('data')}>Data Analytics</Link></li>
                </ul>
            </div>
        </nav>
    )
}
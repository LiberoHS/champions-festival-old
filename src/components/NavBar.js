import React from 'react';
import { Link } from '@material-ui/core';
import useWindowDimensions from './windowDimensions.js'

export default function NavBar(props) {
    const { width } = useWindowDimensions();
    return(
        <nav className="nav-bar">
            <div className={width > 768 ? "nav-bar-desktop" : "nav-bar-mobile"}>
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
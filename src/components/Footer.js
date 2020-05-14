import React from 'react';
// import FBIcon from './assets/facebook-f-brands';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import useWindowDimensions from './windowDimensions.js'
import './Footer.css'

library.add(fab);

export default function Footer(props) {
    const { width } = useWindowDimensions();

    return (
        <div>
            <div className="phantom-style" />
            <Grid className={width > 992 ? "desktop-footer" : "mobile-footer"}>
                <a href="https://www.facebook.com/nlftcg/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']}
                    className={width > 992 ? "desktop-icon" : "mobile-icon"} /></a>
                <a href="https://twitter.com/UlquiorraTCG" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']}
                    className={width > 992 ? "desktop-icon" : "mobile-icon"} /></a>
                <a href="https://github.com/HitoKage13" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'github']}
                    className={width > 992 ? "desktop-icon" : "mobile-icon"} /></a>
                {props.children}
            </Grid>
        </div>
    )
}

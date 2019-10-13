import React from 'react';
// import FBIcon from './assets/facebook-f-brands';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { useMediaQuery } from 'react-responsive';

library.add(fab);

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

const Footer = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    var footerStyle = {};
    var iconStyle = {};
    if (isDesktop) {
        footerStyle = {
            backgroundColor: "#555555",
            fontSize: "18px",
            color: "white",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            padding: "20px",
            left: "0",
            bottom: "0",
            height: "30px",
            width: "100%"
        };
        iconStyle = {
            color: "white",
            marginRight: "1%",
            width: "30px",
            height: "30px",
        }
    } else {
        footerStyle = {
            backgroundColor: "#555555",
            fontSize: "12px",
            color: "white",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            padding: "20px",
            left: "0",
            bottom: "0",
            height: "20px",
            width: "100%"
        };
        iconStyle = {
            color: "white",
            marginRight: "2%",
            width: "20px",
            height: "20px",
        }
    }

    return (
        <div>
            <div style={phantomStyle} />
            <Grid style={footerStyle}>
                <Grid>
                    <a href="https://www.facebook.com/nlftcg/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} style={iconStyle} /></a>
                    <a href="https://twitter.com/UlquiorraTCG" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} style={iconStyle} /></a>
                    <a href="https://github.com/HitoKage13" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} style={iconStyle} /></a>
                    {children}
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;

import React from "react";
import {BottomNavigation, BottomNavigationAction, Tooltip} from "@material-ui/core";
import "./Footer.css";
import {AccountTree, Facebook, GitHub, Instagram, LinkedIn} from "@material-ui/icons";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <BottomNavigation id="footerBottomNavigation">
            <Tooltip title="DOAP file">
                <Link to="/RDF/doap.ttl" target="_blank" download><BottomNavigationAction icon={<AccountTree className="footerLink" />} /></Link>
            </Tooltip>
            <Tooltip title="Facebook link">
                <BottomNavigationAction icon={<Facebook className="footerLink" />} href="https://www.facebook.com/ivo.t2000/" target="_blank" rel="noreferrer" />
            </Tooltip>
            <Tooltip title="Instagram link">
                <BottomNavigationAction icon={<Instagram className="footerLink" />} href="https://www.instagram.com/itasevski/" target="_blank" rel="noreferrer" />
            </Tooltip>
            <Tooltip title="LinkedIn link">
                <BottomNavigationAction icon={<LinkedIn className="footerLink" />} href="https://www.linkedin.com/in/ivo-tasevski-5b920b22a/" target="_blank" rel="noreferrer" />
            </Tooltip>
            <Tooltip title="GitHub link">
                <BottomNavigationAction icon={<GitHub className="footerLink" />} href="https://github.com/itasevski" target="_blank" rel="noreferrer" />
            </Tooltip>
        </BottomNavigation>
    )
}

export default Footer;
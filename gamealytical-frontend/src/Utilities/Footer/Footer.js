import React from "react";
import {BottomNavigation, BottomNavigationAction, Tooltip} from "@material-ui/core";
import "./Footer.css";
import {AccountTree, Facebook, Instagram, LinkedIn} from "@material-ui/icons";


const Footer = () => {
    return (
        <BottomNavigation id="footerBottomNavigation">
            <Tooltip title="DOAP file">
                <BottomNavigationAction icon={<AccountTree className="footerLink" />} href="#" />
            </Tooltip>
            <Tooltip title="Facebook link">
                <BottomNavigationAction icon={<Facebook className="footerLink" />} href="#" />
            </Tooltip>
            <Tooltip title="Instagram link">
                <BottomNavigationAction icon={<Instagram className="footerLink" />} href="#" />
            </Tooltip>
            <Tooltip title="LinkedIn link">
                <BottomNavigationAction icon={<LinkedIn className="footerLink" />} href="#" />
            </Tooltip>
        </BottomNavigation>
    )
}

export default Footer;
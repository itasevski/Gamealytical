import React from "react";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import "./Footer.css";
import {AccountTree, Facebook, Instagram, Twitter} from "@material-ui/icons";


const Footer = () => {
    return (
        <BottomNavigation id="footerBottomNavigation">
            <BottomNavigationAction icon={<AccountTree className="footerLink" />} href="#" />
            <BottomNavigationAction icon={<Facebook className="footerLink" />} href="#" />
            <BottomNavigationAction icon={<Twitter className="footerLink" />} href="#" />
            <BottomNavigationAction icon={<Instagram className="footerLink" />} href="#" />
        </BottomNavigation>
    )
}

export default Footer;
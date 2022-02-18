import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <AppBar id="headerAppBar" position="static">
                <Toolbar>
                    <Typography id="headerLogo" variant="h6" component="h1">
                        Gamealytical
                    </Typography>
                    <Typography style={{ marginLeft: "auto" }} variant="h6" noWrap>
                        <Link className="headerLink" to="/home">Home</Link>
                    </Typography>
                    <Typography variant="h6" noWrap>
                        <Link className="headerLink" to="/browse">Browse</Link>
                    </Typography>
                    <Typography style={{ marginRight: "25%" }} variant="h6" noWrap>
                        <Link className="headerLink" to="/about">About</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
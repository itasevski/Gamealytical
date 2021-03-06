import React from "react";
import {Grid, Typography} from "@material-ui/core";
import "./About.css";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" direction="column" alignItems="center">
                        <Typography variant="h3" style={{ color: "white", fontWeight: "bolder" }}>
                            Background
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "20px", textAlign: "center" }}>
                    <Grid container justifyContent="center" direction="row" alignItems="center">
                        <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold", fontSize: "22px" }}>
                            This open-source web application enables you to search for and view many details about any video game. It uses RDF data and follows the Linked Data principles to retrieve data from DBpedia, by executing SPARQL queries on DBPedia's SPARQL endpoint.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "60px" }}>
                    <Grid container justifyContent="center" direction="column" alignItems="center">
                        <Typography variant="h3" style={{ color: "white", fontWeight: "bolder" }}>
                            Usage
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "20px", textAlign: "center" }}>
                    <Grid container justifyContent="center" direction="row" alignItems="center">
                        <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold", fontSize: "22px" }}>
                            On the home page, there are 4 featured video games. These video games are picked randomly from a subset of the highest-rated video games, as rated by IGN.
                            By using the text field on the Home page, you can search for any video game you want by entering the full name of the video game and pressing the ENTER key. Beware of case matching, though, as it is enabled. Make sure you place the capital and lowercase letters, as well as spaces and other symbols in the correct places.
                            In the "Browse" section of the web application, you can browse among 10,000 video games retrieved from DBPedia, shown in a user-friendly interface. You can also choose to view more details about a certain video game.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "60px" }}>
                    <Grid container justifyContent="center" direction="column" alignItems="center">
                        <Typography variant="h3" style={{ color: "white", fontWeight: "bolder" }}>
                            About me
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "20px", textAlign: "center" }}>
                    <Grid container justifyContent="center" direction="row" alignItems="center">
                        <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold", fontSize: "22px" }}>
                            My name is Ivo Tasevski and I am a student at the Faculty of Computer Science and Engineering in Skopje, North Macedonia. This project is for my Web-based systems subject.
                            More information about me is available in my <Link id="foaf" to="/RDF/foaf.ttl" target="_blank" download>FOAF</Link> file. My social links are available in the footer of this web application.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "25px", textAlign: "center" }}>
                    <Grid container justifyContent="center" direction="row" alignItems="center">
                        <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}>
                            View the <Link id="doap" to="/RDF/doap.ttl" target="_blank" download>DOAP</Link> file of this project
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "50px", textAlign: "center" }}>
                    <Grid container justifyContent="center" direction="row" alignItems="center">
                        <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold" }}>
                            <a id="github" href="https://github.com/itasevski/Gamealytical" target="_blank" rel="noreferrer">GitHub Repository</a>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "10px", textAlign: "center" }}>
                    <Grid container justifyContent="center" direction="row" alignItems="center">
                        <Typography variant="subtitle1" style={{ color: "white" }}>
                            Gamealytical v1.0.0
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;
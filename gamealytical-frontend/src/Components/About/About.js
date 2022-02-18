import React from "react";
import {Grid, Typography} from "@material-ui/core";

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
                            This web application enables you to search for and view many details about any video game. It uses RDF data and follows the Linked Data principles to retrieve data from DBpedia, by executing SPARQL queries on DBPedia's SPARQL endpoint.
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
                            By using the text field on the home page, you can search for any video game you want by entering the full name of the video game and pressing the ENTER key. Case matching isn't enabled, so you can enter the name however you like (uppercase or lowercase).
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
                            More information about me is available in my FOAF file:
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "120px", textAlign: "center" }}>
                    <Grid container justifyContent="center" direction="row" alignItems="center">
                        <Typography variant="subtitle1" style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}>
                            View the DOAP file of this project by clicking here, or by clicking on the first button in the footer.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;
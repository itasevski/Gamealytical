import React from "react";
import {Grid, Typography} from "@material-ui/core";
import "./GameDetails.css";

const GameDetails = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <Grid container justifyContent="center" direction="row" alignItems="center">
                <Grid item xs={3}>
                    <Grid container justifyContent="center" direction="row" alignItems="center">
                        <img src="https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png" alt="GTAV" width={400} height={500} />
                        <Typography variant="h4" style={{ color: "white", fontWeight: "bolder", marginTop: "15px" }}>Grand Theft Auto V </Typography>
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "18px", marginTop: "15px" }}>
                            View this resource in <a id="dbpediaLink" href="https://dbpedia.org/page/Grand_Theft_Auto_V" target="_blank" rel="noreferrer">DBpedia</a>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent="center" direction="column" alignItems="center">
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>Name:</span>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> Grand Theft Auto V</span>
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>Creator:</span>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> Rockstar Games</span>
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>Release date:</span>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> September 17th, 2013</span>
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>Budget:</span>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> 200M$</span>
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>Profit:</span>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> 1BN$</span>
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>Copies sold:</span>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> 1,000,396</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default GameDetails;
import React from "react";
import {Grid, Typography} from "@material-ui/core";
import "./GameDetails.css";

const GameDetails = (props) => {

    const [relatedTopicsCount, setRelatedTopicsCount] = React.useState(props.queriedGame.relatedTopics.split(", ").length);

    return (
        <div style={{ marginTop: "50px", marginBottom: "100px" }}>
            <Grid container justifyContent="center" direction="row" alignItems="center">
                <Grid item xs={3}>
                    <Grid container justifyContent="center" direction="row" alignItems="center">
                        <img src={props.queriedGame.image} alt={props.queriedGame.name.replace("@en", "")} width={400} height={500} style={{ color: "white" }}/>
                        <Typography variant="h4" style={{ color: "white", fontWeight: "bolder", marginTop: "15px" }}>
                            {props.queriedGame.name.replace("@en", "")}
                            <Typography variant="subtitle1" style={{ color: "white", fontSize: "18px", marginTop: "15px" }}>
                                View this resource in <a id="dbpediaLink" href={props.queriedGame.game} target="_blank" rel="noreferrer">DBpedia</a>
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={1}> </Grid>
                <Grid item xs={5}>
                    <Grid container justifyContent="center" direction="column" alignItems="center">
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>Name:</span>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> {props.queriedGame.name.replace("@en", "")}</span>
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>Publisher:</span>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> {props.queriedGame.publisher}</span>
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>Release dates:</span>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> {props.queriedGame.releaseDates}</span>
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>Genre:</span>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> {props.queriedGame.genre}</span>
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>Description:</span>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> {props.queriedGame.comment.replace("@en", "")}</span>
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>Developer:</span>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> {props.queriedGame.developer}</span>
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>Platforms:</span>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> {props.queriedGame.platforms}</span>
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>IGN rating:</span>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> {props.queriedGame.ignRating}</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" direction="row" alignItems="center" style={{ marginTop: "150px", height: "200%" }}>
                <Grid item xs={5}>
                    <Grid container justifyContent="center" direction="row" alignItems="center">
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>See also:</span>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> {props.queriedGame.relatedTopics.split(", ").slice(0, relatedTopicsCount / 2).map((topic) => {
                                return (
                                    <div><a className="relatedTopicLink" href={topic} target="_blank" rel="noreferrer">{topic}</a></div>
                                );
                            })} </span>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Grid container justifyContent="center" direction="row" alignItems="center">
                        <Typography variant="subtitle1" style={{ color: "white", fontSize: "20px" }}>
                            <span style={{ textDecoration: "none", fontWeight: "bold" }}> {props.queriedGame.relatedTopics.split(", ").slice(relatedTopicsCount / 2, relatedTopicsCount).map((topic) => {
                                return (
                                    <div><a className="relatedTopicLink" href={topic} target="_blank" rel="noreferrer">{topic}</a></div>
                                );
                            })} </span>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default GameDetails;
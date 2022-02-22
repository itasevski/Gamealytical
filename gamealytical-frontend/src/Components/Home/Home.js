import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia, CircularProgress,
    Grid,
    InputBase,
    Typography
} from "@material-ui/core";
import {Search} from "@material-ui/icons";
import "./Home.css";
import {useNavigate} from "react-router-dom";

const Home = (props) => {

    const [state, setState] = React.useState({
        videoGameName: "",

        searchInProgress: false
    });

    let navigate = useNavigate();

    var cardStyle = {
        width: '22vw',
        height: '50vw'
    }

    const handleTextFieldChange = (event) => {
        setState({
            ...state,
            videoGameName: event.target.value.trim()
        });
    }

    const onSearchClick = (event) => {
        event.preventDefault();

        let path = `/gameDetails`;

        setState({
            ...state,
            searchInProgress: true
        });

        props.onSearch(state.videoGameName).then((res) => navigate(path));
    }

    return (
        <div style={{ marginBottom: "100px" }}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" direction="column" alignItems="center">
                        <Typography id="searchGameHeading" variant="h4" component="h4">
                            Search for a video game
                        </Typography>
                    </Grid>
                    <Grid container justifyContent="center" direction="column" alignItems="center">
                        <InputBase
                            id="searchGameInputBase"
                            placeholder="Enter full name of the video game..."
                            startAdornment={<Search style={{ color: "white", fontSize: "30px", paddingRight: "10px" }} />}
                            type="search"
                            variant="outlined"
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                    <Grid container justifyContent="center" direction="column" alignItems="center">
                        <Button id="searchButton" variant="contained" onClick={onSearchClick}>
                            Search
                            {state.searchInProgress === true &&
                            <CircularProgress style={{ marginLeft: "10px" }} size={15} />
                            }
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={4}>
                    <Grid container justifyContent="center" direction="row" alignItems="center">
                        <Typography id="featuredGamesHeading" variant="h3" component="h3">
                            Featured games
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" direction="row" alignItems="center">
                        {props.featuredGames.map((videoGame) => {
                            return (
                                <div style={{ padding: "20px" }}>
                                    <Card style={cardStyle} sx={{ maxWidth: 345 }}>
                                        <CardHeader
                                            title={videoGame.name.replace("@en", "")}
                                            subheader={"Release date: " + videoGame.releaseDates}
                                        />
                                        <CardMedia
                                            component="img"
                                            image={videoGame.image}
                                            alt={videoGame.name.replace("@en", "")}
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {videoGame.comment.replace("@en", "")}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <Typography variant="subtitle1" style={{ color: "gray" }}>
                                                {"IGN rating: " + videoGame.ignRating}
                                            </Typography>
                                        </CardActions>
                                        <Typography variant="subtitle1" style={{ color: "gray", marginLeft: "10px" }}>
                                            {"DBpedia resource: "}<a href={videoGame.game} target="_blank" rel="noreferrer">{videoGame.name.replace("@en", "")}</a>
                                        </Typography>
                                    </Card>
                                </div>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;
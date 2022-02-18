import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton, InputBase,
    Typography
} from "@material-ui/core";
import {Favorite, Search} from "@material-ui/icons";
import "./Home.css";

const Home = () => {

    var cardStyle = {
        width: '15vw',
        height: '37vw'
    }

    const card = (
        <Card style={cardStyle} sx={{ maxWidth: 345 }}>
            <CardHeader
                title="Grand Theft Auto V"
                subheader="Release date: September 17, 2013"
            />
            <CardMedia
                component="img"
                image="https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/14/gaming-gta5-cover.jpeg?resize=480:*"
                alt="GTAV"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Favorite />
                </IconButton>
            </CardActions>
        </Card>
    );

    return (
        <div>
            <Grid item xs={12}>
                <Grid container justifyContent="center" direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography id="searchGameHeading" variant="h4" component="h4">
                            Search for a video game
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <InputBase
                            id="searchGameInputBase"
                            placeholder="Please enter full name of the video game..."
                            startAdornment={<Search style={{ color: "white", fontSize: "30px", paddingRight: "10px" }} />}
                            type="search"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "15px" }}>
                        <Button variant="contained">
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} style={{ marginBottom: "100px" }}>
                <Grid container justifyContent="center">
                    <Grid item xs={8}>
                        <Typography id="featuredGamesHeading" variant="h3" component="h3">
                            Featured games
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" direction="row" alignItems="center">
                    <Grid item xs={2}>
                        {card}
                    </Grid>
                    <Grid item xs={2}>
                        {card}
                    </Grid>
                    <Grid item xs={2}>
                        {card}
                    </Grid>
                    <Grid item xs={2}>
                        {card}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;
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
        width: '22vw',
        height: '100vw'
    }

    function card(name, releaseDate, imageUrl, description) {
        return (
            <div style={{ padding: "20px" }}>
                <Card style={cardStyle} sx={{ maxWidth: 345 }}>
                    <CardHeader
                        title={name}
                        subheader={releaseDate}
                    />
                    <CardMedia
                        component="img"
                        image={imageUrl}
                        alt={name}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <Favorite />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        );
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
                        />
                    </Grid>
                    <Grid container justifyContent="center" direction="column" alignItems="center">
                        <Button id="searchButton" variant="contained">
                            Search
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
                        {card("Grand Theft Auto V", "September 17, 2013", "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png", "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and gunrunner Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles. The game is played from either a third-person or first-person perspective, and its world is navigated on foot and by vehicle. Players control the three lead protagonists throughout single-player and switch among them, both during and outside missions. The story is centred on the heist sequences, and many missions involve shooting and driving gameplay. A \"wanted\" system governs the aggression of law enforcement response to players who commit crimes. Grand Theft Auto Online, the game's online multiplayer mode, lets up to 30 players engage in a variety of different cooperative and competitive game modes. The game's development began around the time of Grand Theft Auto IV's release and was shared between many of Rockstar's studios worldwide. The development team drew influence from many of their previous projects such as Red Dead Redemption and Max Payne 3 and designed the game around three lead protagonists to innovate on the core structure of its predecessors. Much of the development work constituted the open world's creation, and several team members conducted field research around California to capture footage for the design team. The game's soundtrack features an original score composed by a team of producers who collaborated over several years. It was released in September 2013 for the PlayStation 3 and Xbox 360, in November 2014 for the PlayStation 4 and Xbox One, and April 2015 for Microsoft Windows. PlayStation 5 and Xbox Series X/S versions are scheduled for release in March 2022. Extensively marketed and widely anticipated, the game broke industry sales records and became the fastest-selling entertainment product in history, earning $800 million in its first day and $1 billion in its first three days. It received widespread critical acclaim, with praise directed at its multiple protagonist design, open world, presentation and gameplay. However, it caused controversies related to its depiction of violence and women. Considered one of seventh and eighth generation console gaming's most significant titles and among the best video games ever made, it won year-end accolades including Game of the Year awards from several gaming publications. It is the second best-selling video game of all time with over 155 million copies shipped, and as of April 2018, one of the most financially successful entertainment products of all time, with about $6 billion in worldwide revenue.")}
                        {card("Battlefield 1", "October 21, 2016", "https://upload.wikimedia.org/wikipedia/en/f/fc/Battlefield_1_cover_art.jpg", "Battlefield 1 is a first-person shooter video game developed by DICE and published by Electronic Arts. Battlefield 1 is the fifteenth installment in the Battlefield series, and the first main entry in the series since Battlefield 4. It was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on October 21, 2016. Battlefield 1 received positive reviews by critics and was seen as an improvement over the series' previous installments, Battlefield 4 and Battlefield Hardline. Most of the praise was directed towards its World War I setting, single-player campaigns, multiplayer modes, visuals, and sound design.It was a commercial success, selling over 15 million copies. The next game in the franchise, Battlefield V, was announced on May 23, 2018 and was released on November 20, 2018.")}
                        {card("Player Unknown's Battlegrounds", "March 23, 2017", "https://i1.sndcdn.com/artworks-7dd4JObG769Fy1sF-Cm8DzA-t500x500.jpg", "PlayerUnknown's Battlegrounds (also known as PUBG: Battlegrounds) is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of Bluehole. The game is based on previous mods that were created by Brendan \"PlayerUnknown\" Greene for other games, inspired by the 2000 Japanese film Battle Royale, and expanded into a standalone game under Greene's creative direction. In the game, up to one hundred players parachute onto an island and scavenge for weapons and equipment to kill others while avoiding getting killed themselves. The available safe area of the game's map decreases in size over time, directing surviving players into tighter areas to force encounters. The last player or team standing wins the round. PUBG was first released for Microsoft Windows via Steam's early access beta program in March 2017, with a full release in December 2017. The game was also released by Microsoft Studios for the Xbox One via its Xbox Game Preview program that same month, and officially released in September 2018. PUBG Mobile, a free-to-play mobile game version for Android and iOS, was released in 2018, in addition to a port for the PlayStation 4. A version for the Stadia streaming platform was released in April 2020. PUBG is one of the best-selling, highest-grossing and most-played video games of all time. The original PlayerUnknown's Battlegrounds has sold over 70 million copies on personal computers and game consoles as of 2020, while the more successful PUBG Mobile version has accumulated 1 billion downloads as of March 2021 and grossed over $6.2 billion on mobile devices as of August 2021. PUBG received positive reviews from critics, who found that while the game had some technical flaws, it presented new types of gameplay that could be easily approached by players of any skill level and was highly replayable. The game was attributed to popularizing the battle royale genre, with a number of unofficial Chinese clones also being produced following its success. The game also received several Game of the Year nominations, among other accolades. PUBG Corporation has run several small tournaments and introduced in-game tools to help with broadcasting the game to spectators, as they wish for it to become a popular esport. PUBG Mobile has been banned in some countries for allegedly being harmful and addictive to younger players.")}
                        {card("Call of Duty: Black Ops 1", "November 9, 2010", "https://upload.wikimedia.org/wikipedia/en/0/02/CoD_Black_Ops_cover.png", "Call of Duty: Black Ops is a 2010 first-person shooter game developed by Treyarch and published by Activision. It was released worldwide in November 2010 for Microsoft Windows, the PlayStation 3, Wii, and Xbox 360, with a separate version for Nintendo DS developed by n-Space. Aspyr later released the game for OS X in September 2012. It is the seventh title in the Call of Duty series and the third to be developed by Treyarch. It serves as the sequel to Call of Duty: World at War. Set in the 1960s during the Cold War, the game's campaign follows CIA operative Alex Mason as he attempts to recall certain memories in combat in order to locate a numbers station. This station is due to transmit broadcasts to sleeper agents who are bound to use chemical weapons across the United States. Mason and CIA operative Jason Hudson are the game's main playable characters, as well as Red Army soldier Viktor Reznov in one mission. Locations featured in the game include Cuba, Laos, Vietnam, the Soviet Union, the United States, Hong Kong, and the Arctic Circle. The multiplayer of Black Ops features multiple objective-based game modes that are playable on 14 different maps included with the game. Improvements to loadout options and killstreak rewards are made. A form of virtual currency, COD Points, allows players to purchase weapons and customization options for their in-game character, as well as attachments and customization options for their weapon. Development for the game began in 2009. It runs an enhanced version of the IW 3.0 engine used in Treyarch's past title, World at War. The improvements made allowed for bigger campaign levels to be made as well as enhanced lighting. Treyarch focused specifically on Black Ops during development; they were developing two games at once while making World at War. Different teams within the company focused on a certain game mode. Music was composed by Sean Murray, with music by The Rolling Stones, Creedence Clearwater Revival, Eminem, and Avenged Sevenfold appearing in the game. The marketing of the game began in April 2010. Multiple trailers promoting the game and its modes were released from May until October. The game received generally positive reviews from critics with praise for its story, voice-acting, and multiplayer modes, although some criticized it for its lack of innovation, linear gameplay, and technical issues. Within 24 hours of going on sale, the game had sold more than 5.6 million copies, 4.2 million in the U.S. and 1.4 million in the UK, breaking the record set by its predecessor Modern Warfare 2 by some 2.3 million copies. After six weeks on release, Activision reported that Black Ops had exceeded $1 billion in sales. On August 3, 2011, Activision confirmed that the game had sold over 25 million copies worldwide, making it one of the best-selling games of all time. Four sequels, Call of Duty: Black Ops II, Call of Duty: Black Ops III, and Call of Duty: Black Ops 4, were released in November 2012, November 2015, and October 2018, respectively. Call of Duty: Black Ops Cold War, set between Black Ops and Black Ops II, was released on November 13, 2020.")}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;
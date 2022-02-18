import React from "react";
import {
    Button,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@material-ui/core";
import "./Browse.css";

const Browse = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    function createData(name, releaseDate, creator, imageUrl) {
        return {
            name,
            releaseDate,
            creator,
            imageUrl
        };
    }

    const rows = [
        createData("Grand Theft Auto V", "September 17, 2013", "Rockstar Games", "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png"),
        createData("Grand Theft Auto IV", "April 28, 2008", "Rockstar Games", "https://upload.wikimedia.org/wikipedia/en/b/b7/Grand_Theft_Auto_IV_cover.jpg"),
        createData("Battlefield 1","October 21, 2016", "DICE", "https://upload.wikimedia.org/wikipedia/en/f/fc/Battlefield_1_cover_art.jpg"),
        createData("Battlefield V","November 9, 2018", "DICE", "https://upload.wikimedia.org/wikipedia/en/f/f0/Battlefield_V_standard_edition_box_art.jpg"),
        createData("Call of Duty: Black Ops 1","November 9, 2010", "Activision", "https://upload.wikimedia.org/wikipedia/en/0/02/CoD_Black_Ops_cover.png"),
        createData("Player Unknown's Battlegrounds","March 23, 2017", "KRAFTON", "https://i1.sndcdn.com/artworks-7dd4JObG769Fy1sF-Cm8DzA-t500x500.jpg")
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div style={{ marginTop: "50px", marginBottom: "100px" }}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <TableContainer>
                            <Table sx={{ minWidth: 850 }} style={{ width: 1400 }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ color: "white", fontWeight: "bolder", fontSize: "19px" }} id="cell-heading-1" align="left">Name</TableCell>
                                        <TableCell style={{ color: "white", fontWeight: "bolder", fontSize: "19px" }} id="cell-heading-2" align="center">Release date</TableCell>
                                        <TableCell style={{ color: "white", fontWeight: "bolder", fontSize: "19px" }} id="cell-heading-3" align="center">Creator</TableCell>
                                        <TableCell style={{ color: "white", fontWeight: "bolder", fontSize: "19px" }} id="cell-heading-4" align="center"> </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                        return (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell style={{ color: "white", fontWeight: "bold", fontSize: "17px" }} align="left">
                                                    <img src={row.imageUrl} width={100} height={105} alt={row.name} />
                                                    <span style={{ marginLeft: "15px", paddingBottom: "50px" }}>{row.name}</span>
                                                </TableCell>
                                                <TableCell style={{ color: "white", fontWeight: "bold", fontSize: "17px" }} align="center">{row.releaseDate}</TableCell>
                                                <TableCell style={{ color: "white", fontWeight: "bold", fontSize: "17px" }} align="center">{row.creator}</TableCell>
                                                <TableCell align="center">
                                                    <Button id="viewDetailsButton" variant="outlined" color="primary">
                                                        View details
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                            <TablePagination
                                style={{ backgroundColor: "white", marginTop: "15px", borderRadius: "10px" }}
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={rows.length} // change to length of total number of rows/games
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Browse;
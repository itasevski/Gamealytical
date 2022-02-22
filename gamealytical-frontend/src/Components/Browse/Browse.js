import React from "react";
import {
    Button, CircularProgress,
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
import {Link, useNavigate} from "react-router-dom";

const Browse = (props) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [searchInProgress, setSearchInProgress] = React.useState(false);
    const [currentRow, setCurrentRow] = React.useState("");

    let navigate = useNavigate();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div style={{ marginTop: "50px", marginBottom: "100px" }}>
            <Grid container justifyContent="center" direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Grid container>
                        <TableContainer>
                            <Table sx={{ minWidth: 850 }} style={{ width: 1700 }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ color: "#FF6347", fontWeight: "bolder", fontSize: "24px" }} id="cell-heading-1" align="left">Name</TableCell>
                                        <TableCell style={{ color: "#FF6347", fontWeight: "bolder", fontSize: "24px" }} id="cell-heading-2" align="center">Genre</TableCell>
                                        <TableCell style={{ color: "#FF6347", fontWeight: "bolder", fontSize: "24px" }} id="cell-heading-2" align="center">Publisher</TableCell>
                                        <TableCell style={{ color: "#FF6347", fontWeight: "bolder", fontSize: "24px" }} id="cell-heading-2" align="center">Release dates</TableCell>
                                        <TableCell style={{ color: "#FF6347", fontWeight: "bolder", fontSize: "24px" }} id="cell-heading-3" align="center">IGN rating</TableCell>
                                        <TableCell style={{ color: "#FF6347", fontWeight: "bolder", fontSize: "24px" }} id="cell-heading-4" align="center"> </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {props.allGames.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((videoGame) => {
                                        return (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell style={{ color: "white", fontWeight: "bold", fontSize: "20px" }} align="left">
                                                    <img src={videoGame.image} width={100} height={105} alt={videoGame.name.replace("@en", "")} />
                                                    <span style={{ marginLeft: "15px", paddingBottom: "50px" }}>{videoGame.name.replace("@en", "")}</span>
                                                </TableCell>
                                                <TableCell style={{ color: "white", fontWeight: "bold", fontSize: "20px" }} align="center">{videoGame.genre}</TableCell>
                                                <TableCell style={{ color: "white", fontWeight: "bold", fontSize: "20px" }} align="center">{videoGame.publisher}</TableCell>
                                                <TableCell style={{ color: "white", fontWeight: "bold", fontSize: "20px" }} align="center">{videoGame.releaseDates}</TableCell>
                                                <TableCell style={{ color: "white", fontWeight: "bold", fontSize: "20px" }} align="center">{videoGame.ignRating}</TableCell>
                                                <TableCell align="center">
                                                    <Button id="viewDetailsButton" variant="outlined" color="primary" onClick={() => {
                                                        let path = `/gameDetails`;

                                                        setSearchInProgress(true);
                                                        setCurrentRow(videoGame.name)

                                                        props.onViewDetails(videoGame.name.replace("@en", "")).then((res) => navigate(path));
                                                    }}>
                                                        View details
                                                        {(searchInProgress === true && videoGame.name === currentRow) &&
                                                        <CircularProgress style={{ marginLeft: "10px", color: "white" }} size={20} />
                                                        }
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                                <TablePagination
                                    style={{ backgroundColor: "#FF6347", color: "white", fontWeight: "bold", fontSize: "20px", marginTop: "15px", borderRadius: "10px", width: "125%" }}
                                    rowsPerPageOptions={[5, 10, 25]}
                                    component="div"
                                    count={props.allGames.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Browse;
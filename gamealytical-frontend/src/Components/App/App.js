import React, {Component} from "react";
import Header from "../../Utilities/Header/Header";
import Footer from "../../Utilities/Footer/Footer";
import "./App.css";
import Home from "../Home/Home";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import About from "../About/About";
import Browse from "../Browse/Browse";
import GameDetails from "../GameDetails/GameDetails";
import GamealyticalService from "../../Services/GamealyticalService";
import {CircularProgress} from "@material-ui/core";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            featuredGames: [],
            allGames: [],
            queriedGame: {},

            loadingScreen: true
        }
    }

    render() {
        return (
            <main>
                {this.state.loadingScreen === true ?
                        (
                            <CircularProgress id="loadingCircle" size={200} />
                        ) :
                        (
                            <Router>
                                <Header />

                                <Routes>
                                    <Route path="/home" element={<Home featuredGames={this.state.featuredGames} onSearch={this.loadQueriedVideoGame} />} />
                                    <Route path="/browse" element={<Browse allGames={this.state.allGames} onViewDetails={this.loadQueriedVideoGame} />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/gameDetails" element={<GameDetails queriedGame={this.state.queriedGame} />} />

                                    <Route path="" element={<Navigate to="/home" />} />
                                    <Route path="/" element={<Navigate to="/home" />} />
                                    <Route path="*" element={<Navigate to="/home" />} />
                                </Routes>

                                <Footer />
                            </Router>
                        )
                }
            </main>
        )
    }

    componentDidMount() {
        this.loadFeaturedGames();
    }

    loadFeaturedGames = () => {
        GamealyticalService.getFeaturedVideoGames()
            .then((data) => {
                this.setState({
                    featuredGames: data.data
                },
                    this.loadAllVideoGames)
            });
    }

    loadAllVideoGames = () => {
        GamealyticalService.getAllVideoGames()
            .then((data) => {
                this.setState({
                    allGames: data.data,
                    loadingScreen: false
                });
            });
    }

    loadQueriedVideoGame = async (name) => {
        await GamealyticalService.getVideoGameByName(name)
            .then((data) => {
                this.setState({
                    queriedGame: data.data
                });
                return true;
            });
    }

}

export default App;

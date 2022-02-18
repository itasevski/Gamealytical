import React from "react";
import Header from "../../Utilities/Header/Header";
import Footer from "../../Utilities/Footer/Footer";
import "./App.css";
import Home from "../Home/Home";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import About from "../About/About";
import Browse from "../Browse/Browse";
import GameDetails from "../GameDetails/GameDetails";

const App = () => {

    return (
        <main>
            <Router>
                <Header />

                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/browse" element={<Browse />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gameDetails" element={<GameDetails />} />

                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>

                <Footer />
            </Router>
        </main>
    )

}

export default App;

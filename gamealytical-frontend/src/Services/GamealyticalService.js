import AxiosGamealytical from "../Utilities/AxiosHttpClient/AxiosHttpClient";

const GamealyticalService = {
    getAllVideoGames: () => {
        return AxiosGamealytical.get("/api/gamealytical");
    },
    getVideoGameByName: (name) => {
        return AxiosGamealytical.get(`/api/gamealytical/find?name=${name}`);
    },
    getFeaturedVideoGames: () => {
        return AxiosGamealytical.get("/api/gamealytical/featured");
    }
}

export default GamealyticalService;
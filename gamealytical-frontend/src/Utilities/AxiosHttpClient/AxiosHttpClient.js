import axios from "axios";

const AxiosGamealytical = axios.create({
    baseURL: `http://localhost:9090`,
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
});

export default AxiosGamealytical;
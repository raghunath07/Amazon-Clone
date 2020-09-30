import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5001/store-clone-b2501/us-central/api' //THE API (cloud functions) URL
});

export default instance;
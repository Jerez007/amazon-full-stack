import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-b037a/us-central1/api",   //local API endpoint
});

export default instance;

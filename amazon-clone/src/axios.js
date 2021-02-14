import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-b037a.cloudfunctions.net/api", //google cloud API endpoint
  //http://localhost:5001/clone-b037a/us-central1/api
});

export default instance;


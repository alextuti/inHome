const axios = require("axios");

const instance = axios.create({
  baseURL: "https://smart-home-app-f1b76.firebaseio.com/"
});

export default instance;

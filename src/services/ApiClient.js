import axios from "axios";

const searchUrl = "https://api.spotify.com/v1/search";

const services = {
  getSpotifyAccessToken: (setToken) =>
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          btoa(
            `${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`
          ),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((response) => setToken(response.data.access_token)),

  getSearchData: (token, query, category, setResponseData) => {
    axios(searchUrl, {
      headers: { Authorization: "Bearer " + token },
      params: { q: query, type: category, limit: 24 },
      method: "GET",
    }).then((response) => {
      setResponseData({ payload: response.data });
    });
  },
};

export default services;

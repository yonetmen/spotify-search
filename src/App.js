import { useState, useEffect } from "react";
import "./App.scss";
import logo from "./images/logo.png";
import SearchForm from "./components/SearchForm";
import ItemList from "./components/ItemList";
import apiClient from "./services/ApiClient";

const { getSpotifyAccessToken } = apiClient;

const App = () => {
  const [token, setToken] = useState("");
  const [responseData, setResponseData] = useState({ payload: {} });
  const [category, setCategory] = useState("track");

  useEffect(() => {
    getSpotifyAccessToken(setToken);
  }, []);

  return (
    <div>
      <header>
        <img src={logo} alt="Logo" height="50px;" />
      </header>
      <SearchForm
        token={token}
        category={category}
        setCategory={setCategory}
        setResponseData={setResponseData}
      />
      <ItemList responseData={responseData} category={category} />
    </div>
  );
};

export default App;

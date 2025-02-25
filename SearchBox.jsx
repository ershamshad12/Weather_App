import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "7900f6d1d36aeca19d4727dd4f72a924";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Cuty Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
};

export default SearchBox;

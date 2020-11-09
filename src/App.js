import React from "react";
import Search from "/src/JavaScript/Search";
import City from "/src/JavaScript/City";
import Temperature from "/src/JavaScript/Temperature";
import Forecast from "/src/JavaScript/Forecase";
import Footer from "/src/JavaScript/Footer";

import "/src/Stylesheets/App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-wrapper">
        <div className="weather">
          <Search />
          <City />
          <Temperature />
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import "/src/Stylesheets/Search.css";

export default function Search (){
return (
<form class="form-inline" id = "search-form">
        <input
          type="City"
          class="form-control"
          placeholder="Find Your City"
          id = "find-city"
        />
        <button type="button" class="btn btn-info" id = "go-Button">Go!</button>
      </form>
      <button type="button" class="btn btn-info" id = "now-Button">Now!</button>
    );
  }
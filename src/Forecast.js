import React from "react";
import "/src/Stylesheets/Forecase.css";

export default function Forecast(){
  return (
<div class="monday">
          <div class="row" id ="forecast">
              <div class ="col-5">
                <span class="left" id ="monday">
                Monday
                </span>
              </div>
  <div class="col-3">
    <img src= "https://openweathermap.org/img/wn/10d@2x.png" id = "weather-icon"/>
  </div>  
                  <div class ="col-4"> 
                      <span class="right">
                  <strong><a id ="temp-max-monday"> 20</a>°C </strong>/<a id ="temp-min-monday">12</a>°C</span>
                  </div>
                </div>
              </div>
        
          <div class="tuesday">
            <div class="row">
            <div class ="col-5">
              <span class="left">
              Tuesday
              </span>
            </div>
<div class="col-3">
  <img src= "https://openweathermap.org/img/wn/10d@2x.png" id = "weather-icon"/>
</div>  
                <div class ="col-4"> 
                    <span class="right">
                <strong> 20°C </strong>/12°C</span>
                </div>
              </div>
            </div>
              <div class="wednesday">
                <div class="row">
                <div class ="col-5">
                  <span class="left">
              Wednesday
                  </span>
                </div>
                <div class ="col-3">
                  <img src= "https://openweathermap.org/img/wn/10d@2x.png" id = "weather-icon"/>
              </div> 
              <div class ="col-4">
                  <span class="right">
              <strong>20°C</strong>/12°C</span>
              </div>
                </div>
              </div>
              <div class="thursday">
                <div class="row">
              <div class ="col-5">
                <span class="left">
            Thursday
                </span>
              </div>
              <div class ="col-3">
                <img src= "https://openweathermap.org/img/wn/10d@2x.png" id = "weather-icon"/>
            </div>  
            <div class ="col-4"> 
                <span class="right">
            <strong>17°C</strong>/12°C</span>
            </div>
          </div>
        </div>
        <div class="friday">
          <div class ="row">
          <div class ="col-5">
            <span class="left">
            Friday 
            </span>
          </div>
          <div class ="col-3">
            <img src= "https://openweathermap.org/img/wn/10d@2x.png" id = "weather-icon"/>
          </div>  
              <div class ="col-4">
                <span class="right">
              <strong>16°C</strong>/10°C</span>
                </div>  
              </div>
            </div>
            </div>
          </div> );
  }
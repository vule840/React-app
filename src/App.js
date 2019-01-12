import React from "react";

import Titles from "./components/Titles"

import Form from "./components/Form"

import Weather from "./components/Weather"

const API_KEY = '58ee7a14e4dc2a1511772f06678edb35';




class App extends React.Component{

  getWeather = async () => {
    const api_call = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${API_KEY}")
    const data = await api_call.json();
    console.log(data);
  }
  yo(){
    console.log('sdfsdfsdf')
  }

  render(){
      return (

          <div>
              <h2>sfdsfds</h2>

              <h3 onClick={this.getWeather}>dsfsdf</h3>
              <Titles></Titles>
              <Form getWeather={this.getWeather}></Form>
              <Weather></Weather>
          </div>

        );
  }

};

export default App;
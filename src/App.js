import React from "react";

import Titles from "./components/Titles"

import Form from "./components/Form"

import Weather from "./components/Weather"

const API_KEY = '58ee7a14e4dc2a1511772f06678edb35';


 //const string = 'first line\n' + 'second line' 

class App extends React.Component{

  //od v 16 React nemoraš više raditi contructor i sve da zadaš state
  state = {
        ribac: undefined,
          temperature: undefined,
          humidity: undefined,
          country: undefined,
          city: undefined,
          description: undefined,
          wind: undefined,
          error: "",
        
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //Tu su backticks, u njih možeš staviti template varible ``
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api_call.json();
    

    //treba ti 
    if(city && country){
      console.log(data);
        //nikad nemoj korisiti this.state, jer onda mjenjaš sam state
        this.setState({
          temperature: Math.floor(data.main.temp -273) ,
          humidity: data.main.humidity,
          country: data.sys.country,
          city: data.name,
          wind: data.wind.speed,
          description: data.weather[0].description,
          error: ""
        })
    }else{

       this.setState({
          temperature: undefined,
          humidity: undefined,
          country: undefined,
          city: undefined,
          wind: undefined,
          description: undefined,
          error: "Please enter the value"
        })
    }
    
  }
  yo(){
    return <p>yooooooooooo</p>
  }


  render(){
      return (

          <div>
             <div className="wrapper">
               <div className="main">
                 <div className="container">
                   <div className="row">
                    <div className="col-md-5 title-container">
                           <Titles></Titles>
                    </div>
                      <div className="col-md-7 form-container">
                          <Form getWeather={this.getWeather}></Form>
                          <Weather wind={this.state.wind} yo={this.state.ribac} error={this.state.error} humidity={this.state.humidity} country={this.state.country} description={this.state.description} city={this.state.city} temperature={this.state.temperature} yo={this.yo}></Weather>
                      </div>
                   </div>
                 </div>
               </div>
             </div>
          </div>

        );
  }

};

         
              

export default App;
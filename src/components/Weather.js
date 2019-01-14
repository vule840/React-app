import React from "react";


/*Imaš dvije vrste Components, Class Component vs Functional Component, functional je jednostavnije, samo funkcija za renderiranje*/


const Weather = props => (
 
           <div>
            {/*A ovaj && di je kao if statment na kraju se pokaže ovaj paragraf p*/}
           {props.ribac && <p>Ribac: {props.ribac}</p>} 


            {props.city && props.country && <p>Location: {props.city}, {props.country}</p> }

            {props.temperature && <p>Temperature: {props.temperature}</p> }

            {props.description && <p>Weather: {props.description}</p> }

             {props.humidity && <p>Humidity: {props.humidity}</p> }

             {props.wind && <p>Wind: {props.wind}</p>}

              {props.error && <p>{props.error}</p> }

            {/* <h2 onClick={this.props.yo}>Weather</h2>
              <h3>{this.props.temperature}</h3>
              <h3>{this.props.city}</h3>
              <h3>{this.props.weather}</h3>
              <h3>{this.props.country}</h3>*/} 
          </div>

    )


/*
class Weather extends React.Component{
  render(){
      return (

          <div>
            {/*A ovaj && di je kao if statment na kraju se pokaže ovaj paragraf p}*/
        /*this.props.ribac && <p>Ribac: {this.props.ribac}</p>


            {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }

            {this.props.temperature && <p>Temperature: {this.props.temperature}</p> }

            {this.props.description && <p>Weather: {this.props.description}</p> }

             {this.props.humidity && <p>Humidity: {this.props.humidity}</p> }

             {this.props.wind && <p>Wind: {this.props.wind}</p>}

              {this.props.error && <p>{this.props.error}</p> }

          </div>

        );
  }

};*/

export default Weather;
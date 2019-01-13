import React from "react";


class Weather extends React.Component{
  render(){
      return (

          <div>
          	{/*A ovaj && di je kao if statment na kraju se pokaže ovaj paragraf p*/}

          	{this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }

          	{this.props.temperature && <p>Temperature: {this.props.temperature}</p> }

          	{this.props.description && <p>Weather: {this.props.description}</p> }

          	 {this.props.humidity && <p>Humidity: {this.props.humidity}</p> }

          	  {this.props.error && <p>{this.props.error}</p> }

            {/* <h2 onClick={this.props.yo}>Weather</h2>
              <h3>{this.props.temperature}</h3>
              <h3>{this.props.city}</h3>
              <h3>{this.props.weather}</h3>
              <h3>{this.props.country}</h3>*/} 
          </div>

        );
  }

};

export default Weather;
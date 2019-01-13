import React from "react";


class Form extends React.Component{
  render(){
      return (

          <form onSubmit={this.props.getWeather}>
          		<input name="city" type="text" placeholder="City..."/>
          		<input name="country" type="text" placeholder="Country..."/>
          		<button>Get Weather</button>
          </form>

        );
  }

};

export default Form;
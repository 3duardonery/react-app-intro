import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  handlerInputChange = e => {
    console.log(e.target.value);
    this.setState({ newTech: e.target.value });
  }

  handlerSubmit = e => {
    e.preventDefault();
    this.setState(
      { 
        techs: [...this.state.techs, this.state.newTech],
        newTech: ''
      });
  }
    

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
         <ul>
          {this.state.techs.map((tech, idx) => <li key={idx}>{tech}</li>)}
        </ul>
        <input type="text" 
        onChange={this.handlerInputChange}
        value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
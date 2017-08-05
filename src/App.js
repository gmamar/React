import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      comp:[
        {name:'george'}
      ],
      id:"20"
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <InputFiled test= {this.state.comp[0].name} />
          
          <h2>Welcome to Company names</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class InputFiled extends Component {

handleSubmit = e =>{
  e.preventDefault()
 console.log(e.target.value);
  
}

  render() {
    
    
    return (
      <form >
        Your name<br/>
        <input type='text' onChange={e => this.handleSubmit(e)} /> 
        
        <button onClick={this.handleSubmit}>Submit</button>
        <div>{this.props.test}</div>
        {console.log(this.props.test)}
        
      </form>
      
      
    );
  }
}

export default App;

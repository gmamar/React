import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      comp:[
        {
          name:'george',
          company: "test"
        },
        {
          name:'asdf',
          company: "tsdfest"
        }
      ],
      id:"0"
    }
  }

handleSubmit = e =>{
  const current = this.state.comp.slice(1, this.state.comp.id);
  console.log (current);
  console.log (this.state.comp);
  e.preventDefault()

 console.log(e.target.value);
  this.setState({name: e.target.value} )
}

  render() {
    const moves = this.state.comp.map((item, index) => {
      
      return (
        <li key={index}>
          <a href="#" >{item}</a>
        </li>
      );
    });

    return (
      <div className="App">
        <div className="App-header">
          <InputFiled test= {this.state.comp[0].name} onChange = { e => this.handleSubmit(e)} />
          
          <h2>Welcome to Company names</h2>
        </div>
        <p className="App-intro">
          To get started.
          enter your name,the name of company.
        </p>
        {this.state.comp.map(list =>
            	<List
                  id={list.id}
                  key={list.id}
                  title={list.name}
                />
            )}
        
      </div>
    );
  }
}

class InputFiled extends Component {


  render() {
    
    
    return (
      <form >
        <div>
        <h3>Enter your data</h3>
        </div>
        <input type='text' onChange={this.props.onChange} />@
        <input type='text' onChange={this.props.onchange} />
        <button onClick={this.handleSubmit}>Submit</button>
        
        
        
      </form>
      
      
    );
  }
}

class List extends Component {
  render(){
    return(
  <h1>{this.props.title}</h1>
    )
  }
}

export default App;

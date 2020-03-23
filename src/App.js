import React,{ Component } from 'react';
import axios from 'axios';

import Card from './components/Card';


import './App.css';

class App extends Component{

  state ={
    advice: '',
    error: false
  }

  componentDidMount(){
     this.fetchAdvice();
  };

  fetchAdvice = () => {
    this.setState({ loading: true });
    axios.get('https://api.adviceslip.com/advice')
    .then( response => {
      const { advice } = response.data.slip
      this.setState({ advice: advice })
      console.log(advice)
    })
    .catch( error => {
      console.log(error);
      this.setState({ error : true })
    });
  };

  render(){
    return (
      <div className='App'>
             <Card 
             advice={this.state.advice}
             clicked={this.fetchAdvice}
             error={this.state.error}/>
      </div>
    );
  }
};

export default App;
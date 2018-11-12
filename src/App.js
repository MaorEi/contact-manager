import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Contact name="Maor Eitan" email = "maoreitan@gmail.com" phone = "0508714102" />
        <Contact name="Rita" email = "RitaBl@gmail.com" phone = "3454555444" />
      </div>
    );
  }
}

export default App;

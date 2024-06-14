import './App.css';

//To import Class Based Component type RCE as shortcut to get a boilerplate code
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5}/>
      </div>
    )
  }
}

export default App

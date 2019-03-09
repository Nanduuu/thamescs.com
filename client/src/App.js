import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Frame from './Components/Frame';
import 'antd/dist/antd.css';
import WebFont from 'webfontloader';
import {BrowserRouter} from 'react-router-dom';
import {Route , Switch, Redirect} from 'react-router';
import Logo from './Components/Logo';


const fontStyle = {

  fontFamily : " 'Titillium Web','Chinese Quote'",
  
  height:"100%"
}

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});


class App extends Component {
  render() {
    return (
        
        <div className="App" style={fontStyle}>
          <Logo/>
          <Frame/> 
        </div>
      
    );
  }
}


export default App;

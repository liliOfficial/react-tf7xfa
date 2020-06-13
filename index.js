import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';

import Unsplash, { toJson } from "unsplash-js";
import Main from "./components/main";

class App extends Component {

  render() {   
    return (
      <div>
        <Main />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

import React, { Component } from 'react';
import './App.css';
import Countdown from './components/Countdown';

class App extends Component {
  render() {
    return (
      <section className="content">
        <div className="container-fluid">
          <div className="row clearfix">
            <Countdown />
          </div>
        </div>
      </section>
    );
  }
}

export default App;

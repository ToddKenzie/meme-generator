import React, { Component } from 'react';
import './App.css';
import ChangeText from '../components/ChangeText/ChangeText';
import MemeInputPanel from '../components/MemeInputPanel/MemeInputPanel';

class App extends Component {
  constructor() {
    super()
    this.state = {
      topText: 'This is your top text',
      bottomText: 'This is your bottom text',
      images: [

      ]

    }
    
  }
  handleTopChange = event => {
    this.setState({topText: event.target.value});
  }
  handleBottomChange = event => {
    this.setState({bottomText: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <MemeInputPanel
          topText={this.state.topText}
          bottomText={this.state.bottomText}
          handleTopChange={this.handleTopChange}
          handleBottomChange={this.handleBottomChange} />
      </div>
    );
  }
}

export default App;

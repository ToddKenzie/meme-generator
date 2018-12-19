import React, { Component } from 'react';
import './App.css';
import MemeInputPanel from '../components/MemeInputPanel/MemeInputPanel';
import DisplayMeme from '../components/DisplayMeme/DisplayMeme';
import ThumbnailPicker from '../components/ThumbnailPicker/ThumbnailPicker';
import '../'

class App extends Component {
  constructor() {
    super()
    this.state = {
      topText: 'This is your top text',
      bottomText: 'This is your bottom text',
      imageSelection: 0,
      images: [
        {id: 0, link: './images/headache.jpg'},
        {id: 1, link: './images/Joker.png'},
        {id: 2, link: './images/maury.jpg'},
        {id: 3, link: './images/take-my-money.jpg'},
        {id: 4, link: './images/thinking.jpg'}
      ]

    }
    
  }
  handleTopChange = event => {
    this.setState({topText: event.target.value});
  }
  handleBottomChange = event => {
    this.setState({bottomText: event.target.value});
  }
  changeImageSelection = (value) => {
    this.setState({imageSelection: value})
  }
  updateImage = () => {
    let imageItem = this.state.images[this.state.imageSelection];
    return imageItem.link;
  }
  render() {
    return (
      <div className="App">
        <ThumbnailPicker
          changeImageSelection={this.changeImageSelection}
          imageSelection={this.state.imageSelection}
          images={this.state.images} />
        <DisplayMeme
          updateImage = {this.updateImage}
          topText={this.state.topText}
          bottomText={this.state.bottomText} />
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

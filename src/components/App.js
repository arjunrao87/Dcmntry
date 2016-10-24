import React from 'react';
import '../css/App.css';
import SearchBar from './SearchBar';
import GifList from './GifList';
import request from 'superagent';
import GifModal from './GifModal';

class App extends React.Component {

  constructor( props ){
    super( props );
    this.state = {
      gifs: [],
      selectedGif: null,
      modalIsOpen: false
    }
    this.handleTermChange = this.handleTermChange.bind( this );
  }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }


  openModal(gif) {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    });
  }

  render() {
    return (
        <div>
          <div id="logo">Dcmntry</div>
          <SearchBar onTermChange={this.handleTermChange} />
           <GifList gifs={this.state.gifs} onGifSelect={selectedGif => this.openModal(selectedGif) } />
           <GifModal modalIsOpen={this.state.modalIsOpen}
                    selectedGif={this.state.selectedGif}
                    onRequestClose={ () => this.closeModal() } />
        </div>
    );
  }
}


export default App;
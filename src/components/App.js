import React from 'react';
import '../css/App.css';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import request from 'superagent';
import VideoModal from './VideoModal';

class App extends React.Component {

  constructor( props ){
    super( props );
    this.state = {
      videos: [],
      selectedVideo: null,
      modalIsOpen: false
    }
    this.handleTermChange = this.handleTermChange.bind( this );
  }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
    request.get(url, (err, res) => {
      this.setState({ videos: res.body.data })
    });
  }


  openModal(video) {
    this.setState({
      modalIsOpen: true,
      selectedVideo: video
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedVideo: null
    });
  }

  render() {
    return (
        <div>
          <div id="logo">Dcmntry</div>
          <SearchBar onTermChange={this.handleTermChange} />
           <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.openModal(selectedVideo) } />
           <VideoModal modalIsOpen={this.state.modalIsOpen}
                    selectedVideo={this.state.selectedVideo}
                    onRequestClose={ () => this.closeModal() } />
        </div>
    );
  }
}


export default App;
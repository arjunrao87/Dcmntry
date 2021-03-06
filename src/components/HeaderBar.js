import React, {Component} from 'react';
import SearchBar from './SearchBar';
import request from 'superagent';

class HeaderBar extends Component{
	constructor( props ){
		super( props );
		this.state = {
			videos: []
		}
		this.handleTermChange = this.handleTermChange.bind( this );
		console.log( "Initializing HeaderBar" );
	}

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/videos/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
    request.get(url, (err, res) => {
      this.setState({ videos: res.body.data })
    });
  }

	render(){
		return (
			<div>
				<div id="logo">Dcmntry</div>
				<SearchBar onTermChange={this.handleTermChange} />
			</div>
		);
	}
}

export default HeaderBar;
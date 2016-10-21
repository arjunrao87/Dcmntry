import React from 'react';

const SearchBar = React.createClass({
	render(){
		return (
			<div>
				<nav className="navbar navbar-default">
				  <div className="container-fluid">
				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <form className="navbar-form navbar-center">
				        <div className="form-group">
				          <input type="text" className="form-control" placeholder="Search"/>
				        </div>
				        <button type="submit" className="btn btn-default">Submit</button>
				      </form>
				    </div>
				  </div>
				</nav>
			</div>
		);
	}
});

export default SearchBar;
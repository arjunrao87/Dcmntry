import React from 'react';
import SingleResultGrid from './SingleResultGrid';

const ResultsGrid = React.createClass({
	render(){     	
		var rows = createGrid();
		return(
			<div class="container">
			    <div class="row">
			    	{rows}
				</div>
			</div>
		)
	}
});

function createGrid(){
	var rows = [];
	for (var i=0; i <40; i++) {
		rows.push(	<SingleResultGrid/> );
    }			
    return rows;
}

export default ResultsGrid;
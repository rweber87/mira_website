import React from 'react';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import {GridTile} from 'material-ui/GridList';
import Grid from 'material-ui/Grid';


function Project(props) {
		return(
			<div className="col-1-4">
				<img src={props.project.img} alt={props.project.title} />        
			</div>
		)
};

export default Project;
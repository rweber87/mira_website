import React from 'react';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import {GridTile} from 'material-ui/GridList';
import Grid from 'material-ui/Grid';


function Project(props) {
		return(
			<div className="card">
				<img className="project-img" src={props.project.img} alt={props.project.title} height={300} width={325}/>
				<div className="info-container">
					<span className="project-text title"><br/><br/><div id="project-text-text">{props.project.title}<br/>{props.project.subtitle}</div></span>
				</div>
			</div>
		)
};

export default Project;
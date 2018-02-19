import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Project from './Project.js'
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import img1 from './images/Haufe_TaschenguideAktion_1.jpg';
import img2 from './images/Book3.jpg';
import img3 from './images/Cover_Landingpage.jpg';
import img4 from './images/Kloepfer_Sortimentsbroschuere_Titel.jpg';



class ListProjects extends Component {

	constructor(props) {
		super(props)

		this.state = {
			projects: [
				{
					title: "Aus der Asche",
					subtitle: "Book by Wolfgang Bilinski",
					img: img1
				},
				{
					title: "Aus der Asche",
					subtitle: "Book by Wolfgang Bilinski",
					img: img2
				},
				{
					title: "Aus der Asche",
					subtitle: "Book by Wolfgang Bilinski",
					img: img3
				},
				{
					title: "Theresa Cosmetic Company",
					subtitle: "Brochures",
					img: img4
				}
			]    
		};
	}

	render () {
		const projects = this.state.projects.map ( project => 
				<Project project={project}/>
			)

		const styles = {
				  root: {
				    display: 'flex',
				    flexWrap: 'wrap',
				    justifyContent: 'space-around',
				  },
				  gridList: {
				    width: 500,
				    height: 450,
				    overflowY: 'auto',
				  },
				};
		return(
			
			<div className="container">
				{projects}
			</div>
			
		);
	}
}

export default ListProjects;


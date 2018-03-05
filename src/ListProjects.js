import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Project from './Project.js';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import img1 from './images/Cover_Landingpage.jpg';
import img2 from './images/Haufe_Landingpage.jpg';
import img4 from './images/Kloepfer_Sortimentsbroschuere_Titel.jpg';
import img5 from './images/Theresa_KompositionFINAL.jpg';
import img6 from './images/Fitz_landingpage2.jpg';
import img7 from './images/BayLGB_Landingpage.jpg';



class ListProjects extends Component {

	constructor(props) {
		super(props)

		this.state = {
			projects: [
				{
					title: "print",
					subtitle: "Book by Wolfgang Bilinski",
					img: img1,
					modal: [img1, img2, img4, img5, img6]
				},
				{
					title: "print",
					subtitle: "book covers Aus der Ashche",
					img: img2,
					modal: [img1, img2, img4, img5, img6]
				},
				{
					title: "logo",
					subtitle: "Theresa company logo design",
					img: img5,
					modal: [img1, img2, img4, img5, img6]
				},
				{
					title: "print",
					subtitle: "brochures for Klöpfer lumber company",
					img: img4,
					modal: [img1, img2, img4, img5, img6]
				},
				{
					title: "print",
					subtitle: "Michael Fitz CD booklet",
					img: img6,
					modal: [img1, img2, img4, img5, img6]
				},
				{
					title: "print",
					subtitle: "Bay LGB design",
					img: img7,
					modal: [img1, img2, img4, img5, img6]
				}
			]    
		};
	}

	render () {
		const projects = this.state.projects.map ( project => 
				<Project project={project}/>
			)
		return(
			<div className="content-container">
				<div className="left-menu-column">
					<li>all</li>
					<li>print</li>
					<li>digital</li>
					<li>logo</li>
					<li>others</li>
				</div>
				<div className="image-row container">
					{projects}
				</div>
			</div>
		);
	}
}

export default ListProjects;


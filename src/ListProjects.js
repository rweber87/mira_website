import React, { Component } from 'react';
import Project from './Project.js';
import projectObject from './projectObject.js'; 

class ListProjects extends Component {

	constructor(props) {
		super(props)

		this.state = {
			projects: projectObject,
			selectedFilter: "all",
			style: null  
		};
	}

	allCategoryFilter = () => {
		this.setState({ projects: projectObject, selectedFilter: "all" })
	};

	printCategoryFilter = () => {
		this.setState({ projects: projectObject.filter ( project => project.title.includes("print") ), selectedFilter: "print" })
	};

	digitalCategoryFilter = () => {
		this.setState({ projects: projectObject.filter ( project => project.title.includes("digital") ), selectedFilter: "digital" })
	};

	logoCategoryFilter = () => {
		this.setState({ projects: projectObject.filter ( project => project.title.includes("logo") ), selectedFilter: "logo" })
	};

	otherCategoryFilter = () => {
		this.setState({ projects: projectObject.filter ( project => project.title.includes("other") ), selectedFilter: "other" })
	};

	render () {
		const projects = this.state.projects.map ( project => 
				<Project project={project} key={project.id} />
			)

		var selectedStyle = {
								fontStyle: "italic",
								fontSize: "13px",
							}
		return(
			<div className="content-container">
				<div className="left-menu-column">
					<li style={this.state.selectedFilter === "all" ? selectedStyle : null} onClick={this.allCategoryFilter} >all</li>
					<li style={this.state.selectedFilter === "print" ? selectedStyle : null} onClick={this.printCategoryFilter} >print</li>
					{/*<li style={this.state.selectedFilter === "digital" ? selectedStyle : null} onClick={this.digitalCategoryFilter} >digital</li>*/}
					<li style={this.state.selectedFilter === "logo" ? selectedStyle : null} onClick={this.logoCategoryFilter} >logo</li>
					<li style={this.state.selectedFilter === "other" ? selectedStyle : null} onClick={this.otherCategoryFilter} >other</li>
				</div>
				<div className="image-row container">
					{projects}
				</div>
			</div>
		);
	}
}

export default ListProjects;


import React, { Component } from 'react';
import Project from './Project.js';
import projectObject from './projectObject.js'; 

class ListProjects extends Component {

	constructor(props) {
		super(props)

		this.state = {
			projects: projectObject   
		};
	}

	allCategoryFilter = () => {
		this.setState({ projects: projectObject })
	};

	printCategoryFilter = () => {
		this.setState({ projects: projectObject.filter ( project => project.title.includes("print") ) })
	};

	digitalCategoryFilter = () => {
		this.setState({ projects: projectObject.filter ( project => project.title.includes("digital") ) })
	};

	logoCategoryFilter = () => {
		this.setState({ projects: projectObject.filter ( project => project.title.includes("logo") ) })
	};

	otherCategoryFilter = () => {
		this.setState({ projects: projectObject.filter ( project => project.title.includes("other") ) })
	};

	render () {
		const projects = this.state.projects.map ( project => 
				<Project project={project}/>
			)
		return(
			<div className="content-container">
				<div className="left-menu-column">
					<li onClick={this.allCategoryFilter} >all</li>
					<li onClick={this.printCategoryFilter} >print</li>
					<li onClick={this.digitalCategoryFilter} >digital</li>
					<li onClick={this.logoCategoryFilter} >logo</li>
					<li onClick={this.otherCategoryFilter} >others</li>
				</div>
				<div className="image-row container">
					{projects}
				</div>
			</div>
		);
	}
}

export default ListProjects;


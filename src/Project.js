import React, { Component } from 'react';
import Modal from 'material-ui/Modal';

class Project extends Component {

	constructor(props) {
		super(props)

		this.state = {
			open: false
		}
	}

	handleOpen = () => {
	    this.setState({ open: true });
	};

	handleClose = () => {
	    this.setState({ open: false });
	};

	render () {

		return (
			<div className="project-card" >
				<img className="project-img" src={this.props.project.img} alt={this.props.project.title} height={300} width={350} />
					<div className="project-text" onClick={this.handleOpen} >
						<span><b>{this.props.project.title}</b><br/>{this.props.project.subtitle}</span>
					</div>
				<Modal
			          aria-labelledby="simple-modal-title"
			          aria-describedby="simple-modal-description"
			          open={this.state.open}
			          onClose={this.handleClose}
			        >
			    	<img src={this.props.project.modal[0]} />
			        </Modal>
			</div>
		)
	}
};

export default Project;
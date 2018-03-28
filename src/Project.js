import React, { Component } from 'react';
import Modal from 'react-modal';

class Project extends Component {

	constructor(props) {
		super(props)

		this.state = {
			showModal: false,
			currentImg: 0,
			imgCarousel: this.props.project.modal
		}
	}

	handleOpen = () => {
		console.log(this.state)
	    this.setState({ showModal: true });
	};

	handleClose = () => {
	    this.setState({ showModal: false });
	};

	leftImgButton = () => {
		if(this.state.currentImg === 0) {
			this.setState({ currentImg: this.state.imgCarousel.length - 1 })
		} else {
			this.setState({ currentImg: this.state.currentImg - 1 })
		}	
	};

	rightImgButton = () => {
		if(this.state.currentImg === this.state.imgCarousel.length - 1) {
			this.setState({ currentImg: 0 }); 
		} else {
			this.setState({ currentImg: this.state.currentImg + 1 })
		}
	};

	render () {
		var imgPath = `${this.props.project.modal[this.state.currentImg]}`
		var imgOrVideo = imgPath.includes("jpg") ? <img className="project-modal-img" src={this.props.project.modal[this.state.currentImg]} alt={this.props.project.title} onClick={this.handleOpen} height={"100%"} width={"100%"} /> : <video src={this.props.project.modal[this.state.currentImg]} alt={this.props.project.title} onClick={this.handleOpen} height={"100%"} width={"100%"} type="video/mp4" autoplay="autoplay" controls ></video>
			
		return (
			<div className="project-card" >
				<img className="project-img" src={this.props.project.img} alt={this.props.project.title} onClick={this.handleOpen} height={"100%"} width={"100%"} />
					<div className="project-text" onClick={this.handleOpen} >
						<span><b>{this.props.project.title}</b><br/><br/>{this.props.project.subtitle}</span>
					</div>
				<Modal
					  className="project-modal"
			          aria-labelledby="simple-modal-title"
			          aria-describedby="simple-modal-description"
			          isOpen={this.state.showModal}
			          onClose={this.handleClose}
			          shouldCloseOnEsc={true}
			          style={"{overlay: {backgroundColor: 'papayawhip'}"}
			        >
			    	<div className="project-modal-card" >
		    			<div className="close-button-1" onClick={this.handleClose}></div>
		    			<div className="close-button-2" onClick={this.handleClose}></div>
						{imgOrVideo}
						<div className="button-upper-left" onClick={this.leftImgButton}></div>
		    			<div className="button-lower-left" onClick={this.leftImgButton}></div>
		    			<div className="button-upper-right" onClick={this.rightImgButton}></div>
		    			<div className="button-lower-right" onClick={this.rightImgButton}></div>
						<div className="project-modal-text" >
							<p><b>{this.props.project.title}</b><br/>{this.props.project.modal_text}</p>
						</div>
					</div>
			        </Modal>
			</div>
		)
	}
};

export default Project;
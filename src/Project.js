import React, { Component } from 'react';
import Modal from 'material-ui/Modal';

class Project extends Component {

	constructor(props) {
		super(props)

		this.state = {
			open: false,
			currentImg: 0,
			imgCarousel: this.props.project.modal
		}
	}

	handleOpen = () => {
	    this.setState({ open: true });
	};

	handleClose = () => {
	    this.setState({ open: false });
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
						<span><b>{this.props.project.title}</b><br/>{this.props.project.subtitle}</span>
					</div>
				<Modal
					  className="project-modal"
			          aria-labelledby="simple-modal-title"
			          aria-describedby="simple-modal-description"
			          open={this.state.open}
			          onClose={this.handleClose}
			        >
			    	<div className="project-modal-card" >
						{imgOrVideo}
							<div className="button-upper-left" onClick={this.leftImgButton}></div>
			    			<div className="button-lower-left" onClick={this.leftImgButton}></div>
			    			<div className="button-upper-right" onClick={this.rightImgButton}></div>
			    			<div className="button-lower-right" onClick={this.rightImgButton}></div>
							<div className="project-modal-text" >
								<span><b>{this.props.project.title}</b><br/>{this.props.project.modal_text}</span>
							</div>
					</div>
			        </Modal>
			</div>
		)
	}
};

export default Project;
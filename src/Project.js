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

	onLeftKeyPress = (event) => {
  		console.log(event.keyCode);
  //       if (event.key === 37) {
		// 	this.setState({ currentImg: this.state.imgCarousel.length - 1 })
		// } else {
		// 	this.setState({ currentImg: this.state.currentImg - 1 })
		// }
    };

	rightImgButton = (event) => {
		if(this.state.currentImg === this.state.imgCarousel.length - 1) {
			this.setState({ currentImg: 0 }); 
		} else {
			this.setState({ currentImg: this.state.currentImg + 1 })
		}
	};

	onRightKeyPress = (event) => {
        console.log(event.keyCode)
        // if (event.key === 39) {
        //     this.setState({ value: event.target.value })
        // }
    };

	handleCloseModal = () => {
    	this.setState({ showModal: false });
  	};

	render () {
		var imgPath = `${this.props.project.modal[this.state.currentImg]}`
		var imgOrVideo = imgPath.includes("jpg") ? <img className="project-modal-img" src={this.props.project.modal[this.state.currentImg]} alt={this.props.project.title} onClick={this.handleOpen} height={"100%"} width={"100%"} /> : <video src={this.props.project.modal[this.state.currentImg]} alt={this.props.project.title} onClick={this.handleOpen} height={"100%"} width={"100%"} type="video/mp4" autoplay="autoPlay" controls ></video>
		var upperLeftArrow = this.props.project.modal.length > 1 ? <div className="button-upper-left" onClick={this.leftImgButton}></div> : <div className="button-upper-left-no-show" ></div>
		var lowerLeftArrow = this.props.project.modal.length > 1 ? <div className="button-lower-left" onClick={this.leftImgButton}></div> : <div className="button-lower-left-no-show" ></div>
		var upperRightArrow = this.props.project.modal.length > 1 ? <div className="button-upper-right" onClick={this.rightImgButton}></div> : null
		var lowerRightArrow = this.props.project.modal.length > 1 ? <div className="button-lower-right" onClick={this.rightImgButton}></div> : null
		return (
			<div className="project-card" >
				<img className="project-img" src={this.props.project.img} alt={this.props.project.title} onClick={this.handleOpen} height={"100%"} width={"100%"} />
					<div className="project-text" onClick={this.handleOpen} >
						<div className="project-modal-text-title">{this.props.project.title}</div>
						<div className="project-modal-text-name">{this.props.project.subtitle}</div>
					</div>
				<Modal
					  className="project-modal"
			          aria-labelledby="simple-modal-title"
			          aria-describedby="simple-modal-description"
			          isOpen={this.state.showModal}
			          onClose={this.handleClose}
			          shouldCloseOnEsc={true}
			          onRequestClose={this.handleCloseModal}
			          style={"{overlay: {backgroundColor: 'papayawhip'}"}
			          leftKey={this.onLeftKeyPress}
			          rightKey={this.onRightKeyPress}
			        >
			    	<div className="project-modal-card" >
						{imgOrVideo}
		    			<div className="close-button-1" onClick={this.handleClose}></div>
		    			<div className="close-button-2" onClick={this.handleClose}></div>
						{upperLeftArrow}
		    			{lowerLeftArrow}
		    			{upperRightArrow}
		    			{lowerRightArrow}								    			
						<div className="project-modal-text" >
							<div className="inner-modal-text-title">{this.props.project.title}</div><div className="inner-modal-text-subtitle">&nbsp;&nbsp;|&nbsp; {this.props.project.subtitle}</div>
							<div className="inner-modal-text-name"><br/>{this.props.project.modal_text}</div>
						</div>
					</div>
			        </Modal>
			</div>
		)
	}
};

export default Project;
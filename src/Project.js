import React, { Component } from 'react';
import ReactModal from 'react-modal';

class Project extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			currentImg: 0,
			imgCarousel: this.props.project.modal
		}
	}

	handleOpen = () => {
	    this.setState({ showModal: true });
	}

	handleClose = () => {
	    this.setState({ showModal: false });
	}

	leftImgButton = () => {
		if(this.state.currentImg === 0) {
			this.setState({ currentImg: this.state.imgCarousel.length - 1 })
		} else {
			this.setState({ currentImg: this.state.currentImg - 1 })
		}	
	}

	rightImgButton = (event) => {
		if(this.state.currentImg === this.state.imgCarousel.length - 1) {
			this.setState({ currentImg: 0 }); 
		} else {
			this.setState({ currentImg: this.state.currentImg + 1 })
		}
	}

    togglePlay = () => {
    	const videoPlayer = document.querySelector('#video-player');
		videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause();
    }


	render () {
		var mobileCloseButton = window.innerWidth < 500 ? <button className="mobile-close-button" onClick={this.handleClose}>x</button> : null
		var imgPath = `${this.props.project.modal[this.state.currentImg]}`
		var imgOrVideo = imgPath.includes("jpg") ? <img className="project-modal-img" src={this.props.project.modal[this.state.currentImg]} alt={this.props.project.title} onClick={this.handleOpen} height={"100%"} width={"100%"} /> : <video id="video-player" src={this.props.project.modal[this.state.currentImg]} alt={this.props.project.title} onClick={this.handleOpen} height={"100%"} width={"100%"} type="video/mp4" autoplay="autoPlay"></video>
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
				<ReactModal
					  className={"project-modal"}
					  overlayClassName={"project-modal-overlay"}
			          aria-labelledby="simple-modal-title"
			          aria-describedby="simple-modal-description"
			          isOpen={this.state.showModal}
			          shouldCloseOnEsc={true}
			          onRequestClose={this.handleClose}
			          shouldCloseOnOverlayClick={true}
			          leftKey={this.onLeftKeyPress}
			          rightKey={this.onRightKeyPress}
			          ariaHideApp={false}			       
			        >
			    	<div className="project-modal-card" >
			    		{mobileCloseButton}
						{imgOrVideo}
						{upperLeftArrow}
		    			{lowerLeftArrow}
		    			{upperRightArrow}
		    			{lowerRightArrow}								    			
						<div className="inner-modal-text">
							<div><div className="inner-modal-text-title">{this.props.project.title}&nbsp;&nbsp;<span className="desc">|&nbsp;&nbsp;{this.props.project.subtitle}</span></div></div>
							<div className="inner-modal-description">{this.props.project.modal_text}</div>
							{/*<button style={{"width": "100%"}} onClick={this.togglePlay}>Play/Pause</button>*/}
						</div>
					</div>
			    </ReactModal>
			</div>
		)
	}
};

export default Project;
import React from 'react';
import headshot from './images/mira_headshot2.jpg';

function About() {

	return (
		<div className="content-container">
			<div className="left-menu-column">
				<li>Fun Facts:</li>
				<li>- love cats, not in a weird way</li>
				<li>- fluent in bavarian and pig latin</li>
				<li>- night owl</li>
				<li>- did a triathlon and didn't enjoy &nbsp;&nbsp;the swimming part of it</li>
				<li>- love eating avocado</li>
				<li>- 3 older siblings</li>
			</div>
			<div className="right-menu-column" >
				<div className="img-window">
					<img alt={""} id={"headshot"} src={headshot} />
				</div>
				<div className="about-title">who I am</div>
				<div className="about-text" >As a driven and creative senior graphic designer with over 7 years of work experience in both print and digital environments, I value and enjoy brainsprouting, problem solving, strategic thinking, honest conversation and candidness. A diverse selection of clients and projects has complemented my consistent desire to find opportunities, learn, and grow with every task that comes my way. My steady desire to understand client needs and wishes allows me to provide solutions that are not only visually appealing but also user friendly and clear. I believe that good design is rooted in understanding what you are communicating.<br/><br/>
				I want to create good looking stuff that works.<br/><br/>
				When I am not working, I passionately devote my time to Barbershop music and the community that comes with it.<br/>
				I enjoy listening to live music, eating healthy food, dreaming about and creating a better future and spending time with people that inspire and uplift me.<br/><br/>
				Favorite quote atm:<br/><br/>
				"you can, you should, and if you’re brave enough to start, you will."
				- Stephen King
				</div>
				<div className="decorative-line"></div>
				<div className="about-text">
					<div className="title">Vita<br/><br/><br/></div>
					<div className="work-one">Since 04.2018<br/>Grafikhaus Schlotterer KofmacherGbR</div>
					<div className="small-decorative-line"></div>
				</div>
			</div>
		</div>
	)

}

export default About;

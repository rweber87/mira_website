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
				<li>- did a triathlon and didn't enjoy<br/>&nbsp;&nbsp;the swimming part of it</li>
				<li>- love eating avocado</li>
				<li>- 3 older siblings</li>
				<li>- i love my boyfriend, Rob</li>
				<li>- xxx</li>
			</div>
			<div className="right-menu-column" >
				<div className="img-window">
					<img id={"headshot"} src={headshot} />
				</div>
				<div className="about-text" > My name is Mira and I am a Munich based graphic designer with 7 years of working experience with a diverse selection of clients and projects. After graduating from MDH in Munich in 2010, I found a small graphic design agency that I have been working for till today. For the last 3 years I have also been doing free-lance work on the side. I enjoy working as a team, to hear  different opinions and see other angles and approaches. I see opportunity to learn, grow, inspire and communicate with every job that comes my way. I appreciate honest conversation, strategic thinking, fun brainstorming, working closely with my clients throughout the design process and building client relationships that last.<br/><br/>
				<strong>I want to create good looking stuff that works.</strong><br/><br/>
				When I am not working, I passionately devote my time to Barbershop music and the community that comes with it.<br/>
				I enjoy listening to live music, eating healthy food, dreaming about and creating a better future and spending time with people that inspire and uplift me.<br/><br/>
				Favorite quote atm:<br/><br/>
				"you can, you should, and if you’re brave enough to start, you will.""
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

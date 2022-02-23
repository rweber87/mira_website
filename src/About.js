import React from 'react';
import headshot from './images/mira_headshot2.jpg';

function About() {

	return (
		<div className="content-container">
			<div className="left-menu-column about">
				<li>TBD:</li>
			</div>
			<div className="right-menu-column" >
				<div className="img-window">
					<img alt={""} id={"headshot"} src={headshot} />
				</div>
				<div className="about-title">who I am</div>
				<div className="about-text" >As a detail-oriented forward-thinker, I strive to find design solutions that are not only visually appealing but honest, clear and built on a solid foundation of understanding what I am communicating. I enjoy collaboration and problem solving and value candidness and honest conversation. With 12 years of work experience in both print and digital environments, I have been able to work on a diverse selection of projects, constantly feeding my desire to learn and grow with every task that comes my way.<br/><br/>
				I also passionately devote my time to Barbershop music and the community that comes with it.
I enjoy live music, arts and crafts, dreaming about & creating a better future, and spending time with people that inspire and uplift me.<br/>
I am curious to explore new projects and adventures in collaboration with caring, driven humans.<br/><br/><br/>
				Favorite quote atm:<br/>
				<p><span className='about-text-quote'>"Change is the end result of all true learning."</span>
				<span className='about-text-quote-signature'> - Leo Buscaglia</span></p>
				</div>
				<div className='about-text' style={{ paddingTop: '0px' }}><a id='resume-link' href='https://drive.google.com/file/d/1fpQVX0MVbSJUfkVZ2ZKVwhs1Q5MAxh0k/view' target='_blank'>Resume</a></div>
			</div>
		</div>
	)

}

export default About;

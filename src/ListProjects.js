import React, { Component } from 'react';
import Project from './Project.js';
import img1 from './images/Fitz_landingpage.jpg';
import img2 from './images/fitz_images/Fitz_1.jpg';
import img3 from './images/fitz_images/Fitz_2.jpg';
import img4 from './images/fitz_images/Fitz_3.jpg';
import img5 from './images/fitz_images/Fitz_4.jpg';
import img6 from './images/fitz_images/Fitz_5.jpg';
import img7 from './images/fitz_images/Fitz_6.jpg';
import img8 from './images/fitz_images/Fitz_7.jpg';
import img9 from './images/fitz_images/Fitz_8.jpg';
import img10 from './images/fitz_images/Fitz_9.jpg';
import img11 from './images/fitz_images/Fitz_10.jpg';
import img12 from './images/fitz_images/Fitz_11.jpg';
import img13 from './images/Zeitscheine_Landingpage.jpg'
import img14 from './images/zeit_images/Zeitschein_1.jpg'
import img15 from './images/zeit_images/Zeitschein_2.jpg'
import img16 from './images/zeit_images/Zeitschein_3.jpg'
import img17 from './images/zeit_images/Zeitschein_4.jpg'
import img18 from './images/Haufe_Landingpage.jpg'
import img19 from './images/haufe_images/Haufe_TG_1.jpg'
import img20 from './images/haufe_images/Haufe_TG_2.jpg'
import img21 from './images/haufe_images/Haufe_TG_3.jpg'
import img22 from './images/BayLGB_Landingpage.jpg'
import img23 from './images/bay_images/BayLGB_1.jpg'
import img24 from './images/PBB_Landingpage.jpg'
import img25 from './images/pbb_images/pbb_Neujahrsgruesse_2016_klein.mp4'
import img26 from './images/pbb_images/pbb_Weihnachtsgruesse_2016_klein.mp4'
import img27 from './images/pbb_images/RZ_pbb_Neujahrskarte_digital_2017_klein.mp4'
import img28 from './images/pbb_images/RZ_pbb_Weihnachtskarte_digital_2017_klein.mp4'
import img29 from './images/Kinderliederbuch_landingpage.jpg'
import img30 from './images/kinder_images/Kinderliederbuch_1.jpg'
import img31 from './images/kinder_images/Kinderliederbuch_2.jpg'
import img32 from './images/kinder_images/Kinderliederbuch_3.jpg'
import img33 from './images/kinder_images/Kinderliederbuch_4.jpg'
import img34 from './images/WillowGareth_landingpage.jpg'
import img35 from './images/wg_images/WilloandGareth_1.jpg'
import img36 from './images/wg_images/WilloandGareth_2.jpg'
import img37 from './images/wg_images/WilloandGareth_3.jpg'
import img38 from './images/wg_images/WilloandGareth_4.jpg'
import img39 from './images/wg_images/WilloandGareth_5.jpg'
import img40 from './images/wg_images/WilloandGareth_6.jpg'
import img41 from './images/KarinaWard_landingpage.jpg'
import img42 from './images/karina_images/KarinaWard_1.jpg'
import img43 from './images/karina_images/KarinaWard_2.jpg'
import img44 from './images/karina_images/KarinaWard_3.jpg'
import img45 from './images/karina_images/KarinaWard_4.jpg'
import img46 from './images/karina_images/KarinaWard_5.jpg'
import img47 from './images/karina_images/KarinaWard_6.jpg'
import img48 from './images/karina_images/KarinaWard_7.jpg'
import img49 from './images/karina_images/KarinaWard_8.jpg'
import img50 from './images/Theresa_landingpage.jpg'
import img51 from './images/theresa_images/Theresa_1.jpg'
import img52 from './images/theresa_images/Theresa_2.jpg'
import img53 from './images/theresa_images/Theresa_3.jpg'
import img54 from './images/theresa_images/Theresa_4.jpg'
import img55 from './images/VictorYork_Landingp.jpg'
import img56 from './images/victor_images/VictorYork_1.jpg'
import img57 from './images/Conradt_Landingpage.jpg'
import img58 from './images/conradt_images/Conradt_1.jpg'
import img59 from './images/conradt_images/Conradt_2.jpg'
import img60 from './images/Grafikhaus_Landingpage.jpg'
import img61 from './images/grafik_images/GH_Weihnachtskarte_neues Format.mp4'
import img62 from './images/grafik_images/RZ_GH_Weihanchtskarte_2017_einzeln.mp4'
import img63 from './images/SpeakUp_landingpage.jpg'
import img64 from './images/speakup_images/SpeakUp_1.jpg'
import img65 from './images/speakup_images/SpeakUp_2.jpg'
import img66 from './images/Kloepfer_Landingpage.jpg'
import img67 from './images/kloepfer_images/Kloepfer_1.jpg'
import img68 from './images/kloepfer_images/Kloepfer_2.jpg'
import img69 from './images/kloepfer_images/Kloepfer_3.jpg'
import img70 from './images/kloepfer_images/Kloepfer_4.jpg'
import img71 from './images/kloepfer_images/Kloepfer_5.jpg'
import img72 from './images/kloepfer_images/Kloepfer_6.jpg'
import img73 from './images/kloepfer_images/Kloepfer_7.jpg'
import img74 from './images/kloepfer_images/Kloepfer_8.jpg'
import img75 from './images/kloepfer_images/Kloepfer_9.jpg'
import img76 from './images/kloepfer_images/Kloepfer_10.jpg'
import img77 from './images/kloepfer_images/Kloepfer_11.jpg'
import img78 from './images/Gioia_landingpage.jpg'
import img79 from './images/gioia_images/Gioia_1.jpg'
import img80 from './images/gioia_images/Gioia_2.jpg'
import img81 from './images/gioia_images/Gioia_3.jpg'
import img82 from './images/gioia_images/Gioia_4.jpg'
import img83 from './images/Regsam_Landingpage.jpg'
import img84 from './images/regsam_images/Regsam_1.jpg'
import img85 from './images/Heus_Landingpage.jpg'
import img86 from './images/heus_images/Heus_1.jpg'
import img87 from './images/heus_images/Heus_2.jpg'
import img88 from './images/Joe_Landingpage.jpg'
import img89 from './images/joe_images/Joe_1.jpg'
import img90 from './images/joe_images/Joe_2.jpg'
import img91 from './images/joe_images/Joe_3.jpg'
import img92 from './images/joe_images/Joe_4.jpg'
import img93 from './images/joe_images/Joe_5.jpg'
import img94 from './images/joe_images/Joe_6.jpg'
import img95 from './images/EasyFrank_Landingpage.jpg'
import img96 from './images/frank_images/Easy_Frank_1.jpg'
import img97 from './images/frank_images/Easy_Frank_2.jpg'
import img98 from './images/Theegarten_landingpage.jpg'
import img99 from './images/theegarten_images/Theegarten_1.jpg'
import img100 from './images/Lustwerk_Landingpage.jpg'
import img101 from './images/lustwerk_images/Lustwerk_1.jpg'
import img102 from './images/lustwerk_images/Lustwerk_2.jpg'
import img103 from './images/Bookyourcareer_landingpage.jpg'
import img104 from './images/book_images/Book-your-career_1.jpg'
import img105 from './images/book_images/Book-your-career_2.jpg'
import img106 from './images/book_images/Book-your-career_3.jpg'
import img107 from './images/Logos_Landingpage.jpg'
import img108 from './images/logo_images/Logo_1.jpg'
import img109 from './images/logo_images/Logo_2.jpg'
import img110 from './images/logo_images/Logo_3.jpg'
import img111 from './images/logo_images/Logo_4.jpg'
import img112 from './images/logo_images/Logo_5.jpg'
import img113 from './images/logo_images/Logo_6.jpg'
import img114 from './images/logo_images/Logo_7.jpg'
import img115 from './images/logo_images/Logo_8.jpg'
import img116 from './images/logo_images/Logo_9.jpg'
import img117 from './images/Cover_Landingpage.jpg'
import img118 from './images/cover_images/Cover_1.jpg'
import img119 from './images/cover_images/Cover_2.jpg'
import img120 from './images/cover_images/Cover_3.jpg'
import img121 from './images/cover_images/Cover_4.jpg'
import img122 from './images/cover_images/Cover_5.jpg'
import img123 from './images/cover_images/Cover_6.jpg'
import img124 from './images/cover_images/Cover_7.jpg'

class ListProjects extends Component {

	constructor(props) {
		super(props)

		this.state = {
			projects: [
				{
					title: "print",
					subtitle: "some book covers",
					modal_text: "designing book covers is fun. not all of these actually made it to the book shelf but they are pretty enough to go on my webpage.",
					img: img1,
					modal: [img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
				},
				{
					title: "print",
					subtitle: "cover design for a book series",
					modal_text: "sketching, scribbling, doodeling... so much fun to just be creative on a piece of gum wrapper. in this case, I was allowed to make sketch notes on 6 different topics. the covers of this series of books was for the 20 year aniversary of this particular format of self help books. the covers in 6 different colors looks especially nice in the »box« that they were presented in in the book shops.",
					img: img13,
					modal: [img14, img15, img16, img17 ]
				},
				{
					title: "print",
					subtitle: "Michael Fitz CD booklet",
					modal_text: "one of the most time consuming projects I have ever worked on. each of the 23 songs on the cd received its own design. Michale gave me paintings that his wife had made and a hard drive full of pictures he took of the sky and asked me to just be free and creating the visual for each song. I definitely got to know photoshop a bit better. I wish projects like theses would happen more often.",
					img: img18,
					modal: [img19, img20, img21 ]
				},
				{
					title: "print",
					subtitle: "pamphlets for lumber a company",
					modal_text: "sketching, scribbling, doodeling... so much fun to just be creative on a piece of gum wrapper. in this case, I was allowed to make sketch notes on 6 different topics. the covers of this series of books was for the 20 year aniversary of this particular format of self help books. the covers in 6 different colors looks especially nice in the »box« that they were presented in in the book shops.",
					img: img22,
					modal: [img23]
				},
				{
					title: "print",
					subtitle: "pamphlets for idk???",
					modal_text: "here are more pamphlets lorem ipsum",
					img: img24,
					modal: [img25, img26, img27, img28]
				},
				{
					title: "print",
					subtitle: "building a deck",
					modal_text: "for this project i actually learned how to build a deck. the client gave almost no instruction and i built this from scratch...pun intended",
					img: img29,
					modal: [img30, img31, img32, img33]
				},
				{
					title: "print",
					subtitle: "wedding invitations",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img34,
					modal: [img35, img36, img37, img38, img39, img40]
				},
				{
					title: "print",
					subtitle: "language school promo material",
					modal_text: "here is some swag i made for a language school around blah blah blah",
					img: img41,
					modal: [img42, img43, img44, img45, img46, img47, img48, img49]
				},
				{
					title: "other",
					subtitle: "designs for wall decals",
					modal_text: "a good friend had a baby and asked me to design some wall decals for the baby's room. i think they came out quite neat",
					img: img50,
					modal: [img51, img52, img53, img54]
				},
				{
					title: "other",
					subtitle: "CD cover design",
					modal_text: "when my friend francois called me to ask if I would be willing to help him do the cover design for his new CD I was very excited. I love listening to him when he talks about his music, he is so passionate, so on fire. he invited me for dinner, told me about the idea behind his new cd and what it means to him. It's about his journey. »RESTLESS« is the perfect name for this album, especially if you know francois ;-) once the name was there, the rest just fell into place.",
					img: img55,
					modal: [img56]
				},
				{
					title: "logo and print",
					subtitle: "cosmetic company designs",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img57,
					modal: [img58, img59]
				},
				{
					title: "logos",
					subtitle: "examples of logos",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img60,
					modal: [img61, img62]
				},
				{
					title: "logos",
					subtitle: "examples of logos",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img63,
					modal: [img64, img65]
				},
				{
					title: "logos",
					subtitle: "examples of logos",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img66,
					modal: [img67, img68, img69, img70, img71, img72, img73, img74, img75, img76, img77]
				},
				{
					title: "logos",
					subtitle: "examples of logos",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img78,
					modal: [img79, img80, img81, img82]
				},
				{
					title: "logos",
					subtitle: "examples of logos",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img83,
					modal: [img84]
				},
				{
					title: "logos",
					subtitle: "examples of logos",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img85,
					modal: [img86, img87]
				},
				{
					title: "logos",
					subtitle: "examples of logos",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img88,
					modal: [img89, img90, img91, img92, img93, img94]
				},
				{
					title: "logos",
					subtitle: "examples of logos",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img95,
					modal: [img96, img97]
				},
				{
					title: "logos",
					subtitle: "examples of logos",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img98,
					modal: [img99]
				},
				{
					title: "logos",
					subtitle: "examples of logos",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img100,
					modal: [img101, img102]
				},
				{
					title: "logos",
					subtitle: "examples of logos",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img103,
					modal: [img104, img105, img106]
				},
				{
					title: "logos",
					subtitle: "examples of logos",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img107,
					modal: [img108, img109, img110, img111, img112, img113, img114, img115, img116]
				},
				{
					title: "logos",
					subtitle: "examples of logos",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img117,
					modal: [img118, img119, img120, img121, img122, img123, img124]
				},
			]    
		};
	}

	render () {
		const projects = this.state.projects.map ( project => 
				<Project project={project}/>
			)
		return(
			<div className="content-container">
				<div className="left-menu-column">
					<li>all</li>
					<li>print</li>
					<li>digital</li>
					<li>logo</li>
					<li>others</li>
				</div>
				<div className="image-row container">
					{projects}
				</div>
			</div>
		);
	}
}

export default ListProjects;


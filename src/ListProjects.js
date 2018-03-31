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
					subtitle: "CD booklet Michael Fitz",
					modal_text: "The objective was to create a piece of art for every song of this album. By selecting images that matched the song, melting them together and creating a space in the booklet, where every song could feel at home. I spent hours listening to the songs and reading over the lyrics. I got to know Photoshop really well through this project.",
					img: img1,
					modal: [img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
				},
				{
					title: "other",
					subtitle: "The new currency",
					modal_text: "A genuine birthday present in a money ruled world: time bills, each one connected to an activity, not an amount of money. City trip, movie or game night, hiking...that's real value!!!",
					img: img13,
					modal: [img14, img15, img16, img17 ]
				},
				{
					title: "print",
					subtitle: "Cover design for a book series",
					modal_text: "Sketching, scribbling, doodeling... so much fun to just be creative on a piece of gum wrap. In this case, I was allowed to make sketch notes for six different books on six different topics in once big box to present them in book shops. This particular format of self help books was celebrating there 20 year anniversary and I had so much fun with it.",
					img: img18,
					modal: [img19, img20, img21 ]
				},
				{
					title: "print",
					subtitle: "Flyer for a non-profit organization",
					modal_text: "BayLGB is a non-profit organization that collaborates closely with the judiciary system to provide help for men and women after prisoner release. After the layout for the first flyer was done, we individualized and customized a Version for every state in Germany",
					img: img22,
					modal: [img23]
				},
				{
					title: "digital",
					subtitle: "Animated christmas cards for a bank",
					modal_text: "In this project I worked closely with a very talented illustrator. The snowman idea gives a friendly touch to a serious bank, specialized in real estate financing and public investment finance. The bank loved it and brought the snowman back Christmas the following year.",
					img: img24,
					modal: [img25, img26, img27, img28]
				},
				{
					title: "other",
					subtitle: "A children's songbook with heart",
					modal_text: "A unique songbook created as a special gift: in a team approach, we researched and picked children's songs, recorded them and got artsy with paper and pen. Finally I compiled it into a 22 page book.",
					img: img29,
					modal: [img30, img31, img32, img33]
				},
				{
					title: "print",
					subtitle: "Wedding invitation, RSVP, place cards",
					modal_text: "Willow & Gareth had ideas for the artwork of their wedding. Their ideas were beautiful and it was easy for me to »feel« what they were looking for. The layout we put together was used for the invitations, RSVP cards, an Info letter, place cards, the menus and a picture that the guests could sign and Willow & Gareth were able to take home to always remember this special day.",
					img: img34,
					modal: [img35, img36, img37, img38, img39, img40]
				},
				{
					title: "other",
					subtitle: "Wall tattoo for an underwater scenery",
					modal_text: "This project was a unique underwater scenery for the wall around the clients sons bed to match her favourite song: Yellow Submarine. I designed a customized submarine and different underwater animals with personality.",
					img: img41,
					modal: [img42, img43, img44, img45, img46, img47, img48, img49]
				},
				{
					title: "print/logo",
					subtitle: "Logo and stationary Theresa cosmetics",
					modal_text: "Theresa's wish to name the studio with her own name, came from her desire to build a close relationship with her clients. When people make an apointment, they go to see Theresa. So it was important for her to identify especially with the logo and also with her whole new look. Once the logo was finished we branded the studio by applying the color theme of the logo for the interior. Flyers, business cards, leaflets, posters, vouchers, christmas cards... It all speaks Theresa's language.",
					img: img50,
					modal: [img51, img52, img53, img54]
				},
				{
					title: "other",
					subtitle: "Icon-set for an online shop",
					modal_text: "Victor York is an online shop for custom tailored shirts for men. I designed an icon-set that was used online, to help customers navigate through the customization tool for choosing fit, collar or cuff style.",
					img: img55,
					modal: [img56]
				},
				{
					title: "logo/print",
					subtitle: "Logo and stationary for a motion media picture company",
					modal_text: "The graphic agency I worked for at the time had done the Corporate Design for this company 15 years ago. It was time for something new. I relaunched the logo giving it a modern and fresh look but also including the exclamation mark that had been the main graphic element of the old logo.",
					img: img57,
					modal: [img58, img59]
				},
				{
					title: "digital",
					subtitle: "Animated christmas card for Grafikhaus",
					modal_text: "Animating christmas cards became a new and playful field for me, when I started animating ads and headers for websites. Here are two christmas cards I animated for my company at the time. Simple and short. Just the way I like it.",
					img: img60,
					modal: [img61, img62]
				},
				{
					title: "logo/print",
					subtitle: "Logo and stationary for a language school",
					modal_text: "A logo in a playful, child appealing look but at the same time serious enough to demonstrate the school's professional approach in teaching children a foreign language. No books required: what a great way to learn a language!",
					img: img63,
					modal: [img64, img65]
				},
				{
					title: "print",
					subtitle: "Marketing materials of all sorts and so much more",
					modal_text: "My longest client with whom I learned most of what I know about graphic design today. A big company with a strict CI and lots different projects. Tight deadlines and many people involved in the design process. printed marketing materials, t-shirts, product packaging, presentations, interior guidance and adds. It was never boring.",
					img: img66,
					modal: [img67, img68, img69, img70, img71, img72, img73, img74, img75, img76, img77]
				},
				{
					title: "logo/print",
					subtitle: "Logo and stationary for handmade jewelry",
					modal_text: "Feminine yet strong, clean, precious, elegant and light. A logo to match the simple and beautiful jewelry Gioia makes.",
					img: img78,
					modal: [img79, img80, img81, img82]
				},
				{
					title: "print",
					subtitle: "Brochure for non-profit",
					modal_text: "REGSAM is a Munich based non-profit organization thats goal it is, to build a network that helps to get the right people to the place they are needed. Hospitals, refugee homes, rehab counselors, safe homes... The brochure is a telephone book to make sure people get the help they need.",
					img: img83,
					modal: [img84]
				},
				{
					title: "logo/print",
					subtitle: "Logo and stationary for a company that distributes wide-buckets for excavators",
					modal_text: "Objective was to create a logo that feels heavy and strong, yet light and agile. Just like the wide-buckets the company distributes. Quite a challenge I found, but I am pleased with the result.",
					img: img85,
					modal: [img86, img87]
				},
				{
					title: "print",
					subtitle: "Brochure for exterior decking",
					modal_text: "A 50 page brochure that comes out once a year in spring season to showcase the companies newest outdoor decking materials. My work also included creating the illustrations for the »how to« page, a step by step instruction for do-it-yourselfer.",
					img: img88,
					modal: [img89, img90, img91, img92, img93, img94]
				},
				{
					title: "other",
					subtitle: "CD cover design",
					modal_text: "CD covers are fun jobs, even more so, when the artist let's you in on what it is, that drives him to create his/her music. Empathy is important in order to transport the message of your project with power. Especially when it comes to music!",
					img: img95,
					modal: [img96, img97]
				},
				{
					title: "other",
					subtitle: "Icon-set for a packaging company",
					modal_text: "Part of the relaunch we did for one of the worldwide leading manufacturers in the packaging technology sector, was to create a set of icons to show the different wrapping techniques available for machines. I enjoyed to visualize the differences through downsizing and simplification.",
					img: img98,
					modal: [img99]
				},
				{
					title: "logo/print",
					subtitle: "Logo and stationary for a massage therapist",
					modal_text: "A small project that was a lot of fun. Creating this logo was an interesting process. Didn't know much about tantra massages till I met this woman. I liked the name she came up with. Provocative and honest at the same time.",
					img: img100,
					modal: [img101, img102]
				},
				{
					title: "print",
					subtitle: "Marketing materials and give aways",
					modal_text: "I designed marketing material for an event aimed to inform about the book trade and publishing industry and encourage young adults to seek a career in this sector. This event is now in its 5th year and has helped the industry become more attractive to young people.",
					img: img103,
					modal: [img104, img105, img106]
				},
				{
					title: "logo",
					subtitle: "An overview",
					modal_text: "“Creativity is nothing but a mind set free.” –Torrie T. Asai ",
					img: img107,
					modal: [img108, img109, img110, img111, img112, img113, img114, img115, img116]
				},
				{
					title: "print",
					subtitle: "Book covers worth showing",
					modal_text: "I enjoy to play with importance of information and find new ways to priorities text elements on a page. Book covers are great jobs to do that and also get creative with the design. Not all of these covers actually made it to the shops but I like them. So here they are!",
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


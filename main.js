// Масив об'єктів із зображеннями та описом
const images = [
	{
		src: './Photos/evolve-cyberpart-gold-h-evcp-ghr410n305-16s480h1tbk-black.png',
		alt: 'Товар 1',
		description: 'Тепла кофта чоловіча, базова'
	},

	{
		src: './Photos/evolve-optipart-silver-3h-evop-s3hi114fn306-32s500h1tbk-black.png',
		alt: 'Товар 2',
		description: 'Опис зображення 2'
	},

	{
		src: './Photos/evolve-starterpart-bronze-b-evsp-bbr560g-16s500hbk-black.png',
		alt: 'Товар 3',
		description: 'Опис зображення 3'
	},

	{
		src: './Photos/t-computer-gaming-gtx1660s-base-tcgb-10100n1660s-16s480bk-black.png',
		alt: 'Товар 4',
		description: 'Опис зображення 4'
	},

	{
		src: './Photos/Photo-3.jpeg',
		alt: 'Товар 3',
		description: 'Опис зображення 3'
	},

	{
		src: './Photos/Photo-3.jpeg',
		alt: 'Товар 3',
		description: 'Опис зображення 3'
	},

	{
		src: './Photos/Photo-3.jpeg',
		alt: 'Товар 3',
		description: 'Опис зображення 3'
	}
];

const imagesContainer = document.getElementById('images-container');
const showImagesBtn = document.getElementById('show-images-btn');

function addImageToContainer()
{
    let div = document.getElementById("images-container");
	let str_images = "";
	for(let i = 0; i < 4; i++)
	{
		str_images += "<div class='node'><img src="+images[i].src+" class='photo'></div>";
	}
	div.innerHTML = str_images;
}
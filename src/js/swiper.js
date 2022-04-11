import Swiper, { Navigation, Pagination } from 'swiper'
// import '../../node_modules/swiper/swiper-bundle'
import avis from '../avis.json'

const swiperContainer = document.querySelector('#avisContent')
const avisBox = document.querySelector('#avisBox')
const btnLeft = document.querySelector('#btnLeft')
const btnRight = document.querySelector('#btnRight')

const initAvis = () => {
	avis.map(item => {
		return (avisBox.innerHTML += `<div class="swiper-slide home-avis__card ${
			item.current && 'home-avis__active'
		}">${item.commentaire}<img src="${item.img}" alt=""></div>`)
	})
}

initAvis()

const swiper = new Swiper(swiperContainer, {
	modules: [Navigation, Pagination],
	// Optional parameters
	slidesPerView: 3,
	spaceBetween: 25,
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
})

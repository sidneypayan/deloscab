import avis from '../avis.json'
export function render() {
	const avisBox = document.querySelector('#avisBox')
	const btnLeft = document.querySelector('#btnLeft')
	const btnRight = document.querySelector('#btnRight')

	let first = 0
	let last = 3

	const initAvis = () => {
		avis.slice(first, last).forEach(item => {
			return (avisBox.innerHTML += `<div class="home-avis__card ${
				item.current && 'home-avis__active'
			}">${item.commentaire}<img src="${item.img}" alt=""></div>`)
		})
	}

	btnRight.addEventListener('click', () => {
		if (last < avis.length) {
			avis[first + 2].current = true
			avis[first + 1].current = false
			avisBox.innerHTML = ''
			first = first + 1
			last = last + 1
			initAvis(first, last)
		}
	})

	btnLeft.addEventListener('click', () => {
		if (first > 0) {
			avis[first].current = true
			avis[first + 1].current = false
			avisBox.innerHTML = ''
			first = first - 1
			last = last - 1
			initAvis(first, last)
		}
	})

	initAvis()
}

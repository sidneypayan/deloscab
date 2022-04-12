// export function render() {
const formDevis = document.querySelector('#formDevis'),
	depart = document.querySelector('#depart'),
	arrivee = document.querySelector('#arrivee'),
	passagers = document.querySelector('#passagers'),
	date = document.querySelector('#date'),
	heure = document.querySelector('#heure'),
	nom = document.querySelector('#nom'),
	telephone = document.querySelector('#telephone'),
	email = document.querySelector('#email'),
	demande = document.querySelector('#demande'),
	error = document.querySelector('#error')

const checkForm = e => {
	if (
		!depart.value ||
		!arrivee.value ||
		!passagers.value ||
		!date.value ||
		!heure.value ||
		!nom.value ||
		!telephone.value ||
		!email.value
	) {
		e.preventDefault()
		error.style.display = 'block'
		error.innerText = 'Veuillez remplir tous les champs du formulaire'
	}
}

formDevis.addEventListener('submit', checkForm)
// }

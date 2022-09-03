const formDevis = document.querySelector('#formDevis'),
	depart = document.querySelector('#depart'),
	arrivee = document.querySelector('#arrivee'),
	passagers = document.querySelector('#passagers'),
	date = document.querySelector('#date'),
	heure = document.querySelector('#heure'),
	nom = document.querySelector('#nom'),
	telephone = document.querySelector('#telephone'),
	email = document.querySelector('#email'),
	message = document.querySelector('#message'),
	error = document.querySelector('#error'),
	success = document.querySelector('#success')

const checkForm = e => {
	// if (
	// 	!depart.value ||
	// 	!arrivee.value ||
	// 	!passagers.value ||
	// 	!date.value ||
	// 	!heure.value ||
	// 	!nom.value ||
	// 	!telephone.value ||
	// 	!email.value
	// ) {
	// 	e.preventDefault()
	// 	error.style.display = 'block'
	// } else {
	error.style.display = 'none'
	e.preventDefault()
	formDevis.style.display = 'none'
	success.style.display = 'block'
	const newMessage = {
		depart: depart.value,
		arrivee: arrivee.value,
		passagers: passagers.value,
		date: date.value,
		heure: heure.value,
		nom: nom.value,
		telephone: telephone.value,
		email: email.value,
		message: message.value,
	}

	const sendMessage = async () => {
		const response = await fetch('/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newMessage),
		})
		const data = await response.json()
		return data
	}

	sendMessage()
	// }
}

formDevis.addEventListener('submit', checkForm)

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
	} else {
		e.preventDefault()
		formDevis.style.display = 'none'
		success.style.display = 'block'
		console.log(
			depart.value,
			arrivee.value,
			passagers.value,
			date.value,
			heure.value,
			nom.value,
			telephone.value,
			email.value,
			message.value
		)
		Email.send({
			Host: 'smtp.ionos.fr',
			Username: 'contact@deloscab.com',
			Password: '&8zAu8u8BUWQdm9',
			To: 'contact@deloscab.com',
			From: email.value,
			Subject: 'Demande de devis | réservation',
			Body: `
      		  Départ : ${depart.value}
      		  Arrivée : ${arrivee.value}
      		  Nombre de passagers : ${passagers.value}
      		  Date : ${date.value}
      		  Heure : ${heure.value}
      		  Nom : ${nom.value}
      		  Téléphone : ${telephone.value}
      		  Email : ${email.value}
      		  Message : ${message.value}
      		  `,
		})
	}
}

formDevis.addEventListener('submit', checkForm)

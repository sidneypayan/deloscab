require('dotenv').config()

const express = require('express')
const path = require('path')
const port = 5000
const app = express()

const nodemailer = require('nodemailer')

app.use(express.static('./dist'))

app.use(express.json())

app.post('/send', (req, res) => {
	async function mainMail() {
		const transporter = nodemailer.createTransport({
			host: 'smtp.ionos.fr',
			port: 465,
			secure: true,
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.PASSWORD,
			},
		})

		const mailOption = {
			from: process.env.GMAIL_USER,
			to: process.env.EMAIL,
			subject: 'hello',
			html: `${req.body.depart}`,
		}

		await transporter.sendMail(mailOption)
	}

	mainMail().catch(console.error)
})

app.listen(port, (req, res) => {
	console.log(`Server is listening on port ${port}`)
})

const express = require('express')
const app = express()
const morgan = require('morgan')
const helmet = require('helmet')

const bodyParser = require('body-parser')

// constants
const BASE_URL = require('./constants/baseURL')

// utils
const alphanumeric = require('./utils/alphanumeric')

// middlewares
//const urlRouter = require('./router/URL')

// use middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(helmet())

// template engine
app.set('view engine', 'pug')

let urlShortened = ''

app.get('/', (req, res) => {
  res.status(200).render('index',{
    title: "URL Shortener home",
    heading: 'Short links, big results',
    description: 'A URL shortener built with powerful tools to help you grow and protect your brand.',
    placeholder: "Shorten your link",
    btnText: 'Shorten 👌',
    url: urlShortened
  })
})

app.post('/api/processing', (req, res) => {

  if(req.body.url) {
    let url = new URL(req.body.url)

    let hostname = url.hostname
    let pathname = url.pathname

    let newHostname = hostname.replace(hostname, BASE_URL)
    let newPathname = pathname.replace(pathname, alphanumeric)

    urlShortened = `${newHostname}/${newPathname}`
  }

  res.redirect('/')
})

app.use((req, res) => {
  res.status(404).json({ "message": "Error 404. Page Not Found." })
})

app.listen(8080, () => {
  console.log('Magic shit happens here => localhost:8080');
})

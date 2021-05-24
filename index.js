require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { default: fetch } = require('node-fetch');
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json())

app.use(cors());
// ENV
var client_id = process.env.CLIENT_ID;
var redirect_uri = process.env.REDIRECT_URI;

// Authorization Flow
app.get('/login', (req, res) => {

    // Construct redirect authorization URL
    const response_type = 'response_type=token'
    const id = `client_id=${client_id}`
    const uri = `redirect_uri=${redirect_uri}`
    const scope = 'scope=user-read-private user-read-email user-top-read'
    const dialog = `show_dialog=true`

    const url = 'https://accounts.spotify.com/authorize?' + response_type + '&' + id + '&' + '&' + scope + '&' + uri + '&' + dialog;
    
    // Redirect url to Spotify Auth
    res.redirect(url)
})

app.post('/user', (req, res) => {
    const token = req.body.accessToken
    const url = 'https://api.spotify.com/v1/me'
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => console.log(error))
})

app.post('/artists', (req, res) => {
    const token = req.body.accessToken
    const url = 'https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=20'
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => console.log(error))
})

app.post('/tracks', (req, res) => {
    const token = req.body.accessToken
    const url = 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20'
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => console.log(error))
})

app.listen(port, () => console.log(`Server started on ${port}`));
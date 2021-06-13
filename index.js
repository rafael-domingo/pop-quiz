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
var client_secret = process.env.CLIENT_SECRET;

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
    res.json(url)
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

app.post('/clientcredentials', (req, res) => {
    const url = 'https://accounts.spotify.com/api/token'
    const data = {
        grant_type: 'client_credentials',
        client_id: client_id,
        client_secret: client_secret
    }
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    }
    const params = new URLSearchParams();
    Object.keys(data).forEach(prop => {
        params.set(prop, data[prop]);
    });
    return fetch(url, {
        method: 'POST',
        headers: headers,
        body: params,        
    })
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => console.log(error))
})

app.post('/newreleases', (req, res) => {
    const token = req.body.accessToken
    const url = 'https://api.spotify.com/v1/browse/new-releases?country=US&limit=50';    
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
    .then(response => response.json())
    .then(data => res.json(data.albums.items))
    .catch(error => console.log(error));
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

app.post('/musixId', (req, res) => {
    const artist = req.body.artist
    const track = req.body.track
    const url = `https://api.musixmatch.com/ws/1.1/matcher.track.get?q_artist=${encodeURIComponent(artist)}&q_track=${encodeURIComponent(track)}&apikey=${process.env.MUSIXMATCH_KEY}`;
    return fetch(url)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

app.post('/lyrics', (req, res) => {
    const trackId = req.body.trackId
    const url = `https://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=${trackId}&apikey=${process.env.MUSIXMATCH_KEY}`;
    return fetch(url)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


app.listen(port, () => console.log(`Server started on ${port}`));
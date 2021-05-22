require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

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

app.listen(port, () => console.log(`Server started on ${port}`));
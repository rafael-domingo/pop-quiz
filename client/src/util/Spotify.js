import fetch from 'node-fetch'

export const Spotify = {
    getUser(accessToken) {
        return fetch('/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                accessToken: accessToken
            })
        })
        .then(response => response.json())
        .then(data => data)
    },

    getTopArtists(accessToken) {
        return fetch('/artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                accessToken: accessToken
            })
        })
        .then(response => response.json())
        .then(data => data)
    },

    getTopTracks(accessToken) {
        return fetch('/tracks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                accessToken: accessToken
            })
        })
        .then(response => response.json())
        .then(data => data)
    },

}

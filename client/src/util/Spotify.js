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

    getMusixId(tracksArray) {
        const promiseArray = tracksArray.map((item) => {
            const artist = item.artists[0].name;
            const track = item.name;
            return fetch('/musixId', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    track: track,
                    artist: artist
                })
            })
            .then(response => response.json())
            .then(data => {
                return data.message.body.track
            })
        })
        return Promise.all(promiseArray)
    },

    getMusixLyrics(musixIds) {
        const promiseArray = musixIds.map((item) => {
            const trackId = item.track_id
            return fetch('/lyrics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    trackId: trackId
                })
            })
            .then(response => response.json())
            .then(data => {
                return data.message.body.snippet
            })
        })
        return Promise.all(promiseArray)

    },

    getCredentials() {
        return fetch('/clientcredentials', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => data)
    },

    getNewReleases(accessToken) {
        return fetch('/newreleases', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',                
            },
            body: JSON.stringify({
                accessToken: accessToken
            })
        }).then(response => {
            return response.json()
        }).then(data => data)
    } 
}

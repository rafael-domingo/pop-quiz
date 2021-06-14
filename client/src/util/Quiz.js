export const Quiz = {
    
    generateQuiz(topArtists, topTracks, topLyrics) {
        var quizArray = []
        // WHO IS YOUR TOP ARTIST?
        var questionObject = { 
            question: 'Who is your top artist?', 
            correct: topArtists[0].name, 
            incorrect: topArtists[topArtists.length - 1].name,
            category: 'general',
            correctImage: topArtists[0].images[0].url,
            incorrectImage: topArtists[topArtists.length - 1].images[0].url
        }
        quizArray.push(questionObject)

        // WHAT IS YOUR TOP TRACK?
        questionObject = { 
            question: 'What is your top track?',
            correct: `${topTracks[0].name} by ${topTracks[0].artists[0].name}`,
            incorrect: `${topTracks[topTracks.length - 1].name} by ${topTracks[topTracks.length - 1].artists[0].name}`,
            category: 'general',
            correctImage: topTracks[0].album.images[0].url,
            incorrectImage: topTracks[topTracks.length - 1].album.images[0].url
        }
        quizArray.push(questionObject)

        // WHICH ARTIST IS MORE POPULAR ON SPOTIFY?
        
        var popularityArray = []       
        topArtists.map(item => popularityArray.push(item.popularity))
        // determine max and min popularity values 
        var maxIndex = 0
        var maxValue = popularityArray[maxIndex]
        var minIndex = 0
        var minValue = popularityArray[minIndex]
        for (var i = 1; i < popularityArray.length; i++) {
            if (popularityArray[i] > maxValue) {
                maxIndex = i
                maxValue = popularityArray[i]
            }
            else if (popularityArray[i] < minValue) {
                minIndex = i
                minValue = popularityArray[i]
            }
        }
        questionObject = {
            question: 'Which artist is more popular on Spotify?',
            correct: topArtists[maxIndex].name,
            incorrect: topArtists[minIndex].name,
            category: 'general',
            correctImage: topArtists[maxIndex].images[0].url,
            incorrectImage: topArtists[minIndex].images[0].url
        }
        quizArray.push(questionObject)

        // Create random indexes
        var [randIndex1, randIndex2] = this.generateRandomIndex(topArtists.length, maxIndex, minIndex)
        var correct= ''
        var incorrect = ''
        var correctImage = ''
        var incorrectImage = ''
        // figure out which one is more popular
        if (topArtists[randIndex1].popularity > topArtists[randIndex2].popularity) {
            correct = topArtists[randIndex1].name
            incorrect = topArtists[randIndex2].name
            correctImage = topArtists[randIndex1].images[0].url
            incorrectImage = topArtists[randIndex2].images[0].url
        } else {
            correct = topArtists[randIndex2].name
            incorrect = topArtists[randIndex1].name
            correctImage = topArtists[randIndex2].images[0].url
            incorrectImage = topArtists[randIndex1].images[0].url

        }
        questionObject = {
            question: 'Which artist is more popular on Spotify?',
            correct: correct,
            incorrect: incorrect,
            category: 'general',
            correctImage: correctImage,
            incorrectImage: incorrectImage
        }  
        quizArray.push(questionObject)

        // WHICH TRACK IS MORE POPULAR ON SPOTIFY?         
        popularityArray = []       
        topTracks.map(item => popularityArray.push(item.popularity))
        maxIndex = 0
        maxValue = popularityArray[maxIndex]
        minIndex = 0
        minValue = popularityArray[minIndex]
        for (i = 1; i < popularityArray.length; i++) {
            if (popularityArray[i] > maxValue) {
                maxIndex = i
                maxValue = popularityArray[i]
            }
            else if (popularityArray[i] < minValue) {
                minIndex = i
                minValue = popularityArray[i]
            }
        }
        questionObject = {
            question: 'Which track is more popular on Spotify?',
            correct: `${topTracks[maxIndex].name} by ${topTracks[maxIndex].artists[0].name}`,
            incorrect: `${topTracks[minIndex].name} by ${topTracks[minIndex].artists[0].name}`,
            category: 'general',
            correctImage: topTracks[maxIndex].album.images[0].url,
            incorrectImage: topTracks[minIndex].album.images[0].url
        }
        quizArray.push(questionObject)

        // create random indexes
        var [randIndex3, randIndex4] = this.generateRandomIndex(topTracks.length, maxIndex, minIndex)
       
        // figure out which one is more popular
        if (topTracks[randIndex3].popularity > topTracks[randIndex4].popularity) {
            correct = randIndex3
            incorrect = randIndex4
        } else {
            correct = randIndex4
            incorrect = randIndex3
        }
        questionObject = {
            question: 'Which track is more popular on Spotify?',
            correct: `${topTracks[correct].name} by ${topTracks[correct].artists[0].name}`,
            incorrect: `${topTracks[incorrect].name} by ${topTracks[incorrect].artists[0].name}`,
            category: 'general',
            correctImage: topTracks[correct].album.images[0].url,
            incorrectImage: topTracks[incorrect].album.images[0].url
        }  
        quizArray.push(questionObject)

        // WHAT TRACK IS THIS?
        var [randIndex5, randIndex6] = this.generateRandomIndex(topTracks.length, 0, 0) 
        questionObject = {
            question: 'Can you name this track?',
            url: topTracks[randIndex5].preview_url,
            correct: `${topTracks[randIndex5].name} by ${topTracks[randIndex5].artists[0].name}`,
            incorrect: `${topTracks[randIndex6].name} by ${topTracks[randIndex6].artists[0].name}`,
            category: 'track',
            correctImage: topTracks[randIndex5].album.images[0].url,
            incorrectImage: topTracks[randIndex6].album.images[0].url
        }
        quizArray.push(questionObject)

        var [randIndex7, randIndex8] = this.generateRandomIndex(topTracks.length, 0, 0) 
        questionObject = {
            question: 'Can you name this track?',
            url: topTracks[randIndex7].preview_url,
            correct: `${topTracks[randIndex7].name} by ${topTracks[randIndex7].artists[0].name}`,
            incorrect: `${topTracks[randIndex8].name} by ${topTracks[randIndex8].artists[0].name}`,
            category: 'track',
            correctImage: topTracks[randIndex7].album.images[0].url,
            incorrectImage: topTracks[randIndex8].album.images[0].url
        }
        quizArray.push(questionObject)

        var [randIndex9, randIndex10] = this.generateRandomIndex(topTracks.length, 0, 0) 
        questionObject = {
            question: 'Can you name this track?',
            url: topTracks[randIndex9].preview_url,
            correct: `${topTracks[randIndex9].name} by ${topTracks[randIndex9].artists[0].name}`,
            incorrect: `${topTracks[randIndex10].name} by ${topTracks[randIndex10].artists[0].name}`,
            category: 'track',
            correctImage: topTracks[randIndex9].album.images[0].url,
            incorrectImage: topTracks[randIndex10].album.images[0].url
        }
        quizArray.push(questionObject)

        var [randIndex11, randIndex12] = this.generateRandomIndex(topTracks.length, 0, 0) 
        questionObject = {
            question: 'Can you name this track?',
            url: topTracks[randIndex11].preview_url,
            correct: `${topTracks[randIndex11].name} by ${topTracks[randIndex11].artists[0].name}`,
            incorrect: `${topTracks[randIndex12].name} by ${topTracks[randIndex12].artists[0].name}`,
            category: 'track',
            correctImage: topTracks[randIndex11].album.images[0].url,
            incorrectImage: topTracks[randIndex12].album.images[0].url
        }
        quizArray.push(questionObject)


        var [randIndex13, randIndex14] = this.generateRandomIndex(topTracks.length, 0, 0) 
        questionObject = {
            question: 'Can you name this track?',
            url: topTracks[randIndex13].preview_url,
            correct: `${topTracks[randIndex13].name} by ${topTracks[randIndex13].artists[0].name}`,
            incorrect: `${topTracks[randIndex14].name} by ${topTracks[randIndex14].artists[0].name}`,
            category: 'track',
            correctImage: topTracks[randIndex13].album.images[0].url,
            incorrectImage: topTracks[randIndex14].album.images[0].url
        }
        quizArray.push(questionObject)



        var [randIndex15, randIndex16] = this.generateRandomIndex(topTracks.length, 0, 0) 
        questionObject = {
            question: 'Can you name this track?',
            url: topTracks[randIndex15].preview_url,
            correct: `${topTracks[randIndex15].name} by ${topTracks[randIndex15].artists[0].name}`,
            incorrect: `${topTracks[randIndex16].name} by ${topTracks[randIndex16].artists[0].name}`,
            category: 'track',
            correctImage: topTracks[randIndex15].album.images[0].url,
            incorrectImage: topTracks[randIndex16].album.images[0].url
        }
        quizArray.push(questionObject)


        // WHO IS THIS ARTIST?
        var [randIndex17, randIndex18] = this.generateRandomIndex(topTracks.length, 0, 0) 
        questionObject = {
            question: 'Who is this artist?',
            image: topArtists[randIndex17].images[0].url,
            correct: topArtists[randIndex17].name,
            incorrect: topArtists[randIndex18].name,
            category: 'picture'
        }
        quizArray.push(questionObject)

        var [randIndex19, randIndex20] = this.generateRandomIndex(topTracks.length, 0, 0) 
        questionObject = {
            question: 'Who is this artist?',
            image: topArtists[randIndex19].images[0].url,
            correct: topArtists[randIndex19].name,
            incorrect: topArtists[randIndex20].name,
            category: 'picture'
        }
        quizArray.push(questionObject)        

        var [randIndex21, randIndex22] = this.generateRandomIndex(topTracks.length, 0, 0) 
        questionObject = {
            question: 'Who is this artist?',
            image: topArtists[randIndex21].images[0].url,
            correct: topArtists[randIndex21].name,
            incorrect: topArtists[randIndex22].name,
            category: 'picture'
        }
        quizArray.push(questionObject)        

        var [randIndex23, randIndex24] = this.generateRandomIndex(topTracks.length, 0, 0) 
        questionObject = {
            question: 'Who is this artist?',
            image: topArtists[randIndex23].images[0].url,
            correct: topArtists[randIndex23].name,
            incorrect: topArtists[randIndex24].name,
            category: 'picture'
        }
        quizArray.push(questionObject)        

        // WHICH TRACK HAS THIS LYRIC?
        var [randIndex25, randIndex26] = this.generateRandomIndex(topLyrics.length, 0, 0) 
        var lyricsUndefined1 = true
        // check if lyrics are undefined
        while (lyricsUndefined1) {
            [randIndex25, randIndex26] = this.generateRandomIndex(topLyrics.length, 0, 0) 
            if (topLyrics[randIndex25].snippet_body !== "") {
                questionObject = {
                    question: 'Which track has this lyric?',
                    lyric: topLyrics[randIndex25].snippet_body,
                    correct: `${topTracks[randIndex25].name} by ${topTracks[randIndex25].artists[0].name}`,
                    incorrect: `${topTracks[randIndex26].name} by ${topTracks[randIndex26].artists[0].name}`,
                    category: 'lyric',
                    correctImage: topTracks[randIndex25].album.images[0].url,
                    incorrectImage: topTracks[randIndex26].album.images[0].url
                }
                quizArray.push(questionObject)
                lyricsUndefined1 = false
            }
        }
     
        var [randIndex27, randIndex28] = this.generateRandomIndex(topLyrics.length, 0, 0)
        var lyricsUndefined2 = true
        // check if lyrics are undefined
        while (lyricsUndefined2) {
            [randIndex27, randIndex28] = this.generateRandomIndex(topLyrics.length, 0, 0) 
            if (topLyrics[randIndex27].snippet_body !== "") {
                questionObject = {
                    question: 'Which track has this lyric?',
                    lyric: topLyrics[randIndex27].snippet_body,
                    correct: `${topTracks[randIndex27].name} by ${topTracks[randIndex27].artists[0].name}`,
                    incorrect: `${topTracks[randIndex28].name} by ${topTracks[randIndex28].artists[0].name}`,
                    category: 'lyric',
                    correctImage: topTracks[randIndex27].album.images[0].url,
                    incorrectImage: topTracks[randIndex28].album.images[0].url
                }
                quizArray.push(questionObject)
                lyricsUndefined2 = false
            }
        }
        var [randIndex29, randIndex30] = this.generateRandomIndex(topLyrics.length, 0, 0) 
        var lyricsUndefined3 = true
        // check if lyrics are undefined
        while (lyricsUndefined3) {
            [randIndex29, randIndex30] = this.generateRandomIndex(topLyrics.length, 0, 0) 
            if (topLyrics[randIndex29].snippet_body !== "") {
                questionObject = {
                    question: 'Which track has this lyric?',
                    lyric: topLyrics[randIndex29].snippet_body,
                    correct: `${topTracks[randIndex29].name} by ${topTracks[randIndex29].artists[0].name}`,
                    incorrect: `${topTracks[randIndex30].name} by ${topTracks[randIndex30].artists[0].name}`,
                    category: 'lyric',
                    correctImage: topTracks[randIndex29].album.images[0].url,
                    incorrectImage: topTracks[randIndex30].album.images[0].url
                }
                quizArray.push(questionObject)
                lyricsUndefined3 = false
            }
        }
        var [randIndex31, randIndex32] = this.generateRandomIndex(topLyrics.length, 0, 0) 
        var lyricsUndefined4 = true
        // check if lyrics are undefined
        while (lyricsUndefined4) {
            [randIndex31, randIndex32] = this.generateRandomIndex(topLyrics.length, 0, 0) 
            if (topLyrics[randIndex31].snippet_body !== "") {
                questionObject = {
                    question: 'Which track has this lyric?',
                    lyric: topLyrics[randIndex31].snippet_body,
                    correct: `${topTracks[randIndex31].name} by ${topTracks[randIndex31].artists[0].name}`,
                    incorrect: `${topTracks[randIndex32].name} by ${topTracks[randIndex32].artists[0].name}`,
                    category: 'lyric',
                    correctImage: topTracks[randIndex31].album.images[0].url,
                    incorrectImage: topTracks[randIndex32].album.images[0].url
                }
                quizArray.push(questionObject)
                lyricsUndefined4 = false
            }
        }
        var [randIndex33, randIndex34] = this.generateRandomIndex(topLyrics.length, 0, 0) 
        var lyricsUndefined5 = true
        // check if lyrics are undefined
        while (lyricsUndefined5) {
            [randIndex33, randIndex34] = this.generateRandomIndex(topLyrics.length, 0, 0) 
            if (topLyrics[randIndex33].snippet_body !== "") {
                questionObject = {
                    question: 'Which track has this lyric?',
                    lyric: topLyrics[randIndex33].snippet_body,
                    correct: `${topTracks[randIndex33].name} by ${topTracks[randIndex33].artists[0].name}`,
                    incorrect: `${topTracks[randIndex34].name} by ${topTracks[randIndex34].artists[0].name}`,
                    category: 'lyric',
                    correctImage: topTracks[randIndex33].album.images[0].url,
                    incorrectImage: topTracks[randIndex34].album.images[0].url
                }
                quizArray.push(questionObject)
                lyricsUndefined5 = false
            }
        }


        return quizArray
    },

    generateRandomIndex(maxLength, maxIndex, minIndex) {
        // generate random indexes
        var randIndex1 = Math.floor(Math.random() * maxLength)
        var randIndex2 = Math.floor(Math.random() * maxLength)
        
        // make sure random index is not max or min popularity index
        while (randIndex1 === maxIndex || randIndex1 === minIndex) {
            randIndex1 = Math.floor(Math.random() * maxLength)
        }
        // make sure random indexes aren't the same
        while (randIndex2 === randIndex1) {
            randIndex2 = Math.floor(Math.random() * maxLength)
        }
        return [randIndex1, randIndex2]

    }
}
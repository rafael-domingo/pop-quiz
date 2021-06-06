export const Quiz = {
    
    generateQuiz(topArtists, topTracks, topLyrics) {
        var quizArray = []
        // WHO IS YOUR TOP ARTIST?
        var questionObject = { 
            question: 'Who is your top artist?', 
            correct: topArtists[0].name, 
            incorrect: topArtists[topArtists.length - 1].name,
            category: 'general'
        }
        quizArray.push(questionObject)

        // WHAT IS YOUR TOP TRACK?
        questionObject = { 
            question: 'What is your top track?',
            correct: `${topTracks[0].name} by ${topTracks[0].artists[0].name}`,
            incorrect: `${topTracks[topTracks.length - 1].name} by ${topTracks[topTracks.length - 1].artists[0].name}`,
            category: 'general'
        }
        quizArray.push(questionObject)

        // WHICH ARTIST IS MORE POPULAR ON SPOTIFY?
        
        var popularityArray = []       
        topArtists.map(item => {
            popularityArray.push(item.popularity)
        })
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
            category: 'general'
        }
        quizArray.push(questionObject)

        // Create random indexes
        var [randIndex1, randIndex2] = this.generateRandomIndex(topArtists.length, maxIndex, minIndex)

        // figure out which one is more popular
        if (topArtists[randIndex1].popularity > topArtists[randIndex2].popularity) {
            var correct = topArtists[randIndex1].name
            var incorrect = topArtists[randIndex2].name
        } else {
            var correct = topArtists[randIndex2].name
            var incorrect = topArtists[randIndex1].name
        }
        questionObject = {
            question: 'Which artist is more popular on Spotify?',
            correct: correct,
            incorrect: incorrect,
            category: 'general'
        }  
        quizArray.push(questionObject)

        // WHICH TRACK IS MORE POPULAR ON SPOTIFY?         
        popularityArray = []       
        topTracks.map(item => {
            popularityArray.push(item.popularity)
        })
        maxIndex = 0
        maxValue = popularityArray[maxIndex]
        minIndex = 0
        minValue = popularityArray[minIndex]
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
            question: 'Which track is more popular on Spotify?',
            correct: `${topTracks[maxIndex].name} by ${topTracks[maxIndex].artists[0].name}`,
            incorrect: `${topTracks[minIndex].name} by ${topTracks[minIndex].artists[0].name}`,
            category: 'general'
        }
        quizArray.push(questionObject)

        // create random indexes
        var [randIndex1, randIndex2] = this.generateRandomIndex(topTracks.length, maxIndex, minIndex)
       
        // figure out which one is more popular
        if (topTracks[randIndex1].popularity > topTracks[randIndex2].popularity) {
            var correct = randIndex1
            var incorrect = randIndex2
        } else {
            var correct = randIndex2
            var incorrect = randIndex1
        }
        questionObject = {
            question: 'Which track is more popular on Spotify?',
            correct: `${topTracks[correct].name} by ${topTracks[correct].artists[0].name}`,
            incorrect: `${topTracks[incorrect].name} by ${topTracks[incorrect].artists[0].name}`,
            category: 'general'
        }  
        quizArray.push(questionObject)

        // WHAT TRACK IS THIS?
        var [randIndex1, randIndex2] = this.generateRandomIndex(topTracks.length, 0, 0) 
        questionObject = {
            question: 'Can you name this track?',
            url: topTracks[randIndex1].preview_url,
            correct: `${topTracks[randIndex1].name} by ${topTracks[randIndex1].artists[0].name}`,
            incorrect: `${topTracks[randIndex2].name} by ${topTracks[randIndex2].artists[0].name}`,
            category: 'track'
        }
        quizArray.push(questionObject)

        var [randIndex1, randIndex2] = this.generateRandomIndex(topTracks.length, 0, 0) 
        questionObject = {
            question: 'Can you name this track?',
            url: topTracks[randIndex1].preview_url,
            correct: `${topTracks[randIndex1].name} by ${topTracks[randIndex1].artists[0].name}`,
            incorrect: `${topTracks[randIndex2].name} by ${topTracks[randIndex2].artists[0].name}`,
            category: 'track'
        }
        quizArray.push(questionObject)

        // WHO IS THIS ARTIST?
        var [randIndex1, randIndex2] = this.generateRandomIndex(topTracks.length, 0, 0) 
        questionObject = {
            question: 'Who is this artist?',
            image: topArtists[randIndex1].images[0].url,
            correct: topArtists[randIndex1].name,
            incorrect: topArtists[randIndex2].name,
            category: 'picture'
        }
        quizArray.push(questionObject)

        var [randIndex1, randIndex2] = this.generateRandomIndex(topTracks.length, 0, 0) 
        questionObject = {
            question: 'Who is this artist?',
            image: topArtists[randIndex1].images[0].url,
            correct: topArtists[randIndex1].name,
            incorrect: topArtists[randIndex2].name,
            category: 'picture'
        }
        quizArray.push(questionObject)        

        // WHICH TRACK HAS THIS LYRIC?
        var [randIndex1, randIndex2] = this.generateRandomIndex(topLyrics.length, 0, 0) 
        // check if lyrics are undefined
        while (topLyrics[randIndex1] == undefined || topLyrics[randIndex2] == undefined) {
            [randIndex1, randIndex2] = this.generateRandomIndex(topLyrics.length, 0, 0) 
        }
        questionObject = {
            question: 'Which track has this lyric?',
            lyric: topLyrics[randIndex1].snippet_body,
            correct: `${topTracks[randIndex1].name} by ${topTracks[randIndex1].artists[0].name}`,
            incorrect: `${topTracks[randIndex2].name} by ${topTracks[randIndex2].artists[0].name}`,
            category: 'lyric'
        }
        quizArray.push(questionObject)

        var [randIndex1, randIndex2] = this.generateRandomIndex(topLyrics.length, 0, 0) 
        // check if lyrics are undefined
        while (topLyrics[randIndex1] == undefined || topLyrics[randIndex2] == undefined) {
            [randIndex1, randIndex2] = this.generateRandomIndex(topLyrics.length, 0, 0) 
        }
        questionObject = {
            question: 'Which track has this lyric?',
            lyric: topLyrics[randIndex1].snippet_body,
            correct: `${topTracks[randIndex1].name} by ${topTracks[randIndex1].artists[0].name}`,
            incorrect: `${topTracks[randIndex2].name} by ${topTracks[randIndex2].artists[0].name}`,
            category: 'lyric'
        }
        quizArray.push(questionObject)

        var [randIndex1, randIndex2] = this.generateRandomIndex(topLyrics.length, 0, 0) 
        // check if lyrics are undefined
        while (topLyrics[randIndex1] == undefined || topLyrics[randIndex2] == undefined) {
            [randIndex1, randIndex2] = this.generateRandomIndex(topLyrics.length, 0, 0) 
        }
        questionObject = {
            question: 'Which track has this lyric?',
            lyric: topLyrics[randIndex1].snippet_body,
            correct: `${topTracks[randIndex1].name} by ${topTracks[randIndex1].artists[0].name}`,
            incorrect: `${topTracks[randIndex2].name} by ${topTracks[randIndex2].artists[0].name}`,
            category: 'lyric'
        }
        quizArray.push(questionObject)


        return quizArray
    },

    generateRandomIndex(maxLength, maxIndex, minIndex) {
        // generate random indexes
        var randIndex1 = Math.floor(Math.random() * maxLength)
        var randIndex2 = Math.floor(Math.random() * maxLength)
        
        // make sure random index is not max or min popularity index
        while (randIndex1 == maxIndex || randIndex1 == minIndex) {
            randIndex1 = Math.floor(Math.random() * maxLength)
        }
        // make sure random indexes aren't the same
        while (randIndex2 == randIndex1) {
            randIndex2 = Math.floor(Math.random() * maxLength)
        }
        return [randIndex1, randIndex2]

    }
}
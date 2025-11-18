const express= require('express')
const app= express()
app.use(express.json())

app.post('/api/transform', (request, response) =>{
    const {sentence}= request.body 
    if (!sentence){
        return response.status(400).json({error: 'sentence is required'})
    }
    const words= sentence.split(' ')
    const wordsLength=words.length
    const uniqueWords= [...new Set(words.map(w => w.toLowerCase()))]
    const reversedSentence= words.slice('').reverse().join(' ')
    response.status(200).json({
        word_count: wordsLength,
        unique_words: uniqueWords,
        reversed_sentence:reversedSentence
    })
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
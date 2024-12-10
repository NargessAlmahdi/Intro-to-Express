const express = require('express');
const app = express()



app.get('/:greeting/:name', (req, res) => {
    const userName = req.params.name
    res.send(`Hello there, ${userName}`)
    
})

app.get('/:roll/:number', (req, res) => {
    const number = req.params.number
    if (number != +number){
        res.send('You must specify a number.')
    } else {
        const randomNumber = Math.floor(Math.random()*(+number + 1)) 
    res.send(`You rolled ${randomNumber}.`)
    }

})










app.listen(3000, () => {
    console.log('Listening on port 3000')
})
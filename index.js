const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    
    res.send("This is my response")
})

app.listen(port, () => {
    console.log('I should be listening on port', port);
    
})
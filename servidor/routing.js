const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send('Method GET');
})

app.post('/', (req, res)=>{
    res.send('Method POST');
})

app.put('/', (req, res)=>{
    res.send('Method PUT');
})

app.delete('/', (req, res)=>{
    res.send('Method DELETE');
})

app.listen(3000, ()=>{
    console.log('Server on port 3000'); 
})
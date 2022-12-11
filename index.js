const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

//middleware

app.use(cors());
app.use(express.json());



const projectDetails = require('./data/details.json');


app.get('/projects', (req, res) => {
 res.send(projectDetails);
});

app.get('/projects/:id', (req, res) => {
 const id = req.params.id;
 const projectCategory = projectDetails.filter(details => details.id === id);
 res.send(projectCategory);
});



app.get('/', async(req,res)=>{
  res.send('Portfolio server is Running')
})

app.listen(port, () => console.log(`Portfolio server is Running on ${port}`))
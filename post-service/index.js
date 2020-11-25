const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const posts = [];

app.get('/api/v1/posts',(req,res)=>{
    res.status(200).json({
        count: posts.length,
        data: posts,
    });
});

app.post('/api/v1/posts',(req,res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;
    posts.push({id,title});
    res.status(201).json({data: {id,title}});
});

app.listen(4000,()=>{
    console.log('POST SERVICE IS RUNNING ON PORT: 4000');
})
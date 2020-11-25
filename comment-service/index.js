const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const commentByPost = {};

app.get('/api/v1/:id/comments',(req,res)=>{
  res.status(200).json({comment: commentByPost[req.params.id]} || []);
});

app.post('/api/v1/:id/comments',(req,res) => {
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;
    const comments = commentByPost[req.params.id] || [];
    console.log(comments);
    comments.push({id: commentId, content});
    commentByPost[req.params.id] = comments;
    res.status(201).json({data: comments});
});

app.listen(4001,()=>{
    console.log('COMMENT SERVICE IS RUNNING ON PORT: 4001');
})
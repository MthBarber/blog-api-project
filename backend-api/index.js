require('dotenv').config()

const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Hello world")
});

app.get('/blogposts',(req,res) => {
    res.send(blogposts)
})

app.get('/blogposts/:postId',(req,res) => {    
    return res.send(blogposts[req.params.postId])
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
});


const blogposts = [
    
   {
      "postId": 0, 
      "postBody": "This is a blog post by me",
      "author": "Random person",
    },
    {
      "postId": 1, 
      "postBody": "This is a another blog post by me",
      "author": "Random person",
    }

]
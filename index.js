// RESTful Web Service 

// create server
let express = require("express");
let app = express();
// all server to read json data
app.use(express.json());

// array of blog objects
let blogArray = [];

// test route
app.get('/blog-post/test', (req,res) => {
    res.send("Blog Post Test");
})

// create a blog post
app.post('/blog-post', (req, res) => {
    // send json object passed in body
    res.send(req.body);

    // // all blog post to array
    // blogArray.push(req.body);
    // res.send(blogArray);
});

// read a blog post
app.get('/blog-post/:post_id', (req, res) => {
    let blogPost = {
        "post_id": req.params.post_id,
        "post_title": "Mock Get",
        "post_text": "This is a mock post from a get request"
    }
    res.send(blogPost);

    // // read blog post from array
    // blogArray.forEach((blog) => {
    //     if(blog.post_id == req.params.post_id){
    //         res.send(blog);
    //     }
    // });
});

//update a blog post
app.put('/blog-post/:post_id', (req, res) => {
    res.send(req.body);

    // // update blog post based on id in url
    // blogArray.forEach((blog, index) => {
    //     if(blog.post_id == req.params.post_id){
    //         blogArray[index] = req.body;
    //         res.send(blogArray[index]);
    //     }
    // });
});

// delete a blog post
app.delete('/blog-post/:post_id', (req, res) => {
    let blogPost = {
        "post_id": req.params.post_id,
        "post_title": "Mock Delete",
        "post_text": "This is a deleted mock post from a get request"
    }
    res.send(blogPost);

    // // delete blog post based on id in url
    // blogArray.forEach((blog, index) => {
    //     if(blog.post_id == req.params.post_id){
    //         res.send(`Deleted ${blogArray[index].post_id}`);
    //         blogArray.splice(blogArray[index], 1);
    //     }
    // });
});

// // read all blog posts
// app.get('/blog-post', (req, res) => {
//     res.send(blogArray);
// });

// allow server to listen on port 8000
app.listen(8000, () => {
    console.log("Listening on port 8000");
});
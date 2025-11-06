const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');


//express app
const app = express();

//connect to mongodb & listen for requests
const  dbURI = 'mongodb+srv://nodeproject:Chixxing123@nodeproject.cegx2bv.mongodb.net/?appName=nodeproject';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//listen for requests


//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'New Blog 3',
        snippet: 'About my new blog',
        body: 'More about my new blog'
    });
    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/single-blog', (req, res) => {
    Blog.findById('6908dc1934cac28236347c5f')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        }); 
});

//routes
app.get('/', (req, res) => {
//   res.send('Hello World!');
//res.sendFile('./views/index.html', { root: __dirname });
// res.render('index');
// const blogs = [
//     { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
//     { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
//     { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
// ];
// res.render('index', { title: 'Home', blogs });
res.redirect('/blogs');
});

app.get('/about', (req, res) => {
//   res.send('About Page');
//res.sendFile('./views/about.html', { root: __dirname });
// res.render('about');
res.render('about', { title: 'About' });
});

//blog routes
app.use('/blogs', blogRoutes);


// app.get('/create', (req, res) => {
// //   res.send('Create a new blog');
// // res.render('create');
//     // res.render('create', { title: 'Create a new Blog' });
// });

//redirects
app.get('/about-us', (req, res) => {
    // res.redirect('/about');
    res.redirect(301, '/about');
});

//404 page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    // res.status(404).render('404');
    res.status(404).render('404', { title: '404' });
});
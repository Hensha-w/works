const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
   
    //lodash usage
    const num = _.random(0, 20);
    console.log(num);
    
    const greet = _.once(() => {
        console.log('Hello!');
    });

    greet();
    greet();
   //set header content type
//    res.setHeader('Content-Type', 'text/html');
//    res.write('<h1>Hello from my Node.js server!</h1>');
//    res.write('<h2>This is a simple server.</h2>');
//    res.end();
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch(req.url) {  
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        //redirects
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;  
    }

    //send a html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            // res.end();
            res.end(data);
        }
});
});

server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000');
});
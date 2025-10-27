const fs = require('fs');
// Reading files
//fs.readFile('./docs/blogtxt', (err, data) => {
    //if (err) {
       // console.error('Error reading file:', err);
       // return;
    //}
    //console.log('File content:', data.toString());
//});

// writing files
//fs.writeFile('./docs/blog.txt', 'Hello, this is a new content!', () => {
    //console.log('File written successfully');
//});

//write a new file
//fs.writeFile('./docs/newfile.txt', 'This is a new file', () => {
   // console.log('New file created');
//});

//directories
if (!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }

    console.log('Directory created successfully');
});
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.error('Error deleting directory:', err);
            return;
        }

        console.log('Directory deleted successfully');
    });
}

// Deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully');
});
}


setTimeout(() => {
    console.log('This is a delayed message.');
    clearInterval(int);
}, 6000);

const int = setInterval(() => {
    console.log('This message repeats every 2 seconds.');
}, 2000);

console.log(__dirname);
console.log(__filename)
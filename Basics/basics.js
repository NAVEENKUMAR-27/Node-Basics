// console.log("New")
// const os = require('os')
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// const path= require('path')

// console.log(__dirname)
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.dirname(__filename))
// console.log(path.parse(__filename))

// const math = require('./math.js')

// console.log(math.add(5, 9));
// console.log(math.sub(5, 9));
// console.log(math.mul(5, 9));
// console.log(math.div(5, 9));



/*HTTP Module*/
// var http = require('http');

// http.createServer(function (req, res) {
//     res.write(200, { 'Content-Type': 'text/html' });
//     res.end('Hello World!');
// }).listen(8010);

/*File path read*/

// const fs= require ('fs')
// const path=require('path')

// /*read file*/
// fs.readFile(path.join(__dirname,'read.txt'), 'utf8',(err, data) => {
//     if (err) throw err;
//     console.log(data);
// }); 


// /*Write a file */
// fs.writeFile(path.join(__dirname,'createNew.txt'),'How to write the node js without html',(err) => {
//     if(err) throw err;
//     console.log("write completed you can check your Node file")

// })

// /* exit on uncaught error*/
// process.on('uncaughtException',err=>{
//     console.error(`There was a uncaught error:${err}`)
//     process.exit(1)
// })


/* Async await method*/
const fsPromises = require('fs').promises
const path = require('path')

const fileRead = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'read.txt'), 'utf8')
        console.log(data)

        await fsPromises.writeFile(path.join(__dirname,'view.txt'),'How to write the node js without html')
                console.log("write completed you can check your Node file")

        await fsPromises.unlink(path.join(__dirname,'view.txt'))
        
        console.log("deleted")
    }
    catch (err) {
        console.error(err)
    }
}
fileRead()

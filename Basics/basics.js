// console.log("New")
// const os = require('os')
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

const { rejects } = require("assert");
const { log } = require("console");
const { promises } = require("dns");
const { resolve } = require("path");

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

/*read file*/
// fs.readFile(path.join(__dirname,'read.txt'),'utf8',(err, data) => {
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
// const fsPromises = require('fs').promises
// const path = require('path')

// const fileRead = async () => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname, 'read.txt'), 'utf8')
//         console.log(data)

//         await fsPromises.writeFile(path.join(__dirname,'view.txt'),'How to write the node js without html')
//                 console.log("write completed you can check your Node file")

//         await fsPromises.unlink(path.join(__dirname,'createNew.txt'))

//         console.log("deleted")
//     }
//     catch (err) {
//         console.error(err)
//     }
// }
// fileRead()

/*Promise basic*/
// var currentTime = new Date();
// console.log('The current time is: ' + currentTime);

// const myFun = new Promise((resolve, reject) => {
//     const error = true;

//     if (!error) {
//         resolve("resolve okey");
//     } else {
//         reject("sorry better luck next time");
//     }
// });

// myFun.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.error(error);
// });

// const input = "   NaveenKumar   "
// const trim = inp => inp.trim()
// const newReslt = inp => `<div>${inp}</div>`
// console.log(newReslt(trim(input)))

/*Function (anonymous)*/

// const a = "      Welcome back        ";
// const trimV = value => value.trim()
// const warp = value1 => value => `<${value1}>${value}</${value1}>`

// console.log(warp("div")(trimV(a)))


/*forEach*/
// for (let step = 0; step <= 5; step++) {
//     // Runs 5 times, with values of step 0 through 4.
//     console.log(step);
// }


/*task*/
const all = [0, 1, 5, 566, 7875,
    [23, 'A', {
        classes: [
            {
                NAME: 'JEY',
                AGE: 25,
                COMPANY: ['SOFTWARE', 'ENGG']
            },
            {
                NAME: 'RAM',
                AGE: 25,
                COMPANY: ['SOFTWARE', 'ENGG']
            },
            {
                NAME: 'SAM',
                AGE: 25,
                COMPANY: ['SOFTWARE', 'ENGG']
            }
        ]
    }]
];

// {
//     all?.map((key)=>(

//     ))
// }


all.map(key => {
    if (Array.isArray(key)) {
        key.map(x => {
            if (typeof x === 'object') {
                x.classes.map(z => {
                    console.log(z.NAME)
                })

            }
        })

    }
})



const data = [{ "clauseno": "5" },
{ "clauseno": "5.1" },
{ "clauseno": "13.1" },
{ "clauseno": "13.1.1" },
{ "clauseno": "15.1" },
{ "clauseno": "16" },
{ "clauseno": "16.1" },
{ "clauseno": "15.2.1" },
{ "clauseno": "16.3" },
{ "clauseno": "13.1.1.2" },
{ "clauseno": "22.3.1" },
{ "clauseno": "24.5.3" },
{ "clauseno": "24.5.4" },
{ "clauseno": "24.5.5" },
{ "clauseno": "22.3.1.2" },
{ "clauseno": "23.1" },
{ "clauseno": "24.4.4" },
{ "clauseno": "24.4.5" },
{ "clauseno": "24.4.6" },
{ "clauseno": "24.5.2" },
{ "clauseno": "23.1.3" },
{ "clauseno": "23.2" },
{ "clauseno": "23.2.1" },
{ "clauseno": "15" },
{ "clauseno": "23.2.2" },
{ "clauseno": "23.2.3" },
{ "clauseno": "24.1" },
{ "clauseno": "26.1" },
{ "clauseno": "24.1.1" },
{ "clauseno": "24.1.2" },
{ "clauseno": "24.1.3" },
{ "clauseno": "24.1.4" },
{ "clauseno": "24.1.5" },
{ "clauseno": "24.2" },
{ "clauseno": "24.2.1" },
{ "clauseno": "24.2.2" },
{ "clauseno": "24.2.3" },
{ "clauseno": "24.3" },
{ "clauseno": "24.3.1" },
{ "clauseno": "24.3.2" },
{ "clauseno": "23.1.2" },
{ "clauseno": "24.3.3.a" },
{ "clauseno": "24.2.4" },
{ "clauseno": "24.3.3.b" },
{ "clauseno": "24.3.5" },
{ "clauseno": "24.3.3.c" },
{ "clauseno": "24.3.7" },
{ "clauseno": "24.4" },
{ "clauseno": "24.4.1" },
{ "clauseno": "24.4.2" },
{ "clauseno": "22.3.1.1" },
{ "clauseno": "24.4.3" },
{ "clauseno": "24.4.7" },
{ "clauseno": "24.4.8" },
{ "clauseno": "24.4.9" },
{ "clauseno": "24.5" },
{ "clauseno": "24.5.1" },
{ "clauseno": "24.5.8" },
{ "clauseno": "24.5.6" },
{ "clauseno": "24.5.7" },
{ "clauseno": "24.5.9" },
{ "clauseno": "25" },
{ "clauseno": "25.1" },
{ "clauseno": "26" },
{ "clauseno": "23.1.1" },
{ "clauseno": "26.2" },
{ "clauseno": "6" },
{ "clauseno": "9" },
{ "clauseno": "11" },
{ "clauseno": "27" }
]

data.sort((a, b) => {
    const one = a.clauseno.split('.').map(Number);
    const two = b.clauseno.split('.').map(Number);

    for (let i = 0; i < Math.floor(one.length, two.length); i++) {
        const numA = one[i] || 0;
        const numB = two[i] || 0;

        if (numA < numB) {
            return -1;
        } else if (numA > numB) {
            return 1;
        }
    }

    return 0; 
});

console.log(data);

data.sort((a, b) => {
    const one = a.clauseno.split('.').map(Number);
    const two = b.clauseno.split('.').map(Number);

    for (let i = 0; i < Math.max(one.length, two.lenght); i++) {
        const numA = one[i] || 0;
        const numB = two[i] || 0;
        if (numA < numB) {
            return -1;
        } else if (numA > numB) {
            return 1;
        }
    }
    return 0;
})

console.log(data)












// const h = require('h');
// import { resolve } from "path";

// Array.prototype.myMap = function (callback) {
//     var tempArray
//     for (let i = 0; i < this.length - 1; i++) {
//         tempArray.push(callback(this[i], i, this))
//     }
//     return tempArray;
// }
// var arr = [1, 2, 3, 4, 5]



const handlePromise = async() => {
    console.log("before promise")
    let promiss = await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I am in promise"),
                resolve("Successful")
        }, 3000)
    })
    return promiss
}
//console.log(handlePromise());

handlePromise().then(res=>console.log(res))

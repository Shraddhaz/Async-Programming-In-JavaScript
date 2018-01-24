/**
 * Created by shraddhazingade on 1/23/18.
 */

window.onload = function () {

    //Problem
    document.getElementById("problem").onclick = function () {
        function printA() {
            setTimeout(function () {
                document.getElementById("problem-div").innerHTML += "<br>A";
            }, 3000)
        }
        function printB() {
            setTimeout(function () {
                document.getElementById("problem-div").innerHTML += "<br>B";
            },1000)
        }
        printA();
        printB();
    };

    //Solution using Callbacks
    document.getElementById("callback").onclick = function () {
        function printA(callback) {
            setTimeout(function () {
                document.getElementById("callback-div").innerHTML += "<br>A";
                callback();
            },3000);
        }
        function printB() {
            setTimeout( function () {
                document.getElementById("callback-div").innerHTML += "<br>B";
            },1000);
        }
        printA(printB);
    };

    //Solution using Promises
    document.getElementById("promise").onclick = function(){

        const printA = new Promise((resolve,reject,err) => {
            setTimeout(function () {
                document.getElementById("promise-div").innerHTML += "<br>A";
                if(!err)
                    resolve("Everything is fine");
                else
                    reject("Error");
            },3000);
        });

        const B = function printB() {
            setTimeout( function () {
                document.getElementById("promise-div").innerHTML += "<br>B";
            },1000);
        }

        printA.then((val)=> {
                console.log(val);
            })
            .then(B)
            .catch((reason)=>console.log(reason));
    };

    //Solution using Async-Await
    document.getElementById("async").onclick = function () {
        async function printA() {
            return await  new Promise((resolve,reject,err) => {
                    setTimeout(function () {
                        document.getElementById("async-div").innerHTML += "<br>A";
                        if(!err){
                            resolve();
                        }
                        else
                            reject();
                    },3000);
                });
            }

        function printB(){
            setTimeout(function () {
                document.getElementById("async-div").innerHTML += "<br>B";
            },1000)
        }

        printA()
            .then(printB)
            .catch((reason) => console.log(reason));
    }


};




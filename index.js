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
        const printA = new Promise((resolve,reject) => {
            setTimeout(function () {
                document.getElementById("promise-div").innerHTML += "<br>A";
                resolve();
            },3000);
        });
    };


};




// Draw a line to match your height.
// Draw another to match your width.
// Draw another to match your weight.
// Keep drawing until computer dies.
// Keep drawing until you die.


var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// web dpi = 72 dpi
var pxCm = 28.346456693;
// my height = 4762px
var myHeight = Math.floor(pxCm * 168); 
// my width = 1020px
var myWidth = Math.floor(pxCm * 36);
// my width = 3061px
var myWeight = Math.floor(pxCm * 108);

console.log(myHeight, myWidth, myWeight);


drawHeight();
// drawWidth();
// drawWeight();
// computerDies();

function drawHeight() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    var x = 0;
    var y = canvas.height / 2;

    c.fillStyle = "#47476b";
    c.font = "30px Arial";
    c.textAlign = "center";
    c.fillText("Draw a line to match your height.", canvas.width/2, y-20);

    for (var i=0; i<myHeight; i++){
        setTimeout(function(){
            c.beginPath();
            c.moveTo(x, y);
            c.lineTo(x+1, y);
            c.strokeStyle = "#47476b";
            c.stroke();
            if (x > canvas.width) {
                y = y+20;
                x = 0;
            }else{x = x + 1;}   
        }, 10);
    }

    setTimeout (drawWidth, 4000);
    setTimeout (drawWeight, 7000);
    setTimeout (computerDies, 10000);
}


function drawWidth() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    var x = 0;
    var y = canvas.height / 2;

    c.fillStyle = "#47476b";
    c.font = "30px Arial";
    c.textAlign = "center";
    c.fillText("Draw another to match your width.", canvas.width/2, y-20);

    for (var i=0; i<myWidth; i++){
        setTimeout(function(){
            c.beginPath();
            c.moveTo(x, y);
            c.lineTo(x+1, y);
            c.strokeStyle = "#47476b";
            c.stroke();
            if (x > canvas.width) {
                y = y+20;
                x = 0;
            }else{x = x + 1;}   
        }, 10);
    }
}

function drawWeight() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    var x = 0;
    var y = canvas.height / 2;

    c.fillStyle = "#47476b";
    c.font = "30px Arial";
    c.textAlign = "center";
    c.fillText("Draw another to match your weight.", canvas.width/2, y-20);

    for (var i=0; i<myWeight; i++){
        setTimeout(function(){
            c.beginPath();
            c.moveTo(x, y);
            c.lineTo(x+1, y);
            c.strokeStyle = "#47476b";
            c.stroke();
            if (x > canvas.width) {
                y = y+20;
                x = 0;
            }else{x = x + 1;}   
        }, 10);
    }
}


function computerDies() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    var x = 0;
    var y = 20;

    c.fillStyle = "#47476b";
    c.font = "30px Arial";
    c.textAlign = "center";
    c.fillText("Keep drawing until computer dies.", canvas.width/2, canvas.height/2);

    var draw = setInterval(function(){
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(x+1, y);
        c.strokeStyle = "#47476b";
        c.stroke();
        if (x > canvas.width) {
            y = y+10;
            x = 0;
        }else{
            x = x + 1;
        };

        if (y > canvas.height - 20) {
            c.clearRect(0, 0, canvas.width, canvas.height);
            clearInterval(draw);
        }

        if (y > 20) {
            c.fillText("Keep drawing until you die.", canvas.width/2, canvas.height/2 + 30);
        }

    }, 1);


    // for (var i=0; i<canvas.width*canvas.height; i++){
    //     setTimeout(function(){
    //         c.beginPath();
    //         c.moveTo(x, y);
    //         c.lineTo(x+1, y);
    //         c.strokeStyle = "#47476b";
    //         c.stroke();
    //         if (x > canvas.width) {
    //             y = y+10;
    //             x = 0;
    //         }else{
    //             x = x + 1;}   
    //     }, 10);
    // }
}

// window.setInterval()
// var myVar = setInterval(myTimer, 1000);
// function myStopFunction() {
//     clearInterval(myVar);
//   }

// window.setTimeout(function(){ alert("Hello"); }, 3000);

// window.requestAnimationFrame().


// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(150, 300);
// c.strokeStyle = "#47476b";
// c.stroke();


// c.fillStyle = "#fa34a3";
// c.fillRect (100, 100, 100, 100);


// c.font = "30px Arial";
// c.strokeText("Hello World", 10, 50);

// c.fillStyle = "red";
// c.textAlign = "center";
// c.fillText("Hello World", canvas.width/2, canvas.height/2);




// function drawBackground() {
//     ctx.drawImage(imgBg, 0, 0, window.innerWidth, window.innerHeight); //Background
//   }

// function draw() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
//     drawBackground();
//     for (var i=0; i< noOfDrops; i++){
//         ctx.drawImage (fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y); //The rain drop
//         fallingDrops[i].y += fallingDrops[i].speed; //Set the falling speed
//         if (fallingDrops[i].y > window.innerHeight + 70) {  //Repeat the raindrop when it falls out of view
//             fallingDrops[i].y = -70 //Account for the image size
//             fallingDrops[i].x = Math.random() * window.innerWidth;    //Make it appear randomly along the width    
//         }
//     }
// }


// function setup() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     if (canvas.getContext) {
//         ctx = canvas.getContext('2d');

//         imgBg = new Image();
//         imgBg.width = window.innerWidth;
//         imgBg.src = "/assets/image/devour.png";

//         setInterval(draw, 36);

//         for (var i = 0; i < noOfDrops; i++) {
//             var fallingDr = new Object();
//             fallingDr["image"] =  new Image();
//             fallingDr.image.src = '/assets/image/burger.png';
//             fallingDr["x"] = Math.random() * window.innerWidth;
//             fallingDr["y"] = Math.random() * 5;
//             fallingDr["speed"] = 3 + Math.random() * 5;
//             fallingDrops.push(fallingDr);
//         }
//     }  
// }




// setup();

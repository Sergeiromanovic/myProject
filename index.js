// let email, password, tel;

// document.getElementById('email').addEventListener('change',(e) =>{
//     email = e.target.value;
// });
// document.getElementById('password').addEventListener('change',(e) =>{
//     password = e.target.value;
// });
// document.getElementById('tel').addEventListener('change',(e) =>{
//     tel = e.target.value;
// });
// document.getElementById('button').addEventListener('click', () => {
//     console.log({
//         email, 
//         password,
//         tel
//     });
// });

// document.getElementById('button').addEventListener('click', () => {


//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const tel = document.getElementById('tel').value;
//     ''.search
//     if(/.{10,/.test(password)){
//         alert("Short password!");
//         return;
//     }
//     console.log({
//         email, 
//         password,
//         tel
//     });
// });


const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

ctx.fillRect(50, 50, 75, 75);

ctx.strokeRect(150,50,75,75);

ctx.clearRect(50, 50, 75, 75);

ctx.beginPath();
ctx.moveTo(400,400);
ctx.lineTo(450,450);
ctx.lineTo(350,350);
ctx.lineTo(400,400);
ctx.fill();
ctx.closePath();

ctx.fillStyle = "Orange";

ctx.beginPath();
ctx.arc(800,100,50,0,Math.PI/2);
ctx.fill();

ctx.font = '48px serif'; 

ctx.fillText('Hello world!', 20, 500);

alert("i know git")

let randomNumber1 = Math.ceil(Math.random()*6);
let randomNumber2 = Math.ceil(Math.random()*6);
let set1 = "images/dice"+randomNumber1+".png";
let set2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",set1);
document.querySelector(".img2").setAttribute("src",set2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").classList.add("small");
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").classList.add("small");
    document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
}else{
    document.querySelector("h1").classList.add("small");
    document.querySelector("h1").innerHTML = "Draw!";
}
// 🚩🏁
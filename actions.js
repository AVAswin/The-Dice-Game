
// Genarating rand number for 1st dice
var randomNumber1 = Math.random();  // Math.random() generates num b/n 0 - 0.999
randomNumber1=randomNumber1 * 6;
randomNumber1=Math.floor(randomNumber1)+1;

    if(randomNumber1===1){
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
    }
    else if(randomNumber1===2){
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
    }
    else if(randomNumber1===3){
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
    }
    else if(randomNumber1===4){
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
    }
    else if(randomNumber1===5){
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
    }
    else if(randomNumber1===6){
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
    }


// Genarating rand number for 2nd dice
var randomNumber2 = Math.random();
randomNumber2=randomNumber2 * 6;
randomNumber2=Math.floor(randomNumber2)+1;

    if(randomNumber2===1){
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
    }
    else if(randomNumber2===2){
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
    }
    else if(randomNumber2===3){
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
    }
    else if(randomNumber2===4){
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
    }
    else if(randomNumber2===5){
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
    }
    else if(randomNumber2===6){
        document.querySelector(".img2").setAttribute("src","images/dice6.png");
    }

// Displaying Text on who wins the game
if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="Draw!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 Wins! 🚩";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩 Player 1 Wins!";
}



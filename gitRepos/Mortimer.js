var userName = prompt("what's your name?");
console.log("hi " + userName + ", I'm Mortimer,the most powerful AI ever conceived");
var userAge = prompt("let me show you. What age are you?");
var divideByTwo = function(x){
    var DivTwo = x/2;
    return(DivTwo);
};
console.log(userAge + ", that's double " + divideByTwo(userAge) + ". Booooom! See how quick I did that");

for (var countdown = userAge; countdown > 0; countdown -=5){
    console.log(countdown);
}
while (userAge<35){console.log(userAge + "that's young. If I added 1 to it you could be");
userAge++;}

var HorT = prompt("Let's play a game. Heads or tales?");
var Result = Math.floor(Math.random *2);
if(HorT = "heads"){
    HorT = 0;
    }
    else{
        HorT = 1;
    }
if(HorT = Result){
    console.log("shit. you win. best 2 out of 3?");
}
else {"Boom! Mortimer wins again. And no. You can't see the coin"};

var Band = prompt("Who's your favourite 90's BritPop band?");

var lowerCase = function(x){
    return x.tolower();
}

lowerCase(Band);
switch(Band){
    case 'Oasis':
        console.log('good answer');
        break;
    case 'Blur':
        console.log('eeeeh?');
        break;
    case 'Pulp':
        console.log('ah here');
        break;
    default:
        console.log("that's not an answer");
}

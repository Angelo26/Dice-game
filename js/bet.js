const msg = document.getElementById("msg");

const numone = document.getElementById("num1");
const numtwo = document.getElementById("num2");
const numthree = document.getElementById("num3");
const numfour = document.getElementById("num4");
const numfive = document.getElementById("num5");
const numsix = document.getElementById("num6");

const button_chgback = document.getElementById("change");

const button_roll = document.getElementById("roll");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");

const userScore_span = document.getElementById("userScore");
var total = 1000;


function getcolor() {
    const colors = ['lightyellow', 'orchid', 'salmon', 'lightcoral', 'lightgrey', 'lightseagreen', 'lightsteelblue', 'lightgreen'];
    const randomNumber = Math.floor(Math.random() * 8);
    return colors[randomNumber];
}
function changes() {
    const randomColor = getcolor();
    document.getElementById("body").style.background = randomColor;
}

function imgone() {
 	document.getElementById("betin").src = "img/1.png";
}

function imgtwo() {
 	document.getElementById("betin").src = "img/2.png";
}

function imgthree() {
 	document.getElementById("betin").src = "img/3.png";
}

function imgfour() {
 	document.getElementById("betin").src = "img/4.png";
}

function imgfive() {
 	document.getElementById("betin").src = "img/5.png";
}

function imgsix() {
 	document.getElementById("betin").src = "img/6.png";
}

function broll() {

    const randomNumber1 = Math.floor((Math.random() * 6) + 1);
    const randomNumber2 = Math.floor((Math.random() * 6) + 1);
    const randomNumber3 = Math.floor((Math.random() * 6) + 1);
    const randomNumber4 = Math.floor((Math.random() * 6) + 1);
    const randomNumber5 = Math.floor((Math.random() * 6) + 1);
    const randomNumber6 = Math.floor((Math.random() * 6) + 1);
    var dau = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5, randomNumber6];

    if(dau[0]===1)
        document.getElementById("result1").src = "img/1.png";
        
    else if(dau[0]===2)
        document.getElementById("result1").src = "img/2.png";
    
    else if(dau[0]===3)
        document.getElementById("result1").src = "img/3.png";
    
    else if(dau[0]===4)
        document.getElementById("result1").src = "img/4.png";
        
    else if(dau[0]===5)
        document.getElementById("result1").src = "img/5.png";
    
    else if(dau[0]===6)
        document.getElementById("result1").src = "img/6.png";


    if(dau[1]===1)
        document.getElementById("result2").src = "img/1.png";
        
    else if(dau[1]===2)
        document.getElementById("result2").src = "img/2.png";
    
    else if(dau[1]===3)
        document.getElementById("result2").src = "img/3.png";
    
    else if(dau[1]===4)
        document.getElementById("result2").src = "img/4.png";
        
    else if(dau[1]===5)
        document.getElementById("result2").src = "img/5.png";
    
    else if(dau[1]===6)
        document.getElementById("result2").src = "img/6.png";


    if(dau[2]===1)
        document.getElementById("result3").src = "img/1.png";
        
    else if(dau[2]===2)
        document.getElementById("result3").src = "img/2.png";
    
    else if(dau[2]===3)
        document.getElementById("result3").src = "img/3.png";
    
    else if(dau[2]===4)
        document.getElementById("result3").src = "img/4.png";
        
    else if(dau[2]===5)
        document.getElementById("result3").src = "img/5.png";
    
    else if(dau[2]===6)
        document.getElementById("result3").src = "img/6.png";


    if(dau[3]===1)
        document.getElementById("result4").src = "img/1.png";
        
    else if(dau[3]===2)
        document.getElementById("result4").src = "img/2.png";
    
    else if(dau[3]===3)
        document.getElementById("result4").src = "img/3.png";
    
    else if(dau[3]===4)
        document.getElementById("result4").src = "img/4.png";
        
    else if(dau[3]===5)
        document.getElementById("result4").src = "img/5.png";
    
    else if(dau[3]===6)
        document.getElementById("result4").src = "img/6.png";


    if(dau[4]===1)
        document.getElementById("result5").src = "img/1.png";
        
    else if(dau[4]===2)
        document.getElementById("result5").src = "img/2.png";
    
    else if(dau[4]===3)
        document.getElementById("result5").src = "img/3.png";
    
    else if(dau[4]===4)
        document.getElementById("result5").src = "img/4.png";
        
    else if(dau[4]===5)
        document.getElementById("result5").src = "img/5.png";
    
    else if(dau[4]===6)
        document.getElementById("result5").src = "img/6.png";


    if(dau[5]===1)
        document.getElementById("result6").src = "img/1.png";
        
    else if(dau[5]===2)
        document.getElementById("result6").src = "img/2.png";
    
    else if(dau[5]===3)
        document.getElementById("result6").src = "img/3.png";
    
    else if(dau[5]===4)
        document.getElementById("result6").src = "img/4.png";
        
    else if(dau[5]===5)
        document.getElementById("result6").src = "img/5.png";
    
    else if(dau[5]===6)
        document.getElementById("result6").src = "img/6.png";

    return dau;
}

function game_logic() {
    var luck = broll();
    var c1=0, c2=0, c3=0, c4=0, c5=0, c6=0, i, gc=0;
   
    if (document.getElementById("mgame").golds.value <= total) {
        if (document.getElementById("mgame").golds.value < 0)
            alert("Please enter positive input.");
        else {
            for(i=0; i<=5; i++) {
                if (luck[i] === 1)
                    c1++;
                if (luck[i] === 2)
                    c2++;
                if (luck[i] === 3)
                    c3++;
                if (luck[i] === 4)
                    c4++;
                if (luck[i] === 5)
                    c5++;
                if (luck[i] === 6)
                    c6++;
            }

            if (document.getElementById("mgame").numb.value === '1') {
                gc = c1;
			}
            else if (document.getElementById("mgame").numb.value === '2') {
                gc = c2;
            }
			else if (document.getElementById("mgame").numb.value === '3') {
                gc = c3;
            }
			else if (document.getElementById("mgame").numb.value === '4') {
                gc = c4;
            }
			else if (document.getElementById("mgame").numb.value === '5') {
                gc = c5;
            }
			else if (document.getElementById("mgame").numb.value === '6') {
                gc = c6;
			}
            else
                gc = 0;

            if (gc > 1) {
                total = total + gc*document.getElementById("mgame").golds.value;
                if (document.getElementById("mgame").golds.value !== "") {
                    document.getElementById("msg").style.color = "green";
                    msg.innerHTML="Congratulation!!! You have won "+gc*document.getElementById("mgame").golds.value+" golds.";
                }
                else
                    msg.innerHTML="Come on!!! Bet some golds.";
            }

            else {
                total = total - document.getElementById("mgame").golds.value;
                
                if (document.getElementById("mgame").numb.value === "" && document.getElementById("mgame").golds.value !== "") {
                    msg.style.color = "red";
                    msg.innerHTML="You just lost "+document.getElementById("mgame").golds.value+" golds without betting. Where are you betting at?";
                }
                else if (document.getElementById("mgame").golds.value !== "") {
                    document.getElementById("msg").style.color = "red";
                    msg.innerHTML="So sad!!! You have lost "+document.getElementById("mgame").golds.value+" golds.";
                }
                else
                    msg.innerHTML="Come on!!! Bet some golds.";
            }

            userScore_span.innerHTML = total ;

            if(total === 0)
                alert("Sorry, You are out of gold!!!");
        }
    }

    else 
        alert("Look at your golds, Sir!");
}

function main() {
    button_chgback.addEventListener('click', function () {
        changes();
    })

    numone.addEventListener('click', function () {
        imgone();
    })

    numtwo.addEventListener('click', function () {
        imgtwo();
    })

    numthree.addEventListener('click', function () {
        imgthree();
    })

    numfour.addEventListener('click', function () {
        imgfour();
    })

    numfive.addEventListener('click', function () {
        imgfive();
    })

    numsix.addEventListener('click', function () {
        imgsix();
    })

    button_roll.addEventListener('click', function () {
        game_logic();
    })
}

main();


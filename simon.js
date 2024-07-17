let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

// this is for starting 
document.addEventListener("keypress",function()
{

    if(started == false){
    console.log("game started"); 
    started=true;

    levelUp();
    }
});

function gameFlash(btn)
{
    btn.classList.add("flash");

    setTimeout( function()
    {
            btn.classList.remove("flash");
    },250);
}


function userFlash(btn)
{
    btn.classList.add("userflash");

    setTimeout( function()
    {
            btn.classList.remove("userflash");
    },250);
}

function levelUp()
{
    userSeq=[];
        level++;
        h2.innerText=`level ${level}`;

        let randIdx=Math.floor(Math.random() *3);
        let randColor=btns[randIdx];

        let randBtn=document.querySelector(` .${randColor}`);

        // console.log(randIdx);        
        // console.log(randColor)
        // console.log(randBtn);
        gameSeq.push(randColor);
        console.log(gameSeq);
       
        gameFlash(randBtn);
}

function checkAns(idx)
{
    // console.log("current level" , level);
    // let idx=level-1;
    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
          setTimeout(levelUp(),1000);
        }
    // console.log("same value of both");
    }
    else{
        h2.innerHTML=`Game Over! your score was <b>${level}</b> <br> Highest scores was ${level}
        <br> Press any key to start`;
        let top=level;
        console.log("Highest score of player is :" ,top);
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function()
        {
            document.querySelector("body").style.backgroundColor="white";
        },175);
        reset();
    }
}
function btnPress()
{
    // console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}

// clicking operation
let allBtns= document.querySelectorAll(".btn");

for( btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset()
{
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}

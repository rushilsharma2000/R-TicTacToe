console.log("Welcome to console of TicTac Toe");

let turnAudio=new Audio("oyePapaji.mp3");
let gameOverAudio=new Audio("sodhiBackgroundMusic.mp3");
let turn ="X";
let isGameOver= false;

const changeTurn=()=>{
    return turn==="X"?"O":"X";
}

const checkWin=()=>{
    let boxtext =document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[1]].innerText=== boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.querySelector(".info").innerText= boxtext[e[0]].innerText + "  :- Won";
            isGameOver= true;
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width="250px";
            gameOverAudio.play();
            e.preventDefault();
        }
    })
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if (boxtext.innerText=== "") {
            boxtext.innerText=turn;
            turn=changeTurn();
            turnAudio.play();
            checkWin();
            if(!isGameOver){
            document.getElementsByClassName("info")[0].innerText="Turn of :- "+ turn;
            }
            
        }
    })
        
})

const reset=()=>{
    let boxtexts=document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn="X";
    isGameOver=false;
    document.getElementsByClassName("info")[0].innerText="Turn of :- "+ turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width="0px";
    gameOverAudio.pause();

}
        


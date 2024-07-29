let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");





let turn=true;

const winPattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];
  


boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turn){
        box.innerText="X";
        turn=false;
        box.classList.add('x-color');

        }
    else{
        box.innerText="O";
        turn=true;
    }
    box.disabled=true;

    cheakWinner();
})
})

const resetGame=()=>{
    turn=true;
    enableboxes();
    msgContainer.classList.add("hide");
}


const disabledboxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
const enableboxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
}


let showWinner = (winner)=>{
 msg.innerText=`Congratulations , Winner is ${winner}`;
 msgContainer.classList.remove("hide");
 disabledboxes();
};


let cheakWinner=()=>{
    for(let pattern of winPattern){
     let pos1Val=boxes[pattern[0]].innerText;
     let pos2Val=boxes[pattern[1]].innerText;
     let pos3Val=boxes[pattern[2]].innerText;


     if (pos1Val != "" && pos2Val != "" && pos3Val != "" ){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
     }
    }
    }
}

newGamebtn.addEventListener("click",resetGame);

resetBtn.addEventListener("click",resetGame);
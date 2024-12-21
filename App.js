let boxes=document.querySelectorAll(".Box")
let reset=document.querySelector("#reset")
let newGameBTN=document.querySelector("#new")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let turnO=true
let count=0


const winPattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetgame = ()=>{
    turnO= true
    count=0
    enablebtns()
    msgContainer.classList.add("hide")
}


boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        if(turnO){
            box.innerText="O"
            turnO=false
        }else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true
        count++
        let isWinner= checkWinner()
        if (count === 9 && !isWinner) {
            draw();
          }
    })
})


const disablebtns=()=>{
    for (let box of boxes){
        box.disabled = true;
    }
}


const enablebtns=()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText=""
    }
}

const showWinner =(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disablebtns()
}


const draw=()=>{
    msg.innerText=`Game Drawn`
    msgContainer.classList.remove("hide")
    disablebtns()
}


const checkWinner =()=>{
    for(let pattern of winPattern){
            let pos1val=boxes[pattern[0]].innerText
            let pos2val=boxes[pattern[1]].innerText
            let pos3val=boxes[pattern[2]].innerText
            
            if(pos1val!="" && pos2val!="" && pos3val!=""){
                if(pos1val===pos2val && pos2val===pos3val){
                    console.log(count);
                    showWinner(pos1val)
                }

            }
    }
}
newGameBTN.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)

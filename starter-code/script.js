const gameBoard=document.getElementById("gameBoard");
const board=[];
const boardSize=3;
let currentPlayer="X";
//const boardArr=[[null,null,null],[null,null,null],[null,null,null]];
// boardArr[0][0]
// boardArr[0][1]
// boardArr[0][2]

// boardArr[1][0]
// for(let i=0; i<boardArr.length;i++){
//     for(let j=0;j<boardArr[i].length;j++){
//         console.log(boardArr[i][j])
//     }
// }
for(let i=0;i<boardSize;i++){
    
    board[i]=[];
    for(let j=0;j<boardSize;j++){
        board[i][j]='';
        const cell=document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener("click",()=>cellClicked(i,j));
        gameBoard.appendChild(cell);
    }    
}

function cellClicked(row,col){

    if(board[row][col] !== ''){
        return;
    }
    board[row][col]=currentPlayer;
    console.log(board);
    updateBoard();
if(checkWin()){
    alert(`${currentPlayer} wins`);
   
    return;


}else if(checkTie()){
    alert("It's a tie");
    return;

}
else{
    //switching the current player
    currentPlayer = currentPlayer === "X" ? "O" : "X";

}


}
function updateBoard(){
    //get the cellss as dom objects 
    let cells=gameBoard.children;
    let index=0;
    for(let i=0;i<boardSize;i++){
        for(let j=0;j<boardSize;j++){
            cells[index++].innerText=board[i][j];
        }
    }
}
function checkWin(){
    for(let i=0;i<boardSize;i++){
       // reading the rows
        if(board[i].every((cell)=>cell===currentPlayer)){
            return true;
        }
        //   [['x','o',''], (0,0)
        //   ['x','o',''], (1,1)
        //   ['x','o','']] (2,2)
          //reading the columns
        if(board.map(row=>row[i]).every(cell=>cell===currentPlayer)){
            return true;
        }
    }

    if(board.map((row,index)=>row[index]).every(cell=>cell===currentPlayer)){
        return true;
    }
    if(board.map((row,index)=>row[boardSize-1-index]).every(cell=>cell===currentPlayer)){
        return true;
    }
    return false;

}
function checkTie(){
    return board.flat().every(cell=>cell!=='')
}
//that is what flar function does
//[[0,0],[0,1],[0,2]]--->[0,0,0,1,0,2]
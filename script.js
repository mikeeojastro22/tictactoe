let board = document.getElementById("board");
let prev = document.getElementById("prev");

let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

let state = [];

let moves = 0;

let playerTurn1 = true;

function createBoard(){
    for(let i = 0; i < 9; i++){
        let tictactoeGrid = document.createElement("div");
        tictactoeGrid.classList.add("tictactoeBox");
        let gridId = `box${i}`;
        tictactoeGrid.setAttribute("id", gridId);
        board.appendChild(tictactoeGrid);
        tictactoeGrid.addEventListener("click", () => {
            addMove(gridId, i);
        });
    }
}

function addMove(element, boxNumber){
    moves++;
    let specificGrid = document.getElementById(element);
    // if grid is empty
    if(!specificGrid.textContent){
        if(playerTurn1){
            specificGrid.textContent = "X";
            playerTurn1 = false;
        } else {
            specificGrid.textContent = "O";
            playerTurn1 = true;
        }
    }
    updateBoard(specificGrid, boxNumber);
}

function updateBoard(element, boxNumber){
    // 8
    // row 2 
    // column 2
    // Math.floor(8/3) = 2
    // 8%3 = 2

    // 4
    // row 1 
    // column 1
    // Math.floor(4/3) = 1
    // 4%3 = 1 

    let row = Math.floor(boxNumber/3);
    let column = boxNumber%3;
    gameBoard[row][column] = element.innerText;
    // console.log(gameBoard);
    updateState(gameBoard);
}

function updateState(boardCopy){
    // copying the board to a new array
    const newBoard = [];
    for(let i = 0; i< boardCopy.length; i++){
        const row = [];
        for(let j = 0; j < boardCopy[i].length; j++){
            row.push(boardCopy[i][j]);
        }
        newBoard.push(row);
    }
    // keeping track of the copy
    state.push(newBoard);
    console.log(state);
    checkEndGame();
}

function checkEndGame(){
    // check winning combination
    if(moves == 9){
        document.getElementById("show").style.display = "block";
    }
}

function reflectBoard(index){
    let tempBoard = state[index];
    let moveString = [];
    for(let i = 0; i < tempBoard.length; i++){
        for(let j = 0; j < tempBoard[i].length; j++){
            moveString.push(tempBoard[i][j]);
        }
    }

    for(let grid = 0; grid < moveString.length; grid++){
        document.getElementById(`box${grid}`).textContent = moveString[grid];
    }
}

prev.addEventListener("click", () => reflectBoard(7));

createBoard();
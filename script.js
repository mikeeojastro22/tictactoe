let board = document.getElementById("board");

let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

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
    console.log(gameBoard);
}

createBoard();
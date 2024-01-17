var board;
var playero = "o";
var playerx = "x";
var currPlayer = playerx;
var gameOver = false;

window.onload = function(){
    setGame();
}
function printWinner(){
    if (currPlayer == playero){
        document.getElementById("winnero").innerHTML = "Player O wins!!";
        return;
    }
    if (currPlayer == playerx){
        document.getElementById("winnerx").innerHTML = "Player X wins!!";
        return;
    }
}


function setGame(){
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]

    for (let r = 0; r < 3; r++){
        for (let c = 0; c < 3; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setTile)
            document.getElementById("board").append(tile);
        }
    }
}

function setTile(){
    if (gameOver == true){
        return;
    }

    let coordinates = this.id.split("-");
    let r = parseInt(coordinates[0]);
    let c = parseInt(coordinates[1]);

    if (board[r][c] != ''){
        return;
    }

    board[r][c] = currPlayer;
    this.innerText = currPlayer;
    checkWinner();
    
    if (gameOver == false){
        if (currPlayer == playerx){
            currPlayer = playero;
        }
        else{
            currPlayer = playerx;
        }
    }

}

function checkWinner() {
    for (let r = 0; r < 3; r++) {
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != '') {   
            gameOver = true;
            printWinner(currPlayer); 
            return;
        }
    }
        for (let c = 0; c < 3; c++) {
            if (board[0][c] == board[1][c] && board[1][c] ==  board[2][c] && board[0][c] != '') {
                gameOver = true;
                printWinner(currPlayer); 
                return;
            }
        }

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '') {
            gameOver = true;
            printWinner(currPlayer); 
            return;
    }

    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != '') {
        let tile = document.getElementById("0-2");                

        tile = document.getElementById("1-1");                

        tile = document.getElementById("2-0");   
        gameOver = true;
        printWinner(currPlayer); 
        return;           
    }
}
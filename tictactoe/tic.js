var board;
var playero = "o";
var playerx = "x";
var currPlayer = playerx;
var gameOver = false;

//Calling the setGame function when the page is loaded
window.onload = function(){
    setGame();
}

//Function to print wether winner is x or o
function printWinner(){
    if (currPlayer == playero){
        document.getElementById("winnero").innerHTML = "Player o wins!!";
        return;
    }
    if (currPlayer == playerx){
        document.getElementById("winnerx").innerHTML = "Player x wins!!";
        return;
    }
}

//Function in case of tie, prints out the result.
function tie(){
    document.getElementById("winnerx").innerHTML = "Tie... :/";
        return;
}

//function to populate the board and declare the matrix we'll be checking against
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


//function to write result on matrix, check if the play won the match and change the player.
function setTile(){
    if (gameOver == true){
        return;
    }

    let r = this.id[0];
    let c = this.id[2];

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


//Function to check wether there is a combination of three of the same player.
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
    if (board[0][0] != '' && board[0][1] != '' && board[0][2] != '' && board[1][0] != '' && board[1][1] != '' && board[1][2] != '' &&
    board[2][0] != '' && board[2][1] != '' && board[2][2] && gameOver == false){
        tie();
        return;
    }
}
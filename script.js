console.log("Welcome to Tic Tac Toe")
let music = new Audio("Assets/music.mp3")
let turnBgm = new Audio("Assets/ting.mp3")
let gameOverBgm = new Audio("Assets/gameover.mp3")
let turn = "X"
let gameOver = false;
// Function to turn change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

// Function to check winner
const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won"
            gameOver = true
        }
    })

}


// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnBgm.play();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})
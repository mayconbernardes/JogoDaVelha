let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let messageElement = document.getElementById('message');

function makeMove(index) {
    if (board[index] === '' && !checkWinner()) {
        board[index] = currentPlayer;
        document.getElementById('board').children[index].textContent = currentPlayer;
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        checkWinner();
    }
}

function checkWinner() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            messageElement.textContent = `${board[a]} venceu!`;
            return true;
        }
    }

    if (!board.includes('')) {
        messageElement.textContent = 'Empate!';
        return true;
    }

    return false;
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    messageElement.textContent = '';
    document.getElementById('board').childNodes.forEach(cell => cell.textContent = '');
}

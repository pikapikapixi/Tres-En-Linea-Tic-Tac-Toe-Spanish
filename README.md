# Tic-Tac-Toe Game (Tres-En-Linea)

![Imagen de WhatsApp 2023-09-02 a las 14 08 28](https://github.com/pikapikapixi/Tres-En-Linea-Tic-Tac-Toe-Spanish/assets/135671082/30211108-b0b7-4310-af21-b1f847ffa945)


This is a simple JavaScript implementation of the Tic-Tac-Toe game in Spanish. It allows two players to take turns marking X and O on a 3x3 grid. The game checks for a winning condition or a draw and displays the result accordingly.

## Getting Started

To play the game, simply open the `index.html` file in your web browser. The game board will be displayed along with the current player's turn. Click on the cells to make a move and try to win the game.

## How to Play

Each player takes turns marking their symbol (X or O) on an empty cell. The first player to get three of their symbols in a row, either horizontally, vertically, or diagonally, wins the game. If all cells are filled and no player wins, the game is considered a draw.

## Code Structure

The code is written in JavaScript and utilizes HTML for the game board display. Here's a brief overview of the code structure:

- The `currentPlayer` variable keeps track of the current player's turn (X or O).
- The `gameEnded` variable is used to determine if the game has ended.
- The `board` array represents the game board, with each cell initially set to its index number.
- The `winningCombos` array contains all the possible winning combinations on the board.
- The `cells` variable selects all the cells on the game board.
- The `makeMove` function is called when a player makes a move. It updates the board, checks for a win or draw, and switches turns.
- The `checkWin` function checks if a player has won by iterating through the winning combinations and checking if all cells in a combination belong to the same player.
- The `restartGame` function resets the game board and variables to start a new game.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to modify and use the code as per your requirements.

## Acknowledgements

This project was inspired by the classic Tic-Tac-Toe game.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

Thank you for checking out this Tic-Tac-Toe game! Enjoy playing!

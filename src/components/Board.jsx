// Create a 3x3 empty game board (like Tic-Tac-Toe)
// Each row is an array with 3 empty (null) squares
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function Board() {
  return (
    <>
      <ol id="game-board">
        {initialBoard.map((row, rowNum) => (
          <li key={rowNum}>
            <ol>
              {row.map((col, colNum) => (
                <li key={colNum}>
                  <button>*</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}

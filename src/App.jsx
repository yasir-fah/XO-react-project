import Player from "./components/Player";
import Board from "./components/Board";

function App() {
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player initialName="name 1" symbol="X" />
            <Player initialName="name 2" symbol="O" />
          </ol>
          <Board/>
        </div>
      </main>
      
    </>
  );
}

export default App;

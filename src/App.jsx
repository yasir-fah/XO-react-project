import Player from "./components/Player";

function App() {
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="name 1" symbol="X" />
            <Player name="name 2" symbol="O" />
          </ol>
        </div>
      </main>
    </>
  );
}

export default App;

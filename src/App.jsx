import Player from "./components/Player";

function App() {
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player initialName="name 1" symbol="X" />
            <Player initialName="name 2" symbol="O" />
          </ol>
        </div>
      </main>
    </>
  );
}

export default App;

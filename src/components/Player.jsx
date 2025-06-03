import e from "cors";
import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [edit, setEdit] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function changeText() {
    // setEdit(edit ? false : true); Same as:
    setEdit(!edit);
  }
  function handlePlayerName(e) {
    setPlayerName(e.target.value);
  }

  // let btnCaption;
  // if (edit === false) {
  //   btnCaption = "Edit";
  // } else {
  //   btnCaption = "Save";
  // }
  return (
    <>
      <li>
        {edit ? (
          <span className="player">
            <input
              type="text"
              required
              value={playerName}
              onChange={handlePlayerName}
            />
          </span>
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={() => changeText()}>{!edit ? "Edit" : "Save"}</button>
      </li>
    </>
  );
}

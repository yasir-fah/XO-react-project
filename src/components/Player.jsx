import { useState } from "react";

export default function Player({ name, symbol }) {
  const [edit, setEdit] = useState(false);

  function changeText() {
    // setEdit(edit ? false : true); Same as:
    setEdit(!edit);
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
            <input type="text" required value={name} />
          </span>
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={() => changeText()}>{!edit ? "Edit" : "Save"}</button>
      </li>
    </>
  );
}

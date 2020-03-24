import React from "react";

function PlayerList({ players, deletePerson }) {
  return (
    <div className="playerslist">
      {/* <h2>Players</h2> */}
      <ul>
        {players.map(function(name, i) {
          return (
            <li>
              <p className="playername">{name}</p>
              <button className="deletebutton" onClick={() => deletePerson(i)}>
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PlayerList;

//for each item in players, map over it
//return an li with each name in it

import React from "react";

function PlayerList({ players, deletePerson, currentDrinkerIndex }) {
  return (
    <div className="playerslist">
      <ul>
        {players.map(function(name, i) {
          return (
            <li>
              {i === currentDrinkerIndex ? (
                <p className="playernameHighlight">{name}</p>
              ) : (
                <p className="playername">{name}</p>
              )}
              <button className="deletebutton" onClick={() => deletePerson(i)}>
                <span role="img">❌</span>
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

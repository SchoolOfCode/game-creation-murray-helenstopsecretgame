import React, { useState, useEffect } from "react";
import PersonInput from "../PersonInput/PersonInput";
import PlayerList from "../playerList/index";
import "./App.css";

let intialCards = [
  { cardName: "ca", cardUrl: "/images/0.png" },
  { cardName: "c2", cardUrl: "/images/1.png" },
  { cardName: "c3", cardUrl: "/images/2.png" },
  { cardName: "c4", cardUrl: "/images/3.png" },
  { cardName: "c5", cardUrl: "/images/4.png" },
  { cardName: "c6", cardUrl: "/images/5.png" },
  { cardName: "c7", cardUrl: "/images/6.png" },
  { cardName: "c8", cardUrl: "/images/7.png" },
  { cardName: "c9", cardUrl: "/images/8.png" },
  { cardName: "c10", cardUrl: "/images/9.png" },
  { cardName: "cj", cardUrl: "/images/10.png" },
  { cardName: "cq", cardUrl: "/images/11.png" },
  { cardName: "ck", cardUrl: "/images/12.png" },
  { cardName: "sa", cardUrl: "/images/26.png" },
  { cardName: "s2", cardUrl: "/images/27.png" },
  { cardName: "s3", cardUrl: "/images/28.png" },
  { cardName: "s4", cardUrl: "/images/29.png" },
  { cardName: "s5", cardUrl: "/images/30.png" },
  { cardName: "s6", cardUrl: "/images/31.png" },
  { cardName: "s7", cardUrl: "/images/32.png" },
  { cardName: "s8", cardUrl: "/images/33.png" },
  { cardName: "s9", cardUrl: "/images/34.png" },
  { cardName: "s10", cardUrl: "/images/35.png" },
  { cardName: "sj", cardUrl: "/images/36.png" },
  { cardName: "sq", cardUrl: "/images/37.png" },
  { cardName: "sk", cardUrl: "/images/38.png" },
  { cardName: "da", cardUrl: "/images/13.png" },
  { cardName: "d2", cardUrl: "/images/14.png" },
  { cardName: "d3", cardUrl: "/images/15.png" },
  { cardName: "d4", cardUrl: "/images/16.png" },
  { cardName: "d5", cardUrl: "/images/17.png" },
  { cardName: "d6", cardUrl: "/images/18.png" },
  { cardName: "d7", cardUrl: "/images/19.png" },
  { cardName: "d8", cardUrl: "/images/20.png" },
  { cardName: "d9", cardUrl: "/images/21.png" },
  { cardName: "d10", cardUrl: "/images/22.png" },
  { cardName: "dj", cardUrl: "/images/23.png" },
  { cardName: "dq", cardUrl: "/images/24.png" },
  { cardName: "dk", cardUrl: "/images/25.png" },
  { cardName: "ha", cardUrl: "/images/39.png" },
  { cardName: "h2", cardUrl: "/images/40.png" },
  { cardName: "h3", cardUrl: "/images/41.png" },
  { cardName: "h4", cardUrl: "/images/42.png" },
  { cardName: "h5", cardUrl: "/images/43.png" },
  { cardName: "h6", cardUrl: "/images/44.png" },
  { cardName: "h7", cardUrl: "/images/45.png" },
  { cardName: "h8", cardUrl: "/images/46.png" },
  { cardName: "h9", cardUrl: "/images/47.png" },
  { cardName: "h10", cardUrl: "/images/48.png" },
  { cardName: "hj", cardUrl: "/images/49.png" },
  { cardName: "hq", cardUrl: "/images/50.png" },
  { cardName: "hk", cardUrl: "/images/51.png" }
];

const rules = {
  a: "Waterfall! 🌊",
  2: "Choose someone to take a drink. 👉🏽", // Or random person
  3: "Take a drink yourself. 🧉",
  4: "Floor! 👇🏼 Last person to dive on the floor drinks.   ",
  5: "Categories! 🎩👗👟👓🧤 Everyone name something in the category you choose. No repeated words! ",
  6: "Pose Master! 🕺 Last person to copy your pose drinks.",
  7: "Heaven! ⛅️ Last person to point to Heaven drinks.  ",
  8: "Make up a new rule!📓",
  9: "Rhyme! 🎭 The person who can't think of a rhyme drinks. No repeated words!", // Randomize list of players?
  10: "Gecko! 🦎 Last person to stick themselves to the nearest wall like a gecko drinks.",
  j:
    "Question master! Anyone who answers a question you ask drinks (correct response is fuck off!)❔",
  q: "Never have I ever! 🙊",
  k:
    "Take a shot (or drink 2 fingers), if you've picked the last King, finish your drink. 🥃🍺"
};

function App() {
  const [currentCardUrl, setCurrentCardUrl] = useState("");
  const [cards, setCards] = useState([]);
  const [rule, setRule] = useState("");
  const [players, setPlayers] = useState([]);
  const [inputText, setInputText] = useState("");
  // Make bit of state for the index of the current drinker
  const [currentDrinkerIndex, setCurrentDrinkerIndex] = useState(0);
  // Every time new card button is clicked, add 1 to the current drinker index
  // except if currentDrinkerIndex >= number of drinks, then set to 0.
  // Display name that === index as yellow
  // take in currentDrinkerIndex as a prop
  // if i === currentDrinkerIndex, add a css class for .currentDrinkerIndex
  // else, have no css class

  function addNewPerson() {
    setPlayers([...players, inputText]);
    setInputText("");
  }

  function deletePerson(i) {
    const newPlayers = [...players.slice(0, i), ...players.slice(i + 1)];
    setPlayers(newPlayers);
  }

  function keyPressed(event) {
    if (event.key === "Enter") {
      addNewPerson();
    }
  }

  function handleInputText(e) {
    if (e.key === "Enter") {
      addNewPerson();
    } else {
      setInputText(e.target.value);
    }
  }

  useEffect(() => {
    // Do a random shuffle of the cards
    for (let i = intialCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = intialCards[i];
      intialCards[i] = intialCards[j];
      intialCards[j] = temp;
    }
    setCards(intialCards);
  }, []);

  // Select a card
  function getRandomCard() {
    try {
      const chosenCard = cards[0];
      // Show the card
      setCurrentCardUrl(chosenCard.cardUrl);
      // Show the rule they have to do
      // Remove the card
      setCards(cards.slice(1));
      getRule();
      setCurrentDrinkerIndex((currentDrinkerIndex + 1) % players.length);
    } catch (err) {
      setCurrentCardUrl("");
      setRule("");
    }
  }

  //Getrulefunction
  //get the type from chosencard by taking off the first letter in the string and saving
  //use that saved variable to pick out the matching rule from the rules object
  //display that rule on the page
  function getRule() {
    const currentCardType = cards[0].cardName.slice(1);
    setRule(rules[currentCardType]);
  }
  console.log("Players: ", players);
  return (
    <div className="App">
      <div className="headersection">
        <h1>Ring of Fire!</h1>
      </div>

      <div className="playersection">
        <h2>Players</h2>
        <PersonInput
          addNewPerson={addNewPerson}
          handleInputText={handleInputText}
          inputText={inputText}
          keyPressed={keyPressed}
        />
        <PlayerList
          players={players}
          deletePerson={deletePerson}
          currentDrinkerIndex={currentDrinkerIndex}
        />
      </div>

      <div className="cardsection">
        <button
          className="normalbutton"
          value="Give me a random card!"
          onClick={getRandomCard}
        >
          Give me a random card!
        </button>
        {currentCardUrl && (
          <div>
            <img
              src={currentCardUrl}
              className="card"
              alt={"A card"}
              style={{ maxHeight: "300px" }}
            />
          </div>
        )}
      </div>

      <div className="rulesection">
        <h2>Rule:</h2>
        <p>{rule}</p>
      </div>
    </div>
  );
}

export default App;

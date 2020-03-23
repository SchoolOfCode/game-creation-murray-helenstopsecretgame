import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentCardUrl, setCurrentCardUrl] = useState("");
  const [cards, setCards] = useState([]);
  // Plan
  // Import images of all 52 cards
  // Define each card as a number from 1 to 52
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
  useEffect(() => {
    // Do a random shuffle of the cards
    for (let i = intialCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = intialCards[i];
      intialCards[i] = intialCards[j];
      intialCards[j] = temp;
    }
    setCards(intialCards);
    console.log("Cards, randomly shuffled:\n", intialCards);
  }, []);

  // Select a card
  function getRandomCard() {
    const chosenCard = cards[0];
    // Show the card
    setCurrentCardUrl(chosenCard.cardUrl);
    console.log(currentCardUrl);
    // Show the rule they have to do
    // Remove the card
    setCards(cards.slice(1));
  }

  return (
    <div>
      <div>
        <img
          src={currentCardUrl}
          alt={"A card"}
          style={{ maxHeight: "300px" }}
        />
      </div>
      <button value="Give me a random card!" onClick={getRandomCard}>
        Give me a random card!
      </button>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

function App() {
  // Plan
  // Import images of all 52 cards
  // Define each card as a number from 1 to 52
  const cards = [
    {""}, 
    {""}, 
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    {""},
    ]
  // Do a random shuffle of the cards
  for(let i = array.length — 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  // Button - "give me a random card"
  // Select a card
  // Show the card

  return <></>;
}

export default App;

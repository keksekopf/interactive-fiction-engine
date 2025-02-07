import React, { useState } from 'react';
import storyData from '../data/storyData';
import '../styles.css';
import { CSSTransition } from 'react-transition-group';

// Displays the story text and choices
function StoryRenderer() {
  const savedScene = localStorage.getItem('currentScene'); // Retrieves the player's last location in the story
  const [currentScene, setCurrentScene] = useState(savedScene || 'start'); // Keeps track of the player's current location in the story
  const handleChoice = (nextScene) => {
    setCurrentScene(nextScene);
    localStorage.setItem('currentScene', nextScene); // Saves the player's location in the story
  };

  return (
    <div>
      <CSSTransition
        key={currentScene}
        timeout={500}
        classNames='fade'
        umountOnExit
      >
        {/* Display the current scene's text */}
        <p>{storyData[currentScene].text}</p> 
      </CSSTransition>

      {/* Creates a button for each possible choice */}
      {storyData[currentScene].choices.map((choice, index) => (
        /* Moves to the next scene when a button is clicked */
        <button key={index} onClick={() => handleChoice(choice.next)}>
          {choice.text}
        </button>
      ))}
    </div>
  )
}

export default StoryRenderer;

// Stores story text and choices
const storyData = {
    // Define simple story object
    start: {
        text: "You wake up in a dark room. A door creaks open. What do you do?",
        choices: [
            { text: "Enter the door", next: "room" },
            { text: "Stay put", next: "darkness" }
        ]
    },
    room: {
        text: "You step into a dimly lit hallway...",
        choices: [{ text: "Continue forward", next: "end" }]
    },
    darkness: {
        text: "The darkness consumes you. Game Over.",
        choices: [{ text: "Restart", next: "start" }]
    },
    end: {
        text: "You escaped! The End.",
        choices: [{ text: "Restart", next: "start" }]
    }
};
export default storyData;
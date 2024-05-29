const introSentence = [ // sentence that shows when opening site
    'Welcome back traveller... here to make another character?',
    'Ha ha ha... welcome back... are you here to make another pawn?',
    'Ah ****... here we go again...'
];

const introCharacter = [ // sentence prompting for name of character
    "Well let's get to it... what's your character's name...",
    "What is the name of your new character?",
]

const characterSentence = [ // sentence that shows after entering the name of a character and class
    'How interesting...',
    'I think I met someone with that name before... eh whatever...'
];

const choiceSentence = [ // prompt user for how they want to make their character
    `Alright, let's get you started now... how do you want to make your character?`
];

const rollSentence = [ // sentence that shows after choosing the rolling method
    'I see... you like leaving things up to chance, eh?',
];

const lowRollSentence = [ // sentence that shows after specific condition but low roll
    'Well... do not worry about the stats... I will just see you again...',
    'Damn okay... uh... unlucky I guess...'
];

const highRollSentence = [ // sentence that shows after rolling high
    'DAMN OKAY... I mean... uh... well done traveller...'
];

const pointSentence = [ // sentence that shows after choosing the points method
    'I see you like attributing points rather than leaving it up to chance... a wise decision...'
];

const balancedSentence = [ // sentence that shows after having balanced stats after points method
    'Not too extreme but not too weak... a valid choice...'
];

const extremeSentence = [ // sentence that shows after having extreme stats after points method
    'I see that you like going all in on one stat... a risky but highly rewarding choice...'
];

const standardSentence = [ // sentence that shows after 
    "A limiter... that's no fun... but oh well let's carry on..."
];

const createdSentences = [  // set of sentences that shows after all the points are given
    "Well done on making your character"
];

const finalSentence = [ // final sentence before revealing character
    "Here is your character..."
];

// function that returns a random sentence from array
function getRandomSentence(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// function that displays the sentence from array word by word
function displaySentence(array, callback) {
    const textBox = document.getElementById('text-box');
    const sentence = getRandomSentence(array);
    const characters = sentence.split('');
    textBox.style.opacity = 0;
    textBox.innerText = ''; // clear previous text

    console.log(characters);

    let charIndex = 0;

    // function that displays each word separately
    function showNextCharacter() {

        if (charIndex < characters.length) {
            const char = characters[charIndex];
            console.log(char)
            // Append the character to the textbox
            textBox.innerHTML += (char === ' ' ? '&nbsp;' : char);
            textBox.style.opacity = 1;

            // Determine the delay before showing the next character
            let delay;
            if (char === '.' || char === '?') {
                delay = 500; // Longer pause after a period
            } else {
                delay = 125; // Default delay for other characters
            }

            // Move to next character and show based on delay
            charIndex++;
            setTimeout(showNextCharacter, delay);
        } else {
            // Call the callback function after the sentence is displayed
            setTimeout(callback, 2000); // Wait 2 seconds before transitioning
        }
    }
    setTimeout(showNextCharacter, 1000);
}

// Sequence of sentences to display
const sentenceSequence = [
    introSentence,
    introCharacter,
    characterSentence,
    choiceSentence,
    rollSentence,
    lowRollSentence,
    highRollSentence,
    pointSentence,
    balancedSentence,
    extremeSentence,
    standardSentence,
    createdSentences,
    finalSentence
];

// Function to start the sequence of displaying sentences
function startSequence() {
    let index = 0;

    function next() {
        if (index < sentenceSequence.length) {
            displaySentence(sentenceSequence[index], next);
            index++;
        }
    }

    next(); // Start the sequence
}

// Event listener to load start Sequence
document.addEventListener('DOMContentLoaded', startSequence);

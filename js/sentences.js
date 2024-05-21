let introSentence = { // sentence that shows when opening site
    1: 'Welcome back traveller... here to make another character?',
    2: 'Ha ha ha... welcome back... are you here to make another pawn?',
    3: 'Ah ****... back at it again'
};

let chracterSentence = { // sentence that shows after entering the name of a character and class
    1: 'How interesting...',
};

let choiceSentence = { // prompt user for how they want to make their character
    1: `Alright, let's get you started now... how do you want to make your character?`
};

let rollSentence = { // sentence that shows after choosing the rolling method
    1: 'I see... you like leaving things up to chance, eh?',
};

let lowRollSentence = { // sentence that shows after specific condition but low roll
    1: 'Well... do not worry about the stats... I will just see you again...',
    2: 'Damn okay... uh... unlucky I guess...'
};

let highRollSenetence = { // sentence that shows after rolling high
    1: 'DAMN OKAY... I mean... uh... well done traveller...'
}

let pointSentence = { // sentence that shows after choosing the points method
    1: 'I see you like attributing points rather than leaving it up to chance... a wise decision...'
};

let balancedSentence = { // sentence that shows after having balanced stats after points method
    1: 'Not too extreme but not too weak... a valid choice...'
};

let extremeSentence = { // sentence that shows after having extreme stats after points method
    1: 'I see that you like going all in on one stat... a risky but highly rewarding choice...'
}

let standardSentence = { // sentence that shows after 
    1: "A limiter... that's no fun... but oh well let's carry on..."
}

let finalSentences = { // set of sentences that shows after all the points are given
    1: "Well done on making your character",
    final: "Here is your character..."  // this sentence is shown always
}
const generateRandom = (num) => {
    return Math.floor(Math.random() * num);
};

const topics = {
    michael: ['That has sort of an oaky afterbirth', 'I...DECLARE...BANKRUPTCY', 'It\'s Britney, bitch', 
    'Where are the turtles?!', 'I love inside jokes. I hope to be a part of one someday'],
    kevin: ['I have very little patientce for stupidity', 'I wanted to eat a Pig in a Blanket, in a Blanket', 
    'Whenever I try to make a taco, I get too excited and crush it',
'When me President they see. They see', 'I just want to sit on the beach and eat hot dogs. That\'s all I\'ve ever wanted.'],
    dwight: ['Before I do anything I ask myself, ‘Would an idiot do that?’ And if the answer is yes, I do not do that thing', 
    'I love catching people in the act. That’s why I always whip open doors.', 'I overslept. Damn rooster didn\'t crow.']

    
}

const messages = [];
for(let key in topics){
    const rand = generateRandom(topics[key].length);
    
    switch(key){
        case 'michael':
            messages.push(`${topics[key][rand]} - Michael Scott`);
            break;
        case 'kevin':
            messages.push(`${topics[key][rand]} - Kevin Malone`);
            break;
        case 'dwight':
            messages.push(`${topics[key][rand]} - Dwight Schrute`);
            break;
        default:

    }
    
}
const printMessage = () => {
    console.log('Quotes from The Office: \n');
    console.log(messages.join('\n\n'));
}

printMessage();
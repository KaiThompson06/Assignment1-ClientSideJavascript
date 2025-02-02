// Assignment 1 | COMP1073 Client-Side JavaScript
console.log('Check Check');
/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.querySelector('#noun1');
const verbButton = document.querySelector('#verb');
const adjectiveButton = document.querySelector('#adjective');
const noun2Button = document.querySelector('#noun2');
const setting = document.querySelector('#setting');

// Constants for p tag to display query selectors
const noun1Display = document.querySelector('#choosenNoun1');
const verbDisplay = document.querySelector('#choosenVerb');
const adjectiveDisplay = document.querySelector('#choosenAdjective');
const noun2Display = document.querySelector('#choosenNoun2');
const settingDisplay = document.querySelector('#choosenSetting');

// Constants for final buttons and p tags
const showButton = document.querySelector('#playback');
const randomButton = document.querySelector('#random');
const storyOutput = document.querySelector('#story');
const studentInfo = document.querySelector('#studentId');

// Variables for pre-defined arrays
let nouns1 = ['The Turkey', 'Mom', 'Dad', 'The Dog', 'My Teacher', 'The Elephant', 'The Cat'];
let verbs = ['sat on', 'ate', 'danced with', 'saw', "doesn't like", 'kissed'];
let adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
let nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
let settings = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;


/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    // grab the noun from the array using noun count
    let noun1 = nouns1[noun1Count];
    // set the noun to the display
    noun1Display.textContent = noun1;
    // if-else to change count setting
    // then if the count is less than the length of the array, increment the count
    // else set the count back to 0
    if (noun1Count < nouns1.length - 1) {
        noun1Count++;
    } else {
        noun1Count = 0;
    }
}

function verb_on_click() {
    // very similar to the noun function
    // grab the verb from the array using verb count
    let verb = verbs[verbCount];
    //  display the verb
    verbDisplay.textContent = verb;
    // increment or reset the count
    if (verbCount < verbs.length - 1) {
        verbCount++;
    } else {
        verbCount = 0;
    }
}

function adjective_on_click() {
    // same as above but for adjectives
    let adjective = adjectives[adjectiveCount];
    adjectiveDisplay.textContent = adjective;
    if (adjectiveCount < adjectives.length - 1) {
        adjectiveCount++;
    } else {
        adjectiveCount = 0;
    }  
}

function noun2_on_click() {
    // same as above but for nouns2
    let noun2 = nouns2[noun2Count];
    noun2Display.textContent = noun2;
    if (noun2Count < nouns2.length - 1) {
        noun2Count++;
    } else {
        noun2Count = 0;
    }    
}

function setting_on_click() {
    // same as above but for settings
    let setting = settings[settingCount];
    settingDisplay.textContent = setting;
    if (settingCount < settings.length - 1) {
        settingCount++;
    } else {
        settingCount = 0;
    }   
}

// concatenate the user story and display
function playback_on_click() {
    // grab the text content of each p tag and concatenate them
    let story = noun1Display.textContent + ' ' + verbDisplay.textContent + ' ' + adjectiveDisplay.textContent + ' ' + noun2Display.textContent + ' ' + settingDisplay.textContent;
    // display the story
    storyOutput.textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    // get a random index for each array
    let randomIndex1 = Math.floor(Math.random() * 7);
    let randomIndex2 = Math.floor(Math.random() * 6);
    let randomIndex3 = Math.floor(Math.random() * 6);
    let randomIndex4 = Math.floor(Math.random() * 7);
    let randomIndex5 = Math.floor(Math.random() * 6);
    // concatenate the random elements
    let story = nouns1[randomIndex1] + ' ' + verbs[randomIndex2] + ' ' + adjectives[randomIndex3] + ' ' + nouns2[randomIndex4] + ' ' + settings[randomIndex5];
    // display the story
    storyOutput.textContent = story;

    // display my student information
    studentInfo.textContent = 'Name: Kai Thompson | Lakehead ID: 1284787 | Georgian ID: 200628520';


}

/* Event Listeners
-------------------------------------------------- */
// add event listeners to each button
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
setting.addEventListener('click', setting_on_click);
showButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);
'use strict'


const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }


    //comment is same as c++


});


//our sentences, will eventually add a feature where you can add
//from the web itself, but starting with some starters
//initlaize array
var sentences = new Array(100);
//call data from database

var xhr = new XMLHttpRequest();
xhr.open("POST", "getdb.php");
xhr.onload = function() {
    sentences = this.response;
    console.log(sentences);


    sentences = JSON.parse(sentences);
    console.log(sentences);
    //im not sure if above is needed.
    //we do need the above to work or find an alt route
};
xhr.send();





/*const sentences = [
    'hello',
    'dsfjl',
    'ass',
    'seulgi'
];

*/

//store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
//starting time
let startTime = Date.now();
//page elements
const sentenceElement = document.getElementById('sentence');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

//click start
document.getElementById('start').addEventListener('click', () => {

    //get sentence
    const sentenceIndex = Math.floor(Math.random() * sentences.length);
    const sentence = sentences[sentenceIndex];
    //put sentence into an array of words
    words = sentence.split(' ');
    //reset word index
    wordIndex = 0;

    //UI updates
    //create an array of span elemetns so we can set a class
    const spanWords = words.map(function(word) { return `<span>${word} </span>` });
    //convert into string and set as innerHTML on quote idsplay
    sentenceElement.innerHTML = spanWords.join('');
    //highlight first word
    sentenceElement.childNodes[0].className = 'highlight';
    //clear any prio messages
    messageElement.innerText = '';

    //setup the texbox
    //clear textbox
    typedValueElement.value = '';
    //set focus
    typedValueElement.focus();
    // set event handler

    //start the timer
    startTime = new Date().getTime();




});

//typing

typedValueElement.addEventListener('input', () => {

    //get current word
    const currentWord = words[wordIndex];
    //get current value
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length - 1) {
        //end of sentence
        //display success
        const elapsedTime = new Date().getTime() - startTime;
        const message = `You finished in ${elapsedTime / 1000} seconds.`;
        messageElement.innerText = message;

    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        //end of word
        //clear typedvaluelement for new word
        typedValueElement.value = '';
        //next word
        wordIndex++;
        //reset class name for all elements in sentence
        for (const wordElement of sentenceElement.childNodes) {
            wordElement.className = '';

        }
        //highlight new word
        sentenceElement.childNodes[wordIndex].className = 'highlight';

    } else if (currentWord.startsWith(typedValue)) {
        //currently correct
        //highlight next word
        typedValueElement.className = '';

    } else {
        //error state
        typedValueElement.className = 'error';
    }



});


//seems like i need to use SQL or any other database to be able to add new sentences manually


//NEED TO ctrl + f5 to clear cache if typing game does not work
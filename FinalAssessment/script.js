const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";
const typeDisplay = document.getElementById("typeDisplay");
const typeInput = document.getElementById("type-input");
const timer = document.getElementById("timer")

const typeSound = new Audio("./audio/typing-sound.mp3");
const wrongSound = new Audio("./audio/wrong.mp3");
const correctSound = new Audio("./audio/correct.mp3");

//get random info
function GetRandomSenetence() {
    return fetch(RANDOM_SENTENCE_URL_API)
    .then((response) => response.json()).then((data)=>data.content);
}

//check if the input text is correct or not

typeInput.addEventListener("input",()=>{

    //add the sound
    typeSound.play();
    typeSound.currentTime = 0;

    const setenceArray = typeDisplay.querySelectorAll("span");
    const arrayValue = typeInput.value.split("");
    let correct = true;
    setenceArray.forEach((characterSpan, index) =>{
        if((arrayValue[index] == null)){
            characterSpan.classList.remove("correct");
            characterSpan.classList.remove("incorrect");
            correct = false;
        }
        else if(characterSpan.innerText == arrayValue[index]){
            characterSpan.classList.add("correct");
            characterSpan.classList.remove("incorrect");
        } 
        else{
            characterSpan.classList.add("incorrect");
            characterSpan.classList.remove("correct");
        
            wrongSound.volume = 0.3;
            wrongSound.play();
            wrongSound.currentTime = 0;

            correct = false;
        }
    });
    if(correct == true){
        correctSound.play();
        correctSound.currentTime = 0;
        RenderNextSentence();
    }
});





//display the random senetences
async function RenderNextSentence(){
    const sentence = await GetRandomSenetence();
    console.log(sentence);
    typeDisplay.innerText = "";
    //split each sentence into span tag

    let oneText = sentence.split("");
  
    oneText.forEach((character) => {
        const characterSpan = document.createElement("span");
        characterSpan.innerText = character;

        typeDisplay.appendChild(characterSpan);
        //characterSpan.classList.add("correct");
    });

    //clear the input box
    typeInput.value = "";
    StartTimer();
}

let startTime; 
let originTime = 30;
function StartTimer(){
    timer.innerText = originTime;
    startTime = new Date();
    setInterval(() =>{
        timer.innerText = originTime - getTimerTime();
        if(timer.innerText <=0) TimeUp();
    }, 1000);
}

function getTimerTime(){
    return Math.floor((new Date() - startTime) / 1000);
}

function TimeUp(){
    RenderNextSentence();
}

RenderNextSentence();
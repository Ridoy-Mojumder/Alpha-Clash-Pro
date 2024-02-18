
function continueGame() {
    const alphabet = getRandomAlphabet();
    document.getElementById('current-alphabet').innerText = alphabet.toUpperCase();
    setBackgroundColor(alphabet);
}


document.addEventListener('keyup', function (element) {
    const randomElement = document.getElementById('current-alphabet').innerText.toLocaleLowerCase();
    const playerPress = element.key;
    if (randomElement === playerPress) {
        continueGame();
        removeBackgroundColor(randomElement);

        const currentScore = getTextElementValue('current-score');
        const updateScore = currentScore + 1;
        setTextElementValue('current-score', updateScore);

    } else {
        const currentLife = getTextElementValue('current-life');
        const updateLife = currentLife - 1;
        setTextElementValue('current-life', updateLife);


        if (updateLife === 0) {
            gameOver();

        }
    }

})



function play() {

    // hide everything
    hiddenElementById("home");
    hiddenElementById("score");
    removeElementById("play-ground");

    // set value
    setTextElementValue('current-life', 5);
    setTextElementValue('current-score', 0);


    continueGame()

}

function gameOver() {
    hiddenElementById("play-ground");
    removeElementById("score");


    const lastScore = getTextElementValue('current-score');
    console.log(lastScore);
    setTextElementValue('final-score', lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    console.log(currentAlphabet);
    removeBackgroundColor(currentAlphabet);
}
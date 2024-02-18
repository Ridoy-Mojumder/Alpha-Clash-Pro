function hiddenElementById(elementId){
    document.getElementById(elementId).classList.add("hidden")
}
function removeElementById(removeId){
    document.getElementById(removeId).classList.remove('hidden')
}

function setBackgroundColor(elementId){
    document.getElementById(elementId).classList.add('bg-orange-400')
}

function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    if (element) {
        console.log(element);
        element.classList.remove('bg-orange-400');
    } else {
        console.error("Element not found with ID:", elementId);
    }
}

function getElementTextById(elementId){
    const element=document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getTextElementValue(elementId){
    const element = document.getElementById(elementId)
    const currentElement=element.innerText;
    const value=parseInt(currentElement);
    return value;
}

function setTextElementValue(elementId, value){
    const element=document.getElementById(elementId);
    element.innerText=value;
}


function getRandomAlphabet(){
    const alphabetString='abcdefghigklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('');

    const randomNumber=Math.random()*25;
    const index =Math.round(randomNumber);

    const alphabet= alphabets[index];
    console.log(index,alphabet);
    return alphabet;


}
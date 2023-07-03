


// TODO 1: Declare & assign variables pointing to the corresponding element(s)
// statement should be the "statement" div
// optionButtons should be all the elements within the "options" div
// explanation should be the "explanation" div
const statement = document.getElementById("statement");
const optionButtons = document.querySelectorAll("#options *")
const nextButton = document.querySelector(".nextBtn")
var factsIndex = 0;
// TODO 2: Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation
const facts = [
  {
    statement: "[] == []",
    answer: false,
    explanation: "If you pick true, study how non primitive vs primitive values are stored and how JS handle it."
  },
  {
    statement: "pure functions in JS always return a value, and its depends of their environment",
    answer: false,
    explanation: "they ALWAYS return the SAME value if you provides them with the same input."
  },
  {
    statement: "const [] let me change their elements values?",
    answer: true,
    explanation: "yeah because objects in js are mutables, const wont let us to reassign that."
  }

]


// TODO 3: Set the text of the statement element to the fact's statement
function setQuestion(fact) {
  statement.textContent = fact.statement;
  disable(nextButton);
}

setQuestion(facts[factsIndex])


// TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
// disable(button) should set the button element's attribute "disabled" to the value ""
// enable(button) should remove the attribute "disabled" from the button element
function enable(button) {
  button.removeAttribute("disabled");
}
function disable(button) {
  button.setAttribute("disabled", "")
}


// TODO 5: Declare an isCorrect function that compares a guess to the right answer
// isCorrect(guess) should return true if the guess matches the fact's answer

function isCorrect(guess, fact) {
  return guess === fact.answer.toString();
}
// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
// TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element
optionButtons.forEach(button => {
  button.addEventListener("click", (guessBtnEvent) => {

    document.getElementById("explanation").innerHTML = `<p>${facts[factsIndex].explanation}</p>`;
    disableButtons(optionButtons);
    const match = isCorrect(guessBtnEvent.target.textContent, facts[factsIndex]);
    console.log(match);
    guessBtnEvent.target.classList.add(match ? "correct" : "incorrect");
    enable(nextButton);
  })
})
nextButton.addEventListener("click", () => {
  factsIndex++;
  resetBtnsStyles();
  if (factsIndex > facts.length - 1) {
    disable(nextButton);
    statement.textContent = "GAME FINISHED";
    
  } else {
    enableButtons(optionButtons);
    setQuestion(facts[factsIndex])
  }
})

// TODO 7: Within the event handler function,
// Use a for loop to disable all the option buttons
const disableButtons = (buttons) => {
  buttons.forEach(b => disable(b))
}
const enableButtons = (buttons) => {
  buttons.forEach(b => enable(b))
}
const resetBtnsStyles = () => {
  optionButtons.forEach(btn => btn.classList = [])
}



// TODO 8: Within the event handler function,
// Get the guessed value from the clicked button
// Use a conditional to compare the guess to the fact's answer
// and add the "correct"/"incorrect" class as appropriate



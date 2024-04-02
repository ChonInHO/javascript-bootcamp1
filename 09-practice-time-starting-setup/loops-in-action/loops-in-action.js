//First Example: Sum numbers

const calculateSumBtnElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumInputElement = document.getElementById("user-number");
  const enteredNum = userNumInputElement.value;

  let sumUpToNum = 0;

  for (let i = 0; i <= enteredNum; i++) {
    sumUpToNum = sumUpToNum + i;
  }

  const outputResultElement = document.getElementById("calculated-sum");

  outputResultElement.textContent = sumUpToNum;
  outputResultElement.style.display = "block";
}

calculateSumBtnElement.addEventListener("click", calculateSum);

//HIGHLIGHT LINK

const highlightLinksBtnElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksBtnElement.addEventListener("click", highlightLinks);

//DISPLAY USER DATA

const dummyUserData = {
  firstName: "Yan",
  lastName: "Ho",
  age: 26,
};

const displayUserDataBtnElement = document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = "";

  for (const key in dummyUserData) {
    const newUserDataListElement = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    newUserDataListElement.textContent = outputText;
    outputDataElement.append(newUserDataListElement);
  }
}

displayUserDataBtnElement.addEventListener("click", displayUserData);

//STATISTICS

const rollDiceBtnElement = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

function deriveNumberOfDiceRolls() {
  const targetNumInputElement = document.getElementById("user-target-number");
  const diceRollListElement = document.getElementById("dice-rolls");

  const enteredNum = targetNumInputElement.value;
  diceRollListElement.innerHTML = "";

  let hasRolledTargetNum = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNum) {
    const rolledNum = rollDice();
    // if (rolledNum == enteredNum) {
    //   hasRolledTargetNum = true;
    // }
    numberOfRolls++;
    const newRollListElement = document.createElement("li");
    const outputText = "Roll" + numberOfRolls + ": " + rolledNum;
    newRollListElement.textContent = outputText;
    diceRollListElement.append(newRollListElement);
    hasRolledTargetNum = rolledNum == enteredNum;
  }

  const outputTotalRollElement = document.getElementById("output-total-rolls");
  const outputTargetNumElement = document.getElementById(
    "output-target-number"
  );

  outputTargetNumElement.textContent = enteredNum;
  outputTotalRollElement.textContent = numberOfRolls;
}

rollDiceBtnElement.addEventListener("click", deriveNumberOfDiceRolls);

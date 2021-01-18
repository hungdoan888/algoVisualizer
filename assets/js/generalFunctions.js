// ---------------
// Get Container -
// ---------------

const container = document.querySelector(".data-container");
var codeRunning = false;  // play, step
var stepClicked = false;  // step
var waitingForStep = true;  // step
var pauseClicked = false;  //pause
var reset = false;  // reset

// ---------------
// Random Blocks -
// ---------------

function randomBlocks() {

  console.log("Random Pressed")

  // Generate Random Blocks
  var num = parseInt(document.getElementById("random").value);

  if (!Number.isInteger(num)) {
    alert("Invalid Input: Integer Required");
    return;
  }

  if (num < 1 | num > 100) {
    alert("Invalid Input: Please select an integer bewtween 1 and 100");
    return;
  }

  var array = [];
  for (let i = 0; i < num; i++) {
    array.push(Math.floor(Math.random() * 100));
  }

  generateBlocks(array);
  changeLabelsToWhiteIfMoreThan20();
}

function changeLabelsToWhiteIfMoreThan20 () {
  let blockLabel = document.querySelectorAll(".blockLabel");
  if (blockLabel.length <= 20) {
    return 
  }

  for (let i = 0; i < blockLabel.length; i++) {
    blockLabel[i].style.color = "#FFF";
  }
}

// --------------
// Array Blocks -
// --------------

function arrayBlocks() {

  console.log("Array Pressed")

  var array = document.getElementById("array").value;
  // Remove backets if they are there
  array = array.replace("[", "")
  array = array.replace("]", "")

  array = array.split(",")
  for (let i = 0; i < array.length; i++) {
    const value = parseInt(array[i])
    if (isNaN(value)) {
      alert("Invalid Array");
      return
    }
    array[i] = value
  }

  if (array.length < 1 | array.length > 100) {
    alert("Invalid Input: Array must have length between 1 and 100");
    return;
  }

  generateBlocks(array);
  changeLabelsToWhiteIfMoreThan20();
}

// -----------------
// Generate Blocks -
// -----------------

async function generateBlocks(array) {

  // Wait for previous code to return
  reset = true;  // reset
  stepClicked = false;  // step
  waitingForStep = false;  // step
  pauseClicked = false;  // pause
  while (codeRunning) {
    await waiting()
  }

  // Resetting Variables
  codeRunning = false;  // play, step
  waitingForStep = true;  // step
  reset =false;  // reset
  
  // Delete all nodes in container
  deleteNodesInContainer();

  for (let i = 0; i < array.length; i++) {
    const value = array[i] / Math.max(...array) * 100;

    // Block
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.width = 100 / array.length + "%";

    // Color Bar
    const colorBar = document.createElement("div");
    colorBar.classList.add("colorBar");
    colorBar.style.height = value + "%";
    block.appendChild(colorBar);

    // Block Label
    const blockLabel = document.createElement("div");
    blockLabel.classList.add("blockLabel");
    blockLabel.innerHTML = array[i];
    block.appendChild(blockLabel);

    // Container
    container.appendChild(block);
  }
}

function deleteNodesInContainer() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function initialBlocksOnStartUp() {
  var array = []
  for (let i = 1; i <= 20; i++) {
    array.push(i)
  }
  generateBlocks(array)
}

// -------------------
// Change Code Color -
// -------------------

function changeCodeColor(id) {

  let codeLines = document.querySelectorAll(".codeSection");
  let numLinesCode = document.getElementById("codeSection").childElementCount;
  for (let i = 0; i < numLinesCode; i++) {
    document.getElementById("code" + i).style.backgroundColor  = "#f2f2f2";
    document.getElementById("code" + i).style.color = "#a6a6a6";
  }

  // Check to see if display active lines is checked
  if (document.getElementById("showLines").checked) {
    document.getElementById(id).style.backgroundColor  = "#3a424a";
    document.getElementById(id).style.color = "#b0e686";
  }
}

// ------------------------------
// Change Code Color With Delay -
// ------------------------------

async function changeCodeColorWithDelay(id) {

  // reset
  if (reset) {
    return
  }

  // If in step mode, wait for next step to be clicked
  if (stepClicked) {
    while (waitingForStep) {
      await waiting()
    }
    waitingForStep = true
  }

  // Paused
  if (pauseClicked) {
    while (waitingForStep) {
      await waiting()
    }
    waitingForStep = true
  }

  // Delay
  speedTime();

  // Change Color of Bars
  return new Promise(resolve =>
    setTimeout(() => {
      changeCodeColor(id);
      resolve();
    }, delay)
  );
}


function swap(el2, el1) {
  // Swap
  container.insertBefore(el2, el1);
}

// -------
// Speed -
// -------

function speedTime() {

  let value = document.getElementById("Speed").value;
  if (value == "x1") {
    delay = 200;
  } else if (value == "x2") {
    delay = 100;
  } else if (value == "x4") {
    delay = 50;
  } else if (value == "x8") {
    delay = 25;
  } else {
    delay = 400;
  }
}

// --------
// Timing -
// --------

// play
function playClickedButton(function2play) {
  stepClicked = false;
  waitingForStep = false;
  pauseClicked = false;
  console.log("Play Clicked");

  if (!codeRunning) {
    function2play();
    codeRunning = true;
  }
}

// waiting function
function waiting() {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, 10)
  );
}

function stepClickedButton(function2play) {
  stepClicked = true;
  waitingForStep = false;
  pauseClicked = false;
  console.log("Step Clicked");

  if (!codeRunning) {
    function2play();
    codeRunning = true;
  }
}

// pause
function pauseClickedButton() {
  pauseClicked = true;
  waitingForStep = true;
  console.log("Pause Clicked");
}

// reset
function resetClickedButton() {
  console.log("Reset Pressed")
  reset = true;
  initialBlocksOnStartUp();
}

// ------
// Main -
// ------

initialBlocksOnStartUp();
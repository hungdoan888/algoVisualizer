// -------------
// Bubble Sort -
// -------------

async function bubbleSort() {

  // Define Variables
  let isSorted = false;
  let counter = 0;
  let blocks = document.querySelectorAll(".block");
  let colorBar = document.querySelectorAll(".colorBar");
  let blockLabel = document.querySelectorAll(".blockLabel");

  await changeCodeColorWithDelay("code0")
  await changeCodeColorWithDelay("code1")
  await changeCodeColorWithDelay("code2")
  await changeCodeColorWithDelay("code3")

  while (!isSorted) {
    isSorted = true;

    await changeCodeColorWithDelay("code4")
    await changeCodeColorWithDelay("code5")

    for (let i = 0; i < blocks.length - 1 - counter; i += 1) {
      
      // Color boxes being Worked on Red
      colorBar[i].style.backgroundColor = "#FF4949";
      colorBar[i+1].style.backgroundColor = "#FF4949";

      // Swap if block[i] > block[i+1]
      await changeCodeColorWithDelay("code6")
      if (Number(blockLabel[i].innerHTML) > Number(blockLabel[i+1].innerHTML)) {
        swap(blocks[i+1], blocks[i]) 
        blocks = document.querySelectorAll(".block");
        colorBar = document.querySelectorAll(".colorBar");
        blockLabel = document.querySelectorAll(".blockLabel"); 
        isSorted = false

        await changeCodeColorWithDelay("code7")
        await changeCodeColorWithDelay("code8")
      }

      // Change Color back to blue
      colorBar[i].style.backgroundColor = "#58B7FF";
      colorBar[i+1].style.backgroundColor = "#58B7FF";
    }

    // Color the last element visited green
    colorBar[blocks.length - 1 - counter].style.backgroundColor = "#13CE66";
    counter += 1

    await changeCodeColorWithDelay("code9")
  }

  // Color remaining elements green
  for (let i = blocks.length - 1 - counter; i >= 0; i -= 1) {
    colorBar[i].style.backgroundColor = "#13CE66";
  }

await changeCodeColorWithDelay("code10")
}

// ---------------
// Get Container -
// ---------------

const container = document.querySelector(".data-container");
var codeRunning = false;  // play, step
var stepClicked = false;  // step
var waitingForStep = true;  // step
var pauseClicked = false;  //pause

// ---------------
// Random Blocks -
// ---------------

function randomBlocks() {
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

function generateBlocks(array) {

  // Resetting Variables
  codeRunning = false;  // play, step
  stepClicked = false;  // step
  waitingForStep = true;  // step
  pauseClicked = false;  //pause
  
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
function play1() {
  stepClicked = false;
  waitingForStep = false;
  pauseClicked = false;
  console.log("Play Clicked")

  if (!codeRunning) {
    bubbleSort()
    codeRunning = true
  }
}

// step
function waiting() {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, 10)
  );
}

function stepClicked1() {
  stepClicked = true;
  waitingForStep = false;
  pauseClicked = false;
  console.log("Step Clicked")

  if (!codeRunning) {
    bubbleSort()
    codeRunning = true;
  }
}

// pause
function pauseClicked1() {
  pauseClicked = true;
  waitingForStep = true;
  console.log("Pause Clicked")
}

// reset
function reset1() {
  window.location.reload();
}

// ------
// Main -
// ------

initialBlocksOnStartUp();
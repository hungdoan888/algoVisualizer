// ---------------
// Get Container -
// ---------------

const container = document.querySelector(".data-container");

// -----------------
// Generate Blocks -
// -----------------

function generateBlocks(num = 20) {

  // Delete all nodes in container
  deteNodesInContainer();

  if (num && typeof num !== "number") {
    alert("First argument must be a typeof Number");
    return;
  }

  for (let i = 0; i < num; i++) {
    const value = Math.floor(Math.random() * 100);

    // Block
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.width = 90 / num + "%";  // leave (100 - 90 = 10%) for margins

    // Color Bar
    const colorBar = document.createElement("div");
    colorBar.classList.add("colorBar");
    colorBar.style.height = value + "%";
    block.appendChild(colorBar);

    // Block Label
    const blockLabel = document.createElement("div");
    blockLabel.classList.add("blockLabel");
    blockLabel.innerHTML = value;
    block.appendChild(blockLabel);

    // Container
    container.appendChild(block);
  }
}

function deteNodesInContainer() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

// -------------
// Bubble Sort -
// -------------

async function bubbleSort() {

  // Define Variables
  let delay = 100
  let isSorted = false;
  let counter = 0;
  let blocks = document.querySelectorAll(".block");
  let colorBar = document.querySelectorAll(".colorBar");
  let blockLabel = document.querySelectorAll(".blockLabel");

  await changeCodeColorWithDelay("code0", delay)
  await changeCodeColorWithDelay("code1", delay)
  await changeCodeColorWithDelay("code2", delay)
  await changeCodeColorWithDelay("code3", delay)

  while (!isSorted) {
    isSorted = true;

    await changeCodeColorWithDelay("code4", delay)
    await changeCodeColorWithDelay("code5", delay)

    for (let i = 0; i < blocks.length - 1 - counter; i += 1) {
      
      // Color boxes being Worked on Red
      colorBar[i].style.backgroundColor = "#FF4949";
      colorBar[i+1].style.backgroundColor = "#FF4949";

      // Swap if block[i] > block[i+1]
      await changeCodeColorWithDelay("code6", delay)
      if (Number(blockLabel[i].innerHTML) > Number(blockLabel[i+1].innerHTML)) {
        swap(blocks[i+1], blocks[i]) 
        blocks = document.querySelectorAll(".block");
        colorBar = document.querySelectorAll(".colorBar");
        blockLabel = document.querySelectorAll(".blockLabel"); 
        isSorted = false

        await changeCodeColorWithDelay("code7", delay)
        await changeCodeColorWithDelay("code8", delay)
      }

      // Change Color back to blue
      colorBar[i].style.backgroundColor = "#58B7FF";
      colorBar[i+1].style.backgroundColor = "#58B7FF";
    }

    // Color the last element visited green
    colorBar[blocks.length - 1 - counter].style.backgroundColor = "#13CE66";
    counter += 1

    await changeCodeColorWithDelay("code9", delay)
  }

  // Color remaining elements green
  for (let i = blocks.length - 1 - counter; i >= 0; i -= 1) {
    colorBar[i].style.backgroundColor = "#13CE66";
  }

await changeCodeColorWithDelay("code10", delay)
}


function changeCodeColor(id) {
  let codeLines = document.querySelectorAll(".codeSection");
  for (let i = 0; i < 10; i++) {
    document.getElementById("code" + i).style.backgroundColor  = "#f2f2f2";
    document.getElementById("code" + i).style.color = "#a6a6a6";
  }
  document.getElementById(id).style.backgroundColor  = "#3a424a";
  document.getElementById(id).style.color = "#b0e686";
}


function changeCodeColorWithDelay(id, delay) {
  return new Promise(resolve =>
    setTimeout(() => {
      changeCodeColor(id)
      resolve();
    }, delay)
  );
}


function swap(el2, el1) {
    container.insertBefore(el2, el1);
}

// ------
// Main -
// ------

document.getElementById("randomButton").onclick = generateBlocks();


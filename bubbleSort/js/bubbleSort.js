// ---------------
// Get Container -
// ---------------

const container = document.querySelector(".data-container");

// -----------------
// Generate Blocks -
// -----------------

function generateBlocks(num = 20) {
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
    const blockLabel = document.createElement("label");
    blockLabel.classList.add("blockLabel");
    blockLabel.innerHTML = value;
    block.appendChild(blockLabel);

    // Container
    container.appendChild(block);
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

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < blocks.length - 1 - counter; i += 1) {
      
      // Color boxes being Worked on Red
      colorBar[i].style.backgroundColor = "#FF4949";
      colorBar[i+1].style.backgroundColor = "#FF4949";

      // Swap if block[i] > block[i+1]
      if (Number(blockLabel[i].innerHTML) > Number(blockLabel[i+1].innerHTML)) {
        swap(blocks[i+1], blocks[i]) 
        blocks = document.querySelectorAll(".block");
        colorBar = document.querySelectorAll(".colorBar");
        blockLabel = document.querySelectorAll(".blockLabel"); 
        isSorted = false
      }

      // Create delay in bubble sort so user can see what is happening
      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      // Change Color back to blue
      colorBar[i].style.backgroundColor = "#58B7FF";
      colorBar[i+1].style.backgroundColor = "#58B7FF";
    }

    // Color the last element visited green
    colorBar[blocks.length - 1 - counter].style.backgroundColor = "#13CE66";
    counter += 1
  }

  // Color remaining elements green
  for (let i = blocks.length - 1 - counter; i >= 0; i -= 1) {
    colorBar[i].style.backgroundColor = "#13CE66";
  }
}


function swap(el2, el1) {
    container.insertBefore(el2, el1);
}

// ------
// Main -
// ------

generateBlocks(num = 20)
bubbleSort()



const container = document.querySelector(".data-container");

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

function swap(el1, el2) {
  container.insertBefore(el2, el1);
}

function bubbleSort() {
  let isSorted = false;
  let counter = 0;
  let blocks = document.querySelectorAll(".block");
  let blockLabel = document.querySelectorAll(".blockLabel");

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < blocks.length - 1 - counter; i += 1) {
      console.log(blockLabel[i].innerHTML, blockLabel[i+1].innerHTML)
      if (Number(blockLabel[i].innerHTML) > Number(blockLabel[i+1].innerHTML)) {
        console.log("Entered")
        container.insertBefore(blocks[i+1], blocks[i]);
        blocks = document.querySelectorAll(".block");
        blockLabel = document.querySelectorAll(".blockLabel");
        isSorted = false
      }
    }
    counter += 1
  }
}

generateBlocks(num = 20)
bubbleSort()


// function swap(el1, el2) {
//   return new Promise(resolve => {
//     const style1 = window.getComputedStyle(el1);
//     const style2 = window.getComputedStyle(el2);

//     const transform1 = style1.getPropertyValue("transform");
//     const transform2 = style2.getPropertyValue("transform");

//     el1.style.transform = transform2;
//     el2.style.transform = transform1;

//     // Wait for the transition to end!
//     window.requestAnimationFrame(function() {
//       setTimeout(() => {
//         container.insertBefore(el2, el1);
//         resolve();
//       }, 250);
//     });
//   });
// }

// async function bubbleSort(delay = 100) {
//   if (delay && typeof delay !== "number") {
//     alert("sort: First argument must be a typeof Number");
//     return;
//   }
//   let blocks = document.querySelectorAll(".block");
//   for (let i = 0; i < blocks.length - 1; i += 1) {
//     for (let j = 0; j < blocks.length - i - 1; j += 1) {
//       blocks[j].style.backgroundColor = "#FF4949";
//       blocks[j + 1].style.backgroundColor = "#FF4949";

//       await new Promise(resolve =>
//         setTimeout(() => {
//           resolve();
//         }, delay)
//       );

//       const value1 = Number(blocks[j].childNodes[0].innerHTML);
//       const value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

//       if (value1 > value2) {
//         await swap(blocks[j], blocks[j + 1]);
//         blocks = document.querySelectorAll(".block");
//       }

//       blocks[j].style.backgroundColor = "#58B7FF";
//       blocks[j + 1].style.backgroundColor = "#58B7FF";
//     }

//     blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
//   }
// }

// generateBlocks(num = 20)
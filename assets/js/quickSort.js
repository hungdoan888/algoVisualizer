// ----------------
// Insertion Sort -
// ----------------

async function quickSort() {
  // Define Variables
  await changeCodeColorWithDelay("code0");
  let blocks = document.querySelectorAll(".block");
  let colorBar = document.querySelectorAll(".colorBar");
  await changeCodeColorWithDelay("code1");
  await changeCodeColorWithDelay("code3");
  await quickSortHelper(0, blocks.length - 1);
  await changeCodeColorWithDelay("code2");
  // Color remaining elements green
  for (let i = blocks.length - 1; i >= 0; i -= 1) {
    colorBar[i].style.backgroundColor = "#13CE66";
  }
  codeRunning = false;
}

async function quickSortHelper(startIdx, endIdx) {

  // Define Variables
  var blocks = document.querySelectorAll(".block");
  var colorBar = document.querySelectorAll(".colorBar");
  var blockLabel = document.querySelectorAll(".blockLabel");

  await changeCodeColorWithDelay("code4")
  if (startIdx >= endIdx) {
    await changeCodeColorWithDelay("code5")
    return 
  }

  await changeCodeColorWithDelay("code6")
  var pivotIdx = startIdx;
  colorBar[pivotIdx].style.backgroundColor = "#FF4949";  // Color boxes being Worked on Red

  await changeCodeColorWithDelay("code7")
  var leftIdx = startIdx + 1;
  colorBar[leftIdx].style.backgroundColor = "#FF4949";  // Color boxes being Worked on Red

  await changeCodeColorWithDelay("code8")
  var rightIdx = endIdx;
  colorBar[rightIdx].style.backgroundColor = "#FF4949";  // Color boxes being Worked on Red

  await changeCodeColorWithDelay("code9")

  while (rightIdx >= leftIdx) {
    await changeCodeColorWithDelay("code10")
    if (Number(blockLabel[leftIdx].innerHTML) > Number(blockLabel[pivotIdx].innerHTML) &&
        Number(blockLabel[rightIdx].innerHTML) < Number(blockLabel[pivotIdx].innerHTML)) {
      await changeCodeColorWithDelay("code11")
      await changeCodeColorWithDelay("code24")
      await changeCodeColorWithDelay("code25")
      swap1(leftIdx, rightIdx)
      if (reset) {  // reset comes from gernal functions
        console.log("Function returned");
        codeRunning = false;  // This variable comes from general functions
        return
      }
      var blocks = document.querySelectorAll(".block");
      var colorBar = document.querySelectorAll(".colorBar");
      var blockLabel = document.querySelectorAll(".blockLabel");
    }
    await changeCodeColorWithDelay("code12")
    if (Number(blockLabel[leftIdx].innerHTML) <= Number(blockLabel[pivotIdx].innerHTML)) {
      await changeCodeColorWithDelay("code13")
      colorBar[leftIdx].style.backgroundColor = "#58B7FF";  // Change Color back to blue
      leftIdx += 1
      if (leftIdx < endIdx + 1) {
        colorBar[leftIdx].style.backgroundColor = "#FF4949";  // Color boxes being Worked on Red
      }
    }

    await changeCodeColorWithDelay("code14")
    if (Number(blockLabel[rightIdx].innerHTML) >= Number(blockLabel[pivotIdx].innerHTML)) {
      await changeCodeColorWithDelay("code15")
      colorBar[rightIdx].style.backgroundColor = "#58B7FF";  // Change Color back to blue
      rightIdx -= 1
      colorBar[rightIdx].style.backgroundColor = "#FF4949";  // Color boxes being Worked on Red
    }
  } 
  await changeCodeColorWithDelay("code16")
  await changeCodeColorWithDelay("code24")
  await changeCodeColorWithDelay("code25")
  swap1(pivotIdx, rightIdx)
  if (reset) {  // reset comes from gernal functions
    console.log("Function returned");
    codeRunning = false;  // This variable comes from general functions
    return
  }
  var blocks = document.querySelectorAll(".block");
  var colorBar = document.querySelectorAll(".colorBar");
  var blockLabel = document.querySelectorAll(".blockLabel");

  await changeCodeColorWithDelay("code17")
  leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
  await changeCodeColorWithDelay("code18")
  colorBar[rightIdx].style.backgroundColor = "#13CE66";  // Color boxes being Worked on Green
  colorBar[pivotIdx].style.backgroundColor = "#58B7FF";  // Change Color back to blue
  if (leftIdx < endIdx + 1) {
    colorBar[leftIdx].style.backgroundColor = "#58B7FF";  // Change Color back to blue
  }
  if (leftSubarrayIsSmaller) {
    await changeCodeColorWithDelay("code19")
    await quickSortHelper(startIdx, rightIdx - 1);
    await changeCodeColorWithDelay("code20")
    await quickSortHelper(rightIdx + 1, endIdx);
  } else {
    await changeCodeColorWithDelay("code21")
    await changeCodeColorWithDelay("code22")
    await quickSortHelper(rightIdx + 1, endIdx);
    await changeCodeColorWithDelay("code23")
    await quickSortHelper(startIdx, rightIdx - 1);
  } 
}

function swap1(idx1, idx2) {
  var blocks = document.querySelectorAll(".block");
  var colorBar = document.querySelectorAll(".colorBar");
  var blockLabel = document.querySelectorAll(".blockLabel");
  swap(blocks[idx1], blocks[idx2]);
  var blocks = document.querySelectorAll(".block");
  var colorBar = document.querySelectorAll(".colorBar");
  var blockLabel = document.querySelectorAll(".blockLabel");
  swap(blocks[idx2], blocks[idx1]);
}
// ----------------
// Selection Sort -
// ----------------

async function selectionSort() {

  // Define Variables
  let blocks = document.querySelectorAll(".block");
  let colorBar = document.querySelectorAll(".colorBar");
  let blockLabel = document.querySelectorAll(".blockLabel");

  await changeCodeColorWithDelay("code0")
  await changeCodeColorWithDelay("code1")

  for (let i = 0; i < blocks.length; i++) {
    await changeCodeColorWithDelay("code2")
    await changeCodeColorWithDelay("code3")
    let smallestIdx = i;
    colorBar[smallestIdx].style.backgroundColor = "#FF4949";  // Color boxes being Worked on Red

    for (let j = i + 1; j < blocks.length; j++) {
  
      colorBar[j].style.backgroundColor = "#FF4949";  // Color boxes being Worked on Red
      await changeCodeColorWithDelay("code4")

      if (Number(blockLabel[j].innerHTML) < Number(blockLabel[smallestIdx].innerHTML)) {
        await changeCodeColorWithDelay("code5")
        colorBar[smallestIdx].style.backgroundColor = "#58B7FF";  // Color old smallest Idx blue
        colorBar[j].style.backgroundColor = "#FF4949";  // Color new smallest Idx red
        smallestIdx = j;
      }
      colorBar[j].style.backgroundColor = "#58B7FF";  // Change index j back to blue
      colorBar[smallestIdx].style.backgroundColor = "#FF4949";  // keep smallest index red
    }

    colorBar[smallestIdx].style.backgroundColor = "#13CE66";  // Change smallest idx to green before swap
    await changeCodeColorWithDelay("code6")
    swap(blocks[smallestIdx], blocks[i])

    if (reset) {  // reset comes from gernal functions
      console.log("Function returned");
      codeRunning = false;  // This variable comes from general functions
      return
    }

    // Redefine blocks and block labels
    blocks = document.querySelectorAll(".block");
    colorBar = document.querySelectorAll(".colorBar");
    blockLabel = document.querySelectorAll(".blockLabel");

    colorBar[smallestIdx].style.backgroundColor = "#58B7FF";  // Color smallest Idx blue
    colorBar[i].style.backgroundColor = "#13CE66";  // Color ith index green
  }
  await changeCodeColorWithDelay("code7")
  codeRunning = false;  // This variable comes from general functions
}
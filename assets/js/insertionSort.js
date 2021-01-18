// ----------------
// Insertion Sort -
// ----------------

async function insertionSort() {

  // Define Variables
  let blocks = document.querySelectorAll(".block");
  let colorBar = document.querySelectorAll(".colorBar");
  let blockLabel = document.querySelectorAll(".blockLabel");

  await changeCodeColorWithDelay("code0")
  await changeCodeColorWithDelay("code1")

  // Change first block to green
  colorBar[0].style.backgroundColor = "#13CE66";

  for (let i = 1; i < blocks.length; i += 1) {
    
    await changeCodeColorWithDelay("code2")
    await changeCodeColorWithDelay("code3")

    let j = i;
    while (j > 0 && Number(blockLabel[j].innerHTML) < Number(blockLabel[j - 1].innerHTML)) {

      // Color boxes being Worked on Red
      colorBar[j].style.backgroundColor = "#FF4949";
      colorBar[j-1].style.backgroundColor = "#FF4949";

      // Swap if block[j] < block[j-1]
      await changeCodeColorWithDelay("code4");
      await changeCodeColorWithDelay("code5");

      // swap
      swap(blocks[j], blocks[j-1]);

      if (reset) {  // reset comes from gernal functions
        console.log("Function returned");
        codeRunning = false;  // This variable comes from general functions
        return
      }

      // Change Color to green
      colorBar[j].style.backgroundColor = "#13CE66";
      colorBar[j-1].style.backgroundColor = "#13CE66";

      j -= 1;

      // Redefine blocks and block labels
      blocks = document.querySelectorAll(".block");
      colorBar = document.querySelectorAll(".colorBar");
      blockLabel = document.querySelectorAll(".blockLabel");
    }
      // Color remaining elements green
    for (let j = i; j >= 0; j -= 1) {
      colorBar[j].style.backgroundColor = "#13CE66";
    }
  }
  await changeCodeColorWithDelay("code6")
  codeRunning = false;  // This variable comes from general functions
}
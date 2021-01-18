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

          if (reset) {  // reset comes from gernal functions
          console.log("Function returned");
          codeRunning = false;  // This variable comes from general functions
          return
        }

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
codeRunning = false;  // This variable comes from general functions
}
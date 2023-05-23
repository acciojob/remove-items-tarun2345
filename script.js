//your JS code here. If required.
let btn = document.getElementById('btn');

btn.addEventListener("click",()=>{
    const selectElement = document.getElementById('colorSelect');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
  
    if (selectedOption) {
      selectElement.removeChild(selectedOption);
    }
})
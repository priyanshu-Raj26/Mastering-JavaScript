let inp = document.querySelector("input");
let h2 = document.querySelector("h2");

inp.addEventListener("input", function (event) {
    // Filter to allow only a-z, A-Z, and space
    let filteredValue = inp.value.replace(/[^a-zA-Z ]/g, '');
    
    // Update input field with filtered value
    inp.value = filteredValue;
    
    // Update heading with filtered value
    h2.innerText = filteredValue;
});
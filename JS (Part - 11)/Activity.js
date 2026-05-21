let url = "http://universities.hipolabs.com/search?name=india";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value.trim();
    
    if (!state) {
        showError("Please enter a state name!");
        return;
    }
    
    showLoading();
    let collArr = await getcolleges();
    show(collArr, state);
})

// Press Enter to search
document.querySelector("input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        btn.click();
    }
});

function showLoading() {
    let list = document.querySelector("#list");
    list.innerHTML = '<li class="loading">🔍 Searching colleges...</li>';
}

function showError(message) {
    let list = document.querySelector("#list");
    list.innerHTML = `<li class="error">${message}</li>`;
}

function show(collArr, state) {
    let list = document.querySelector("#list");
    list.innerText = "";
    
    let filteredColleges = collArr.filter(clg => 
        clg["state-province"] && 
        clg["state-province"].toLowerCase() === state.toLowerCase()
    );
    
    if (filteredColleges.length > 0) {
        for (const clg of filteredColleges) {
            let li = document.createElement("li");
            li.innerText = clg.name;
            list.appendChild(li);
        }
    } else {
        showError(`❌ No colleges found in "${state}"`);
    }
}

async function getcolleges() {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch (err) {
        console.log(err);
        showError("⚠️ Error fetching data. Please try again!");
        return [];
    }
}
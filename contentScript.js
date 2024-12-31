console.log("Content script loaded");

(() => {
    document.querySelectorAll("input[type='submit']").forEach(ele => 
        createFlashBtn(ele)
    )
})();


function createFlashBtn(ele) {
    submitBtnHeight = ele.offsetHeight;

    const flashBtn = document.createElement('img');
    flashBtn.src = chrome.runtime.getURL("assets/flashIcon.png");
    // flashBtn.src = "https://cdn-icons-png.flaticon.com/512/6645/6645280.png";
    flashBtn.className = ele.className + "FlashBtn";
    flashBtn.title = "Supercharge Form";
    flashBtn.style.height = `${submitBtnHeight}px`;
    flashBtn.style.width = 'auto';

    ele.parentElement.appendChild(flashBtn);
    console.log("Element Added...");

    flashBtn.addEventListener("click", () => {
        processInputTags(ele.closest("form"));
    });
};

function processInputTags(formEle) {
    const dictData = {
        "FirstName": "ABC",
        "LastName": "XYZ",
        "Email": "abc@gmail.com",
        "Company": "IJK",
        "Country": "1234567890",
    }
    const keys = Object.keys(dictData)

    // console.log("---", formEle.className, "---");
    formEle.querySelectorAll("input[type='text']").forEach(inp => {
        const inputLabel = inp.placeholder || inp.name || inp.closest("div").textContent.trim()
        inp.value = dictData[inputLabel]
    })
};
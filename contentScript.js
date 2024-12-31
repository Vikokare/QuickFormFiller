// console.log("Content script loaded");
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
    // console.log("Element Added...");

    flashBtn.addEventListener("click", () => {
        processInputTags(ele.closest("form"));
    });
};

function processInputTags(formEle) {
    const dictData = {
        "first": "ABC",
        "last": "XYZ",
        "name": "ABC XYZ",
        "mail": "abc@gmail.com",
        "company": "IJK",
        "phone": "1234567890",
        "country": "YYY",
        "address": "XXX",
        "message": "___",
    }
    const keys = Object.keys(dictData)

    // console.log("--- Click Event Triggired ---");
    formEle.querySelectorAll("input[type='text'], input[type='email'], input[type='text']:not([type='hidden']), textarea").forEach(inp => {
        const inputLabel = inp.placeholder.toLowerCase() || inp.name.toLowerCase() || inp.closest("div").textContent.toLowerCase().trim()
        for (let key of keys) {
            if (key == inputLabel || inputLabel.includes(key) || key.includes(inputLabel)) {
                inp.value = dictData[key]
            }
        }
    })
};
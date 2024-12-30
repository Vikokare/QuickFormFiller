console.log("Content script loaded");

(() => {
    document.querySelectorAll("input[type='submit']").forEach(e => 
        createFlashBtn(e)
    )
    
    function createFlashBtn(ele) {
        childBtnHeight = ele.offsetHeight;

        const flashBtn = document.createElement('img');
        // flashBtn.src = chrome.runtime.getURL("assets/flashIcon");
        flashBtn.src = "https://cdn-icons-png.flaticon.com/512/6645/6645280.png";
        flashBtn.className = ele.className + "FlashBtn";
        flashBtn.title = "Click to Quickform";
        flashBtn.style.height = `${childBtnHeight}px`
        flashBtn.style.width = 'auto'
    
        ele.parentElement.appendChild(flashBtn);
        console.log("Element Added...");

        flashBtn.addEventListener("click", () => {
            checkFormInput(ele);
        });
    };

    function checkFormInput(ele) {
        console.log("---", ele.className, "---")
    }
})();
document.getElementById("optionsForm").addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    chrome.storage.sync.set({name, email}, () => {
        console.log(name, email)
        const status = document.getElementById("status")
        status.style.display = "block";
        setTimeout(()=> {
            status.style.display = "none"
        }, 2000)

    });
});
chrome.storage.sync.get(["name", "email"], (data) => {
    document.querySelectorAll("input").forEach((input) => {
        if (input.type === "text" && data.name) {
            input.value = data.name;
        }
        if (input.type === "email" && data.email) {
            input.value = data.email;
        }
    });
});

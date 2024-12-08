document.querySelectorAll("input").forEach((input) => {
    if (input.type === "text" && data.name) {
        input.value = "ABC";
    }
    if (input.type === "email" && data.email) {
        input.value = "ABC@gmail.com";
    }
});

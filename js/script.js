const Sans = document.getElementById("Sans");
Sans.addEventListener("click", () => {
    Sans.classList.add("esquivar");
    setTimeout(() => {
        Sans.classList.remove("esquivar");
    }, 300);
});
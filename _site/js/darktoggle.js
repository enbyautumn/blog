let toggle = document.getElementById('toggle');
toggle.addEventListener("click", e => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
    } else if (document.documentElement.classList.contains("light")) {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
});
if (localStorage.getItem("theme") == "dark") {
    document.documentElement.classList.add("dark");
}
if (localStorage.getItem("theme") == "light") {
    document.documentElement.classList.add("light");
}
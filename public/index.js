const syapen = document.getElementById("syapen")
const btn   = document.getElementById("syapen-btn")
console.log(syapen);
console.log(btn);
btn.addEventListener("click", () => {
    syapen.classList.toggle("hidden");
})
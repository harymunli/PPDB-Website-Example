const syapen = document.getElementById("syapen")
const btn   = document.getElementById("syapen-btn")

const alpen = document.getElementById("alpen")
const btn2 = document.getElementById("alpen-btn")

const inftes = document.getElementById("intes")
const inftes_btn = document.getElementById("intes-btn")


btn.addEventListener("click", () => {
    syapen.classList.toggle("hidden");
})

btn2.addEventListener("click", () => {
    alpen.classList.toggle("hidden");
})

intes_btn.addEventListener("click", () => {
    inftes.classList.toggle("hidden");
})
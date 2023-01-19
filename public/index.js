const syapen = document.getElementById("syapen")
const btn   = document.getElementById("syapen-btn")

const alpen = document.getElementById("alpen")
const btn2 = document.getElementById("alpen-btn")

const inftes = document.getElementById("intes")
const inftes_btn = document.getElementById("intes-btn")

const brosur_btn = document.getElementById("dl-brosur-button")
const reset_form = document.getElementById("reset-form")
const reset_btn = document.getElementById("reset-btn")

btn.addEventListener("click", () => {
    syapen.classList.toggle("hidden");
})

btn2.addEventListener("click", () => {
    alpen.classList.toggle("hidden");
})

intes_btn.addEventListener("click", () => {
    inftes.classList.toggle("hidden");
})

reset_btn.addEventListener("click", ()=>{
    reset_form.reset();
})
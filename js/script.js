const menuBtn = document.querySelector(".menu")
const menuClose = document.querySelector(".menu-close")
const menuOpen = document.querySelector(".menu-open")
const nav = document.querySelector(".nav-mobile")
const overlay = document.querySelector('.overlay')
const features = document.querySelector(".features a")
const company = document.querySelector(".company a")
const featureDropdown = document.querySelector(".features-dropdown")
const companyDropdown = document.querySelector(".company-dropdown")
const arrowFeatures = document.querySelector(".arrow-features")
const arrowCompany = document.querySelector(".arrow-company")


menuBtn.addEventListener("click", () => {
    menuClose.classList.toggle("active")
    menuOpen.classList.toggle("active")
    nav.classList.toggle("active")
    overlay.classList.toggle("active")
})

features.addEventListener("click", () => {
    featureDropdown.classList.toggle("active")
    arrowFeatures.classList.toggle("active")
})

company.addEventListener("click", () => {
    companyDropdown.classList.toggle("active")
    arrowCompany.classList.toggle("active")
})
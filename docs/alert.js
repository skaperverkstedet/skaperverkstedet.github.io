import alert from "./assets/JSON/alert.json" with { type: 'json' }

const alertElement = document.querySelector("#alert")
const alertContentElement = document.querySelector("#alert .alert-container h2")

if (alert.active) {
    alertElement.style.display = "flex"
    alertContentElement.innerHTML = alert.content
}
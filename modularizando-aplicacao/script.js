import { themeSwitcher, getCharKey, clearInput, processInputKey, calculate, copyToClipboard } from "./functions.js"
import { input } from "./elements.js"

document.querySelectorAll(".charKey").forEach(getCharKey)

document.getElementById("clear").addEventListener("click", clearInput)

input.addEventListener("keydown", processInputKey)

document.getElementById("equal").addEventListener("click", calculate)

document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)

document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)


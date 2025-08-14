import { main, root, input, resultInput, allowedKeys} from "./elements.js"

export const getCharKey = (charKeyBtn) => {
  charKeyBtn.addEventListener("click", () => {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
}

export const clearInput = () => {
  input.value = ""
  input.focus()
}

export const processInputKey = ev => {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  } if (ev.key === "Backspace") {
      input.value = input.value.slice(0, -1)
  } if (ev.key === "Enter") {
      calculate()
  }
}
export const calculate = () => {
  if (!input.value) { 
    resultInput.value = "ERROR"
    resultInput.classList.add("error")
    return
  }

  try {
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove("error")
  } catch {
    resultInput.value = "ERROR"
    resultInput.classList.add("error")
  }
}

export const copyToClipboard = ev => {
  const button = ev.currentTarget
  if (button.innerText === "Copy") {
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = "Copy"
    button.classList.remove("success")
  }
}

export const themeSwitcher = () => {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    main.dataset.theme = "light"
  } else {
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    main.dataset.theme = "dark"
  }
}

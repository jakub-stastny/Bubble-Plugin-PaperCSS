function(instance, properties) {
  const button = document.createElement("button")

  button.innerText = properties.label
  button.style.width = `${properties.bubble.width()}px`
  button.style.height = `${properties.bubble.height()}px`
  button.style.whiteSpace = "nowrap"

  instance.canvas.append(button)
}

function(instance, properties) {
    const button = document.createElement("button")

    button.innerText = properties.label
    button.style.width = properties.bubble.width() + "px"
    button.style.height = properties.bubble.height() + "px"
    button.classList.add("btn-success")

    instance.canvas.append(button)
}
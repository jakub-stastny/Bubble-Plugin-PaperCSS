function(instance, properties) {
    const checkbox = document.createElement("input")
    
    checkbox.type = "checkbox"

    checkbox.innerText = properties.label
    //button.style.width = properties.bubble.width() + "px"
    //button.style.height = properties.bubble.height() + "px"
    //button.classList.add("btn-" + properties.type)
    checkbox.disabled = properties.disabled

    instance.canvas.append(checkbox)
}
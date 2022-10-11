function(instance, properties) {
	const label = document.createElement("label")
    const labelSpan = document.createElement("span")
    const checkbox = document.createElement("input")
    
    label.append(checkbox)
    label.append(labelSpan)
    
    checkbox.type = "checkbox"
	checkbox.style.display = "inline-block"
	checkbox.style.marginRight = "7px"
    
    instance.canvas.append(label)
    
    instance.data.labelSpan = labelSpan
    instance.data.checkbox = checkbox
    
    label.style.width = "100%"
    label.style.height = "100%"

    // Without this the button overflows the parent div, so it looks chopped off.
    instance.canvas.style.width = "fit-content"
    instance.canvas.style.height = "fit-content"

    checkbox.innerText = properties.label
    //button.style.width = properties.bubble.width() + "px"
    //button.style.height = properties.bubble.height() + "px"
    //button.classList.add("btn-" + properties.type)
    checkbox.disabled = properties.disabled
}
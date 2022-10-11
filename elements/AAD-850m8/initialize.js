function(instance, context) {
    const label = element("label")
    const labelSpan = element("span")
    const checkbox = element("input")
    
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

    checkbox.addEventListener("click", function (e) {
        instance.triggerEvent("clicked")
        instance.triggerEvent(e.target.checked ? "checked" : "unchecked")
    })
}
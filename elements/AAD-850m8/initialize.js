function(instance, context) {
    const label = document.createElement("label")
    const labelSpan = document.createElement("span")
    const checkbox = document.createElement("input")
    
    label.append(checkbox)
    label.append(labelSpan)
    
    checkbox.type = "checkbox"
    
    instance.canvas.append(label)
    
    instance.data.labelSpan = labelSpan
    instance.data.checkbox = checkbox
    
    label.style.width = "100%"
    label.style.height = "100%"

    // Without this the button overflows the parent div, so it looks chopped off.
    instance.canvas.style.width = "fit-content" //`${button.offsetHeight}px`
    instance.canvas.style.height = "fit-content"

    checkbox.addEventListener("click", function (e) {
        instance.triggerEvent("clicked")
        instance.triggerEvent(e.target.checked ? "checked" : "unchecked")
        //console.log(e.target.checked ? "checked" : "unchecked")
    })
}
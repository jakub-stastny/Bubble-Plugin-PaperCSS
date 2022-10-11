function(instance, context) {
    const label = element("label", {}, {width: "100%", height: "100%"})
    const labelSpan = element("span")
    const checkbox = element("input", {type: "checkbox"}, {
		display: "inline-block",
		marginRight: "7px"
    })
    
    label.append(checkbox)
    label.append(labelSpan)
    
    instance.canvas.append(label)
    
    instance.data.labelSpan = labelSpan
    instance.data.checkbox = checkbox

    // Without this the button overflows the parent div, so it looks chopped off.
    instance.canvas.style.width = "fit-content"
    instance.canvas.style.height = "fit-content"

    checkbox.addEventListener("click", function (e) {
        instance.triggerEvent("clicked")
        instance.triggerEvent(e.target.checked ? "checked" : "unchecked")
    })
}
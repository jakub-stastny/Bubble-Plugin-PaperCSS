function(instance, properties) {
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

	// Update
	labelSpan.innerText = properties.label
	checkbox.disabled = properties.disabled
}

    // <fieldset class="form-group">
    //   <label class="paper-check">
	//   <input type="checkbox" name="paperChecks" value="option 2"> <span>This is the second check</span>
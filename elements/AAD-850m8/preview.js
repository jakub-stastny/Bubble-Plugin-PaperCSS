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
    
  label.style.height = label.style.width = "100%"
	
	// Without this the button overflows the parent div, so it looks chopped off.
  instance.canvas.style.height = instance.canvas.style.width = "fit-content"

	// Update
	labelSpan.innerText = properties.label
	checkbox.disabled = properties.disabled
}
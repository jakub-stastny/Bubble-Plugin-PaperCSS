// <fieldset class="form-group">
//   <label class="paper-check">
//   	<input type="checkbox" name="paperChecks" value="option 2" />
//		<span>This is the second check</span>

function(instance, context) {
	// Without this the button overflows the parent div, so it looks chopped off.
    instance.canvas.style.width = "fit-content"
    instance.canvas.style.height = "fit-content"

	// Create DOM.
	const topNode = fieldset({class: "form-group"}, {width: "100%", height: "100%"}, () => (
		label({class: "paper-check"}, {}, () => ([
			input({
				type: "checkbox"
			}, {
				display: "inline-block",
				marginRight: "7px"
		    }),
			span()
		]))
	))

	// Register.
    instance.canvas.append(topNode)
	instance.data.topNode = topNode

	// Events.
    checkbox.addEventListener("change", (event) => {
        instance.triggerEvent("clicked")
        instance.triggerEvent(event.target.checked ? "checked" : "unchecked")
    })
}
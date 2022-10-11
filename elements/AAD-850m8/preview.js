function(instance, properties) {
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

	// Update.
	topNode.label.span.innerText = properties.label
	topNode.label.input.disabled = properties.disabled
}
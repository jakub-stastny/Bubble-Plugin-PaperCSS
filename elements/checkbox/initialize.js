// <fieldset class="form-group">
//   <label class="paper-check">
//   	 <input type="checkbox" name="paperChecks" value="option 2" />
//		 <span>This is the second check</span>

function(instance, context) {
  logErrors("PaperCSS.checkbox.initialize", () => {
    // Without this the button overflows the parent div, so it looks chopped off.
    updateStyle(instance.canvas, {width: "fit-content", height: "fit-content"})

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
    register(instance, {topNode})

  	// Events.
    button.addEventListener("mouseover", () => triggerEvent(instance, "hovered"))

    checkbox.addEventListener("change", (event) => {
      triggerEvent(instance, "clicked")()
      triggerEvent(instance, event.target.checked ? "checked" : "unchecked")()
    })
  })
}

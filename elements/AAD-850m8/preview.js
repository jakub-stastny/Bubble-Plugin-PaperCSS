// Helpers.
function element (tagName, props = {}, style = {}, fn = () => {}) {
    const element = document.createElement(tagName)
	
	Object.entries(props).forEach(([ key, value ]) => element[key] = value)
	Object.entries(style).forEach(([ key, value ]) => element.style[key] = value)

	const result = fn()
	if (result && "style" in result) {
		element.append(result)
		element[result.tagName.toLowerCase()] = result
	} else if (result && Array.isArray(result)) {
		result.forEach(childElement => {
			element.append(childElement)
			element[childElement.tagName.toLowerCase()] = childElement
		})
	} else if (result) {
		Object.entries(result).forEach(([ name, childElement ]) => {
			element.append(childElement)
			element[name] = childElement
		})
	}

	return element
}

["a", "article", "b", "br", "button", "code", "div", "em", "fieldset", "form", "form", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "input", "label", "li", "link", "main", "meta", "nav", "ol", "p", "pre", "q", "script", "select", "span", "strike", "strong", "style", "sub", "sup", "table", "td", "textarea", "th", "title", "tr", "ul"].
forEach(tagName => window[tagName] = (...args) => element.apply(this, [tagName, ...args]))

// Main.
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
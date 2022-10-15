function(instance, properties, context) {
  const { topNode } = instance.data

  topNode.label.span.innerText = properties.label
	topNode.label.input.disabled = properties.disabled
}
function(instance, properties, context) {
  logErrors("PaperCSS.checkbox.update", () => {
    const { topNode } = instance.data

    topNode.label.span.innerText = properties.label
  	topNode.label.input.disabled = properties.disabled
  })
}
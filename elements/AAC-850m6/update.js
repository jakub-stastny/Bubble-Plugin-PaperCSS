function(instance, properties, context) {
  logErrors("PaperCSS.button.update", () => {
    const { button } = instance.data

    button.innerText = properties.label
    button.classList.add("btn-" + properties.type)
    button.disabled = properties.disabled
  })
}
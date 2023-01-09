function(instance, properties, context) {
  logErrors("PaperCSS.fit_to_content_button.update", () => {
    const { button } = instance.data

    console.log("~ Updating properties", properties)

    if (properties.tooltip_text) {
      button.title = properties.tooltip_text
    }

    button.innerText = properties.label
    button.classList.add("btn-" + properties.type)
    button.disabled = properties.disabled
  })
}

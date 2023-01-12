function(instance, context) {
  logErrors("PaperCSS.stretch_button.initialize", () => {
    const button = element("button", {}, {
      whiteSpace: "nowrap", overflow: "visible"})

    // Tweak CSS.
    updateStyle(instance.canvas, {
      overflow: "visible",
      width: "100%", minWidth: null, maxWidth: null,
      height: "fit-content", minHeight: null, maxHeight: null})

    updateStyle(button, {width: "100%"})

    // Register.
    register(instance, {button})

    // Events.
    button.addEventListener("mouseover", triggerEvent(instance, "hovered"))
    button.addEventListener("click", triggerEvent(instance, "clicked"))
  })
}

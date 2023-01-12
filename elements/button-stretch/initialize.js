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
    const triggerEvent = (eventName) => {
      return function () {
        console.log(`~ Triggering event %c${eventName}%c.`,
                    "color:#DC143C", "color:#000")
        instance.triggerEvent(eventName)
      }
    }

    button.addEventListener("mouseover", triggerEvent("hovered"))
    button.addEventListener("click", triggerEvent("clicked"))
  })
}

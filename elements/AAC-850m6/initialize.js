function(instance, context) {
  logErrors("PaperCSS.fit_to_content_button.initialize", () => {
    const button = element("button", {}, {
      whiteSpace: "nowrap", overflow: "visible"})

    // Debug: show background on the canvas to make sure the element
    // is filling the whole area of the canvas.
    instance.canvas.backgroundColor = "red"

    updateStyle(instance.canvas, {
      overflow: "visible",
      height: "fit-content", width: "fit-content",
      minHeight: null, maxHeight: null})

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

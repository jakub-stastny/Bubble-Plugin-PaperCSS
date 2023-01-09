function(instance, context) {
  logErrors("PaperCSS.button.initialize", () => {
    const button = element("button", {}, {
      whiteSpace: "nowrap", overflow: "visible"})

    // Debug: show background on the canvas to make sure the element
    // is filling the whole area of the canvas.
    instance.canvas.backgroundColor = "red"

    // Fix bottom shadow.
    // By doing so, we make the height always automatic and unchangeable.
    updateStyle(instance.canvas, {
      overflow: "visible", height: "fit-content",
      minHeight: null, maxHeight: null})

    if (instance.canvas.style.width === "calc(100% + 0px)") {
      // Stretch on say smartphone screens.
      updateStyle(button, {width: "100%"})
    } else {
      updateStyle(instance.canvas, {width: "fit-content"})
    }

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

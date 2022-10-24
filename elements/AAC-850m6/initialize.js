function(instance, context) {
  const button = element("button", {}, {
    whiteSpace: "nowrap", overflow: "visible"})

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
  button.addEventListener("click", () => instance.triggerEvent("clicked"))
}
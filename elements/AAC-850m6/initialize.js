function(instance, context) {
  const button = element("button", {}, {whiteSpace: "nowrap", overflow: "visible"})
 
  instance.canvas.append(button)
  instance.data.button = button
  
  instance.canvas.style.overflow = "visible"

  // Fix bottom shadow.
  // By doing so, we make the height always automatic and unchangeable.
  instance.canvas.style.height = "fit-content"
  instance.canvas.style.minHeight = instance.canvas.style.maxHeight = null

  if (instance.canvas.style.width === "calc(100% + 0px)") {
    // Stretch on say smartphone screens.
    button.style.width = "100%"
  } else {
    instance.canvas.style.width = "fit-content"
  }

  button.addEventListener("click", () => instance.triggerEvent("clicked"))
}
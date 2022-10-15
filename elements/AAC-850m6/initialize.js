function(instance, context) {
  const button = element("button", {}, {width: "100%", height: "100%"})
 
  instance.canvas.append(button)
  instance.data.button = button

  // Allow space for the shadow.
  button.style.marginRight = button.style.marginBottom = "29px"

  // Without this the button overflows the parent div, so it looks chopped off.
  instance.canvas.style.height = "fit-content" //`${button.offsetHeight}px`

  button.addEventListener("click", () => instance.triggerEvent("clicked"))
}
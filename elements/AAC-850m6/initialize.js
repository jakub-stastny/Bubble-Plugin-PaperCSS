/*
 * How should the sizing work:
 * 1/ Responsive mode (default)
 *    Fit to the size of content.
 *    Fill the parent container (iPhone screen for instance).
 *    Should it be resizable at all?
 *    Probably a select box with sizing strategy is in order? Or is there a way to detect this, like if the user switched to the responsive designer or how does it work?
 *
 * 2/ Specified dimensions
 *    What happens on various screen sizes?
 *.    In the editor one is also able to set min/max width/height and margin.
 */
function(instance, context) {
  //const button = element("button", {}, {width: "100%", height: "100%"})
  //const button = element("button", {}, {width: "fit-content", height: "fit-content", whiteSpace: "nowrap"})
  const button = element("button", {}, {whiteSpace: "nowrap", marginRight: "29px", marginBottom: "29px", overflow: "visible"})
 
  instance.canvas.append(button)
  instance.data.button = button

  // Fix bottom shadow.
  instance.canvas.style.height = "fit-content"
  
  if (true) {
    // Stretch
    // instance.canvas.style.width = "100%"
  } else {
    instance.canvas.style.width = instance.canvas.style.height = "fit-content"
    // Potential alternative overflow visible and calculate height of the button in it while removing its margins.
  }

  // Without this the button overflows the parent div, so it looks chopped off.
  // With it though, content is cut. For instance if I name the button "Updated button", it'll only show "Updated".
  //instance.canvas.style.width = instance.canvas.style.height = "fit-content" //`${button.offsetHeight}px`

  if (instance.canvas.style.minWidth === instance.canvas.style.maxWidth) {
    //instance.canvas.style.minWidth = instance.canvas.style.maxWidth = null
  }

  //instance.canvas.style.minHeight = instance.canvas.style.maxHeight = null

  button.addEventListener("click", () => instance.triggerEvent("clicked"))
}
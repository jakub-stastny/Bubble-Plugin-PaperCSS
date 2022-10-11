function(instance, context) {
    const button = document.createElement("button")
    
    instance.canvas.append(button)
    instance.data.button = button
    
    button.style.width = "100%"
    button.style.height = "100%" // "80%"

    // Allow space for the shadow.
    button.style.marginBottom = "29px"
    button.style.marginRight = "29px"

    // Without this the button overflows the parent div, so it looks chopped off.
    instance.canvas.style.height = "fit-content" //`${button.offsetHeight}px`

    button.addEventListener("click", function () {
        instance.triggerEvent("clicked")
    })
}
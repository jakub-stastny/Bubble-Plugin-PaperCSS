function(instance, context) {
    const button = document.createElement("button")
    
    instance.canvas.append(button)
    instance.data.button = button
    
    button.style.width = "100%"
    button.style.height = "100%"

    button.addEventListener("click", function () {
        instance.triggerEvent("clicked")
    })
}
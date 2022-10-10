function(instance, context) {
    const button = document.createElement("button")
    
    instance.canvas.append(button)
    instance.data.button = button
    
    button.style.width = "100%"
    //button.style.height = "100%" // "80%" //"100%"
    button.style.marginBottom = "29px"
    button.style.marginRight = "29px"

    //console.log(instance.canvas.style.height)
    //delete instance.canvas.style.height
    instance.canvas.style.height = "fit-content" //`${button.offsetHeight}px`
    //console.log([button.offsetHeight, instance.canvas.style.height])
    
    //instance.canvas.style.display = "flex"
    //instance.canvas.style.flexDirection = "row"

    button.addEventListener("click", function () {
        instance.triggerEvent("clicked")
    })
}
function(instance, properties, context) {
    const { button } = instance.data

    button.innerText = properties.label
    
    button.style.width = "100%"
    button.style.height = "100%"
}
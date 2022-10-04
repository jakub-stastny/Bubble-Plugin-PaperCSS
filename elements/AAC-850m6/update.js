function(instance, properties, context) {
    const { button } = instance.data

    button.innerText = properties.label
    button.classList.add("btn-" + properties.type)
    console.log(properties.type, button.classList)
}
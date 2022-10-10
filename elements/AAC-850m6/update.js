function(instance, properties, context) {
    const { button } = instance.data

    button.innerText = properties.label
    button.classList.add("btn-" + properties.type)
    button.disabled = properties.disabled
}
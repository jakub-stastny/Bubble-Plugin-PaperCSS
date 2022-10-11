function(instance, properties, context) {
    const { labelSpan, checkbox } = instance.data

    labelSpan.innerText = properties.label
    checkbox.disabled = properties.disabled
}
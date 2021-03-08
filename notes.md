const generateColorMapToValuesMapping = (colorMapType, data, valueFieldName, identifierFieldName, numberOfShades?) => {

    // 1. sort data

    // 2. get min and max from sorted data - therefore we have the range

    // 3. generate new mapping with temporary field containing values as normalized to zero (only do if negative values)

    // 4. Profit
}


data = [
    {
        value: 45,
    },
    {

    }
]

mapping = [
    {
        min: -44.0,
        max: -42.0,
        // colorIndex: 2,
        color: '#444444'
    }
]

data.forEach((item) => {
    const color = mapping.find((mappingItem) => item.value >= mappingItem.min && (item.value < mappingItem.min + 2 ))
})


min = 5
max = 10

data.filter((item) => {

})

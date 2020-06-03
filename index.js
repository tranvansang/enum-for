exports.getAllEnumKeys = enumType => Object.keys(enumType).filter(key => isNaN(Number(key)))
exports.getAllEnumValues = enumType => exports.getAllEnumKeys(enumType).map(key => enumType[key])

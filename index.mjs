export function getAllEnumKeys(enumType) {
	return Object.keys(enumType).filter(key => isNaN(Number(key)))
}
export function getAllEnumValues(enumType) {
	return getAllEnumKeys(enumType).map(key => enumType[key])
}
export function getAllEnumEntries(enumType) {
	return getAllEnumKeys(enumType).map(key => [key, enumType[key]])
}

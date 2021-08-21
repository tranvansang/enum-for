const {getAllEnumKeys, getAllEnumValues, getAllEnumEntries} = require('./index')

enum Enum1 {
	a, b
}
enum Enum2 {
	a = 'a', b = 1, c = 1, d = 'e'
}
enum Enum3 {
	a = 'b',
	c = 1,
	'1a',
	'1b' = 'd'
}
describe('enum', () => {
	test('all values', () => {
		expect(getAllEnumKeys(Enum1).sort()).toEqual(['a', 'b'].sort())
		expect(getAllEnumKeys(Enum2).sort()).toEqual(['a', 'b', 'c', 'd'].sort())
		expect(getAllEnumKeys(Enum3).sort()).toEqual(['a', 'c', '1a', '1b'].sort())
	})
	test('all keys', () => {
		expect(getAllEnumValues(Enum1).sort()).toEqual([0, 1].sort())
		expect(getAllEnumValues(Enum2).sort()).toEqual(['a', 1, 1, 'e'].sort())
		expect(getAllEnumValues(Enum3).sort()).toEqual(['b', 1, 2, 'd'].sort())
	})
	test('all entries', () => {
		expect(getAllEnumEntries(Enum1).sort()).toEqual([['a', 0], ['b', 1]].sort())
		expect(getAllEnumEntries(Enum2).sort()).toEqual([['a', 'a'], ['b', 1], ['c', 1], ['d', 'e']].sort())
		expect(getAllEnumEntries(Enum3).sort()).toEqual([['a', 'b'], ['c', 1], ['1a', 2], ['1b', 'd']].sort())
	})
})

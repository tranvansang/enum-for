const {getAllEnumKeys, getAllEnumValues, getAllEnumEntries} = require('./index')

enum TestEnum1 {
	a, b
}
enum TestEnum2 {
	a = 'a', b = 1, c = 1, d = 'e'
}
enum TestEnum3 {
	a = 'b',
	c = 1,
	'1a',
	'1b' = 'd'
}
describe('enum', () => {
	test('all values', () => {
		expect(getAllEnumKeys(TestEnum1).sort()).toEqual(['a', 'b'].sort())
		expect(getAllEnumKeys(TestEnum2).sort()).toEqual(['a', 'b', 'c', 'd'].sort())
		expect(getAllEnumKeys(TestEnum3).sort()).toEqual(['a', 'c', '1a', '1b'].sort())
	})
	test('all keys', () => {
		expect(getAllEnumValues(TestEnum1).sort()).toEqual([0, 1].sort())
		expect(getAllEnumValues(TestEnum2).sort()).toEqual(['a', 1, 1, 'e'].sort())
		expect(getAllEnumValues(TestEnum3).sort()).toEqual(['b', 1, 2, 'd'].sort())
	})
	test('all entries', () => {
		expect(getAllEnumEntries(TestEnum1).sort()).toEqual([['a', 0], ['b', 1]].sort())
		expect(getAllEnumEntries(TestEnum2).sort()).toEqual([['a', 'a'], ['b', 1], ['c', 1], ['d', 'e']].sort())
		expect(getAllEnumEntries(TestEnum3).sort()).toEqual([['a', 'b'], ['c', 1], ['1a', 2], ['1b', 'd']].sort())
	})
})

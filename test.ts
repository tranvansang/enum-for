// https://github.com/babel/babel/pull/13324
// For const enums only used in the same file where they are declared, we can safely inline the enum values. This matched the TS behavior without --isolatedModules, and produces a much smaller output.
// When the const enum is exported, we can generate an object mapping from the enum keys to its values. This is way smaller than the default enum output, because it doesn't need to support reverse mappings (i.e. E[E.x]).

import {
	ExportedEnum1,
	ExportedEnum2,
	ExportedEnum3,
	ExportedConstEnum1,
	ExportedConstEnum2,
	ExportedConstEnum3,
} from './fixtures'
import {getAllEnumKeys, getAllEnumValues, getAllEnumEntries} from './index'

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
const enum ConstEnum1 {
	a, b
}
const enum ConstEnum2 {
	a = 'a', b = 1, c = 1, d = 'e'
}
const enum ConstEnum3 {
	a = 'b',
	c = 1,
	'1a',
	'1b' = 'd'
}

describe('enum', () => {
	test.each([
		[
			Enum1,
			['a', 'b'],
			[0, 1],
			[['a', 0], ['b', 1]]
		],
		[
			Enum2,
			['a', 'b', 'c', 'd'],
			['a', 1, 1, 'e'],
			[['a', 'a'], ['b', 1], ['c', 1], ['d', 'e']]
		],
		[
			Enum3,
			['a', 'c', '1a', '1b'],
			['b', 1, 2, 'd'],
			[['a', 'b'], ['c', 1], ['1a', 2], ['1b', 'd']]
		],
		[
			ConstEnum1,
			['a', 'b'],
			[0, 1],
			[['a', 0], ['b', 1]]
		],
		[
			ConstEnum2,
			['a', 'b', 'c', 'd'],
			['a', 1, 1, 'e'],
			[['a', 'a'], ['b', 1], ['c', 1], ['d', 'e']]
		],
		[
			ConstEnum3,
			['a', 'c', '1a', '1b'],
			['b', 1, 2, 'd'],
			[['a', 'b'], ['c', 1], ['1a', 2], ['1b', 'd']]
		],
		[
			ExportedEnum1,
			['a', 'b'],
			[0, 1],
			[['a', 0], ['b', 1]]
		],
		[
			ExportedEnum2,
			['a', 'b', 'c', 'd'],
			['a', 1, 1, 'e'],
			[['a', 'a'], ['b', 1], ['c', 1], ['d', 'e']]
		],
		[
			ExportedEnum3,
			['a', 'c', '1a', '1b'],
			['b', 1, 2, 'd'],
			[['a', 'b'], ['c', 1], ['1a', 2], ['1b', 'd']]
		],
		[
			ExportedConstEnum1,
			['a', 'b'],
			[0, 1],
			[['a', 0], ['b', 1]]
		],
		[
			ExportedConstEnum2,
			['a', 'b', 'c', 'd'],
			['a', 1, 1, 'e'],
			[['a', 'a'], ['b', 1], ['c', 1], ['d', 'e']]
		],
		[
			ExportedConstEnum3,
			['a', 'c', '1a', '1b'],
			['b', 1, 2, 'd'],
			[['a', 'b'], ['c', 1], ['1a', 2], ['1b', 'd']]
		],
	])('Enum $#: ', (Enum, allKeys, allValues, allEntries) => {
		expect(getAllEnumKeys(Enum).sort()).toEqual(allKeys.sort())
		expect(getAllEnumValues(Enum).sort()).toEqual(allValues.sort())
		expect(getAllEnumEntries(Enum).sort()).toEqual(allEntries.sort())
	})
})

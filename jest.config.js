module.exports = {
	name: 'enum-for',
	moduleFileExtensions: ['ts', 'js'],
	verbose: true,
	collectCoverageFrom: ['<rootDir>/test.ts'],
	transform: {'^.+\\.(ts)$': 'babel-jest'},
	testMatch: ['<rootDir>/test.ts'],
	testEnvironment: 'node'
}

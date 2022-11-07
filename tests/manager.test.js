const Manager = require('../lib/manager');

test('set office number', () => {
    let testData = '123-456-789'
    let man = new Manager(1,'man_name', 'man@man.com', 'Manager',testData)
    expect(man.officeNumber).toBe(testData)

}) 
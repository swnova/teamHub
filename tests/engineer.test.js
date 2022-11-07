const Engineer = require('../lib/engineer');


test('set Github', () => {
    let testData = 'github_user'
    let eng = new Engineer(1,'eng_name', 'eng@eng.com', 'Engineer',testData)
    expect(eng.github).toBe(testData)

}) 
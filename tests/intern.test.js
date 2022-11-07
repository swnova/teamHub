const Intern = require('../lib/intern');

test('Intern instance to be initiated', () => {
    let int = new Intern();
    expect(typeof(int)).toBe('object');
});


test('Intern name to be validated', () => {
    let name = 'Quan';
    let int  = new Intern(1,name);
    expect(int.name).toBe(name);
});
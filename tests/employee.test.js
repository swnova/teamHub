const Employee = require('../lib/employee');

test('Employee instance to be initiated', () => {
    let emp = new Employee();
    expect(typeof(emp)).toBe('object');
});


test('Employee name to be validated', () => {
    let name = 'Mary';
    let emp  = new Employee(1,name);
    expect(emp.name).toBe(name);
});
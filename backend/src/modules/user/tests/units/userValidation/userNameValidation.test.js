const {checkUserName} = require('../../../validation/userValidation');

test('should return userName userName', ()=>{
    expect(checkUserName('Adryann')).toBe('Adryann');
});

test('should return length error', ()=>{
    expect(() => {
        checkUserName('AdryannMillos');
      }).toThrow('User name must be between 0 and 8 characters!');
});
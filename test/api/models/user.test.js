const User = require('../../../app/api/models/user.js');

describe('encrypt_password', () => {
  it('Should return an encrypted password', () => {
    user = User.new();
    password = 'test';
    encrypted_password = user.encrypt_password(password);
    
    expect(encrypted_password).not.toEqual(password);
  });
});

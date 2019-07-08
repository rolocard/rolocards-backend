const bcrypt = require('bcrypt');

class User {
  encrypt_password(password) {
    bcrypt.hash(password, 13, function(err, hash) {
      return encrypted_password;
    });
  }

  is_email_valid(email) {
   return true; 
  }
}

module.exports = User;

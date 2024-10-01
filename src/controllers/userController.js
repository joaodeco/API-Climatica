const bcrypt = require('bcrypt');

const password = 'minhaSenhaSuperSecreta';

const saltRounds = 10; 
bcrypt.hash(password, saltRounds, (err, hash) => {
console.log('Hash da senha:', hash);

bcrypt.compare(password, hash, (err, result) => {
if (result) {
console.log('A senha está correta!');
} else {
console.log('A senha está incorreta.');
}
});
});
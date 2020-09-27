// const userPassword = 'jqueryismyjam';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// // Write code under this line
// if (CANCELED_BY_USER !== null) {
//   if (userPassword === ADMIN_PASSWORD) message = 'Добро пожаловать!';
//   else message = 'Доступ запрещен, неверный пароль!';
// } else message = 'Отменено пользователем!';
// console.log(message);
// --------------------------------------------------------------------
const userPassword = 'jqueryismyjam';
const ADMIN_PASSWORD = 'jqueryismyjam1';
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

// Write code under this line
if (userPassword === null) message = 'Отменено пользователем!';
else if (userPassword === ADMIN_PASSWORD) message = 'Добро пожаловать!';
else message = 'Доступ запрещен, неверный пароль!';

console.log(message);
// ----------------------------------------------------------------------

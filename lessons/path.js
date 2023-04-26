const path = require('path');

// console.log('Склеює участки шляху',path.join('first','second','third'));
// console.log(path.join(__filename,'first','second','third'));
// console.log(path.join(__dirname,'first','second','third'));

console.log('Отримуєму абсолютний шлях',path.resolve('first', 'second', 'third'))
const fullpath = path.resolve('first', 'second', 'third.js')

console.log('Парсинг шляху', path.parse(fullpath));
console.log('Розділити в ОС', path.sep);
console.log('Провірка на асбсолютний шлях', path.isAbsolute('first/second'));
console.log('Назва файлу', path.basename(fullpath));
console.log('Розширення файлу', path.extname(fullpath));

// =============URL=============>

const siteUrl = 'https://vns.lpnu.ua/course/view.php?id=4595';

const url = new URL(siteUrl);

console.log(url);
console.log(url.searchParams);

// ============================>

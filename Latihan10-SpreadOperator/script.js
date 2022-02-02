// Spread Operator
// memecah iterabel menjadi single elment

const mhs = ['edo', 'edi', 'edu'];
console.log(...mhs)//contoh iterable array with spread


//menggabungkan 2 array
const no = [1,2,3];
const alm = ['a', 'b', 'c'];
const gabung = [...no, ...alm];
console.log(gabung);

// lATIHAN
const namaHtml = document.querySelector('.nama');
const nama = [...namaHtml.textContent].map(i => `<span>${i}</span>`).join('');
console.log(nama);

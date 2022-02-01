// Destructive = Unpacking array/object

// Pada Array
const coba = ['satu', 'dua', 'tiga'];

const [a, b, c] = coba;
console.log(a); // 'satu'
console.log(b); // 'dua'
console.log(c); // 'tiga'

// Pada Object
const mhs = {
    nama: 'Edo',
    umur: 22,
    jursan: 'informatika'
}

const {a, b, c} = mhs;
console.log(a); // 'edo'
console.log(b); // 22
console.log(c); // 'informatika'

// skipping items
const numer = [1, 4, 7, 10];

const [satu, , tujuh, ] = numer;
console.log(satu);

// swap items
let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a, b] = [b, a]; // pertukaran items
console.log(a);
console.log(b);
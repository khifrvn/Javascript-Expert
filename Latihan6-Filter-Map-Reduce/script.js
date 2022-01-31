// Array.prototype.map()
// Array.prototype.filter()
// Array.prototype.reduce()

const angka = [1,9,2,6,3,8,3,6,5];

// mencari angka >= 3

// for
/*
const newAngka = [];
for(let i=0; i<angka.length; i++){
    if(angka[i] >= 3){
        newAngka.push(angka[i]);
    }
}
*/

//filter --> Mengkurasi Element Array
/*
const newAngka = angka.filter( a => a >=3);
console.log(newAngka);
*/

//map --> Memotong Element Array
// kali semua angka dengan 2
/*
const newAngka = angka.map(a => a * 2);
console.log(newAngka);
*/

//reduce --> Menyatukan Element Array
// jumlahkan semua element array
/*
const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(newAngka);
*/

// Method Berantai (Chaining)
// angka = [1,9,2,6,3,8,3,6,5]
// Cari angka > 5
// kalikan 3
// Jumlahhkan
const hasil = angka.filter(a => a >= 5) // 9, 6, 8, 6, 5
    .map(a => a * 3) // 27, 18, 24, 18, 15
    .reduce((acc, cur) => acc + cur, 0); // 102
console.log(hasil);

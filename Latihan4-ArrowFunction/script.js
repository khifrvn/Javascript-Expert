// arrow function 

const  tampilNama = (nama, waktu) => {
    return `selamat ${waktu}, ${nama}`;
}

console.log(tampilNama('Edo', 'Siang'));

// arrow map

let murid = ['Edo', 'Edi', 'Eda'];

let jumHuruf = murid.map(nama => nama.length);
console.log(jumHuruf);

// object literal
const mhs1 =  function() {
    this.nama = 'John';
    this.umur = 33;
    this.sayHello = () => {
        console.log(`Halo ${nama}`)
    } 
}

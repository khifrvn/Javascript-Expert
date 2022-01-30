// object literal
// tidak efektif untuk object yg banyak
let mahasiswa1 = {
    nama: 'John Doe',
    energy: 10,
    
    makan: function(porsi){
        this.energy = this.energy + porsi;
        console.log(`Halo ${this.nama}, selamat makan`)
    }
}

let mahasiswa2 = {
    nama: 'Alex Doe',
    energy: 9,
    
    makan: function(porsi){
        this.energy = this.energy + porsi;
        console.log(`Halo ${this.nama}, selamat makan`)
    }
}

// Function Declaration
/*
function Mahasiswa(nama, energy){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

    mahasiswa.makan = function(porsi){
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat Makan!`)
        console.log(`Energy kamu : ${this.energy}`)
    }

    mahasiswa.play = function(jam){
        this.energy -= jam;
        console.log(`Halo ${this.nama}, selamat Main!`)
        console.log(`Energy kamu : ${this.energy}`)
    }

    return mahasiswa; 
}

let murid1 = Mahasiswa('Khifrvn', 10);
let murid2 = Mahasiswa('Dony', 12);
*/

// constractor Function

function Mahasiswa(nama, energy){
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi){
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat Makan!`)
        console.log(`Energy kamu : ${this.energy}`)
    }

    this.play = function(jam){
        this.energy -= jam;
        console.log(`Halo ${this.nama}, selamat Main!`)
        console.log(`Energy kamu : ${this.energy}`)
    }

}

let murid1 = new Mahasiswa('Khifrvn', 10);
let murid2 = new Mahasiswa('Dony', 12);

// object.create
/*
const methodMahasiswa = {
    makan: function(porsi){
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat Makan!`)
        console.log(`Energy kamu : ${this.energy}`)
    },

    play: function(jam){
        this.energy -= jam;
        console.log(`Halo ${this.nama}, selamat Main!`)
        console.log(`Energy kamu : ${this.energy}`)
    }
};


function Mahasiswa(nama, energy){
    let mahasiswa = Object.create(methodMahasiswa);
    this.nama = nama;
    this.energy = energy;

    return mahasiswa;
}

let murid1 = Mahasiswa('Khifrvn', 10);
let murid2 = Mahasiswa('Dony', 12);
*/
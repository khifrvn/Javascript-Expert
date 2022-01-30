/* Closure adalah sebuah function ketika memiliki akses
ke parent scope-nya, meskipin paren scope-nya 
selesai dieksekusi*/

// Why? Untuk membuat Function Factories
function ucapkanSalam(waktu){
    return function (nama){
        console.log(`Halo ${nama}, selamat ${waktu}, GBU!`);
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

selamatPagi('John');


// Lexical Scope

function init(){
    let nama = 'John'; // local variable
    function tampilNama(){ // inner function (closure)
        console.log(nama); // akses ke parent variable
    }
    tampilNama();
}
init();


//Exceution Context, Hoisting & Scope
function satu(){
    var nama = 'John';
    console.log(nama);
}

function dua(){
    console.log(nama);
}

console.log(nama);
var nama = 'Elf';
satu();
dua('Vuey');
console.log(nama);

// better open on Javascript Visualizer
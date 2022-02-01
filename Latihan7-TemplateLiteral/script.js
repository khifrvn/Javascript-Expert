// template literal = string literal with backtick ``

const nama = 'edo';
const umur = 33;
console.log(`Halo ${nama}, umur ${umur}`);
console.log(`${alert('Hello')}`) // embeded expression

// HTML Fragments
const mhs = {
    name: "edo",
    umur: 20,
    email: 'edo@test.com'
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="email">${mhs.email}</span>
    </div>`;

    console.log(el);

// Multi line string
var edo = `One
           Two
           Three`;


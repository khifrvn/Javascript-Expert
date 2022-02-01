// Looping HTML Fragment
/*
    const mhs = [
        {
            nama: "Edo",
            email: "edo@test.com",
        },
        {
            nama: "Edi",
            email: "edi@test.com",
        },
        {
            nama: "Edu",
            email: "edu@test.com",
        }
    ];

    const el = `<div class="mhs">
        ${mhs.map(m => `
        <ul>
        <li>${m.nama}</li>
        <li>${m.email}</li>
        </ul>    
        `).join('')}
    </div>`;
*/

// Conditionals
// Ternary
/*
const lagu = {
    judul: "Kau Adalah",
    nama: "Isyana Srasvati",
    feat: "Rayi Putra"
}

const el = `<div class="lagu">
    <ul>
        <li>${lagu.nama}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
    </ul>
</div>`;
*/

// Nested
// HTML Fragment Bercabang

const mhs = {
    nama: 'Edo',
    semester: 3,
    matakuliah: [
     'Rekayasa Web',
     'Analisis Sistem', 
     'Pemrograman']
};

function cetakMK(matakuliah){
    return  `
        <ol>
            ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semster">${mhs.semester}</span>
    <h4>Mata Kuliah:</h4>
    ${cetakMK(mhs.matakuliah)}
</div>`

document.body.innerHTML = el;
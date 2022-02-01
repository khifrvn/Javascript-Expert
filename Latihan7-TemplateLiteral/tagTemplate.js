// Taggged Templates
/*
const nama = 'Edo';
const umur = 22;

function coba(strings, ...values){
    let result = '';
    strings.forEach((str, i) => {
        result += `${str}${values[i] || ''}`
    });
    return result;
}


-- use Reduce -- 
function coba(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}

const str = coba`Hello ${nama}, umur ${umur}`;
console.log(str);
*/

// Another Implementation
const nama = 'Edi';
const umur = 22;
const email = 'edijr@test.com';

function changeColor(strings, ...values){
    return strings.reduce((hasil, perkenalan, i) => `${hasil}${perkenalan}
    <span id="cc">${values[i] || ''}</span>`, '');
}

const perkenalan = changeColor`Halo ${nama}, Umur ${umur}, Email ${email}`;
document.body.innerHTML = perkenalan;

 
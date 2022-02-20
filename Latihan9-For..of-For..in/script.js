// forEach -> looping untuk dan khusus Array

// ---------- For of ----------------

/* for..of -> menelusuri object iterable 
 - String
 - Array
 - Arguments / NodeList
 - TypedArray
 - Map
 - Set
 - User-defind iterables   
*/ 

// Array
const mhs = ['Edo', 'Edi', 'Edu'];

// mhs.forEach(i => console.log(i));  --> For Each

for(const i of mhs){  // Penggunaan for..of
    console.log(i);
}

// String
const nama = 'Edo';
for(const i of nama){
    console.log(i)
}


// NodeList
const namaMhs = document.querySelectorAll('.nama');

for (let i of namaMhs){
    console.log(i.innerHTML);
}

// arguments
function jumlahkanAngka(){
    let jumlah = 0;
    for(let i of arguments){
        jumlah += i;
    }
    return jumlah;
}

// output 12345
jumlahkanAngka(1,2,3,4,5);

//  --------- FOR..IN ------------
// on Object
const mhs = {
    nama: 'Edo',
    umur: 22,
}

for(i in mhs){
    console.log(i);
}

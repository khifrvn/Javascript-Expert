// Function yang beroperasi pada funtion yang lain.
// Baik itu digunakan dalam argument, maupun sebagai return value

function method(matkul, selesai){
    console.log(`tugas ${matkul}`);
    selesai();
}   
 
 function selesai(){
     alert('Selesai nich')
 }

 method('Inggris', selesai);

// Contoh

 for(let i=0; i<10; i++){
     console.log(i)
 }

 // Sederhananya

 function repeatLog(n){
     for(let i=0; i<n; i++){
         console.log(i)
     }
 }

 repeatLog(100);

 // Atau

 function repeatLog(n, action){
    for(let i=0; i<n; i++){
        action(i)
    }
}

repeatLog(100, console.log);
repeatLog(3, alert);

 
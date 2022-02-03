//promise
// object yang mempresentasikan berhasil / gagal pada event async 
// states   (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi     (then / catch)

// contoh 
let ditepati = true;
const janji1 = new Promise((resolve, reject) =>{
    if(ditepati){
        resolve('Janji ditepati');
    } else {
        reject('ingkar janji');
    }
});

janji1
    .then(response => console.log('Ok' + response))
    .catch(response => console.log('Not' + response));
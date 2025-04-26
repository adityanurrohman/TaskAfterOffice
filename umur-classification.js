//Task 1 - Menentukan Kategori Usia

function kategori(usia){
    if (usia >= 0 && usia <= 12){
        return 'Anak-anak';
    } else if (usia >= 13 && usia <= 17){
        return 'Remaja';     
    } else if (usia >= 18 && usia <= 59){
        return 'Dewasa';
    } else if (usia >= 60){
        return 'Lansia';
    } else {
        return 'Usia tidak Valid';
    }
}

//Data Usia
const daftarusia = [5,16,30,64,8,17,45,70,12];

let anak = 0, remaja = 0, dewasa = 0, lansia = 0;

for (let i = 0; i < daftarusia.length; i+=1){
    const kategoriUsia = kategori(daftarusia[i]);
    switch (kategoriUsia){
        case 'Anak-anak':
            anak++;
            break;
        case 'Remaja':
            remaja++;
            break;
        case 'Dewasa':
                dewasa++;
                break;
        case 'Remaja':
                remaja++;
                break;
        case 'Lansia':
                lansia++;
                break;
        default:
            console.log(`Usia tidak valid: ${daftarUsia[i]}`);
    }

}

//Output
console.log('Hasil dari Klasifikasi Usia:');
console.log(`Anak-anak: ${anak} orang`); 
console.log(`Remaja: ${remaja} orang`);
console.log(`Dewasa: ${dewasa} orang`);
console.log(`Lansia: ${lansia} orang`);
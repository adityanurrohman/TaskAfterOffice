const readline = require('readline');

// Function operasi matematika
function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return b !== 0 ? a / b : 'Error: Pembagian dengan nol!';
}

// Function untuk menampilkan menu
function tampilkanMenu() {
  console.log("Pilih operasi:");
  console.log("1. Penjumlahan");
  console.log("2. Pengurangan");
  console.log("3. Perkalian");
  console.log("4. Pembagian");
}

// Main program
async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (query) => new Promise(resolve => rl.question(query, resolve));

  tampilkanMenu();

  const pilihan = await question('Masukkan pilihan (1-4): ');
  const angka1 = parseFloat(await question('Masukkan angka pertama: '));
  const angka2 = parseFloat(await question('Masukkan angka kedua: '));

  let hasil;
  let operasi;

  switch (pilihan) {
    case '1':
      hasil = tambah(angka1, angka2);
      operasi = "Penjumlahan";
      break;
    case '2':
      hasil = kurang(angka1, angka2);
      operasi = "Pengurangan";
      break;
    case '3':
      hasil = kali(angka1, angka2);
      operasi = "Perkalian";
      break;
    case '4':
      hasil = bagi(angka1, angka2);
      operasi = "Pembagian";
      break;
    default:
      console.log("Pilihan tidak valid!");
      rl.close();
      return;
  }

  console.log(`\nOperasi: ${operasi}`);
  console.log(`Angka 1: ${angka1}`);
  console.log(`Angka 2: ${angka2}`);
  console.log(`Hasil: ${hasil}`);

  rl.close();
}

// Jalankan program
main();

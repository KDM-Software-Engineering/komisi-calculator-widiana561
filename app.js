// TODO
/**
 *  a.	Buatlah sebuah function bernama calculateKomisi
    b.	Function calculateKomisi menerima 1 parameter yaitu nilaiKontrak
    c.	Function calculateKomisi akan mengembalikan nilai komisi dengan ketentuan: 
      i.	Jika nilaiKontrak >= 1.000.000 maka nilai komisi adalah 100.000
      ii.	Jika nilaiKontrak >= 5.000.000 maka nilai komisi adalah 5% dari nilai kontrak
      iii.	Selain itu akan mengembalikan nilai 0
 */

// TULIS SCRIPT KAMU DI SINI

function calculateKomisi(nilaiKontrak) {
  if (nilaiKontrak >= 5000000){

    return nilaiKontrak * 0.05;

  } else if (nilaiKontrak >= 1000000) {
    return 100000;

  } else {
    return 0;
  }
}
console.log(calculateKomisi(5000000))


// JANGAN HAPUS / UBAH SCRIPT DI BAWAH
module.exports = calculateKomisi 
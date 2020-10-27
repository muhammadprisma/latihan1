/*
Buatlah sebuah program yang membantu memvalidasi data ABSEN
dan NILAI akhir( 2 nilai UH dan 1 nilai Ujian FISIKA) sesorang
siswa

*/

var nama = 'Caul';
var jumlahAbsen = 3 ;
var nilaiUh1 = 80;
var nilaiUh2 = 90;
var nilaiUjian = 90;
var nilaiAkhir = 0;
var keterangan = '';

nilaiAkhir = (25/100*nilaiUh1)+(25/100*nilaiUh2)+(50/100*nilaiUjian);

if(!nama && !jumlahAbsen && !nilaiUh1 && !nilaiUh2 && !nilaiUjian) {
    keterangan =`INVALID DATA`
} else if(nilaiAkhir > 100 || nilaiAkhir < 0) {
    keterangan =`Data nilai yang dimasukkan salah!`
} else if(nilaiAkhir >= 75){
   if (jumlahAbsen <= 3) { 
    keterangan =`Selamat ${nama} anda lulus Mata Pelajaran ini dengan nilai ${nilaiAkhir}!`
   } else {
    keterangan =`Anda lulus dengan nilai ${nilaiAkhir}, tapi harus konfirmasi kepada jurusan terkait masalah absen `
   }
} else {
    keterangan =`Mohon maaf ${nama} anda harus remedial, karena nilai anda ${nilaiAkhir}!, anda harus temui dosen bersangkutan`
}

console.log(keterangan);
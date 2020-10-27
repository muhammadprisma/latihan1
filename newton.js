/*
Buatlah sebuah persamaan hukum newton 2, yang menyatakan :
" Percepatan(a) yang dialami oleh sebuah benda bermassa(m) dipengaruhi
oleh sejumlah gaya(F) yang bekerja padanya"


write your code here!
*/

var gaya1 = 400;
var gaya2 = -200;
var gaya3 = 150;
var massa = 2;

var gaya = 0;
var percepatan = 0;

gaya =  gaya1+gaya2+gaya3;
percepatan = gaya/massa;

console.log(`Maka besar percepatan benda adalah ${percepatan}`);
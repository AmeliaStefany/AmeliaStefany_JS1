var angka = 4;

if (angka > 0) {
  console.log("Angka adalah positif.");

  if (angka % 2 === 0) {
    console.log("Angka adalah genap.");
  } else {
    console.log("Angka adalah ganjil.");
  }
} else if (angka < 0) {
  console.log("Angka adalah negatif.");
} else {
  console.log("Angka adalah nol.");
}

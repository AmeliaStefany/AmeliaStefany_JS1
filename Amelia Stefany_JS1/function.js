function NilaiPangkat(angka, pangkat) {
    return Math.pow(angka, pangkat);
  }
  
  var angka = 3;
  var pangkat = 2;
  var hasilPangkat = NilaiPangkat(angka, pangkat);
  
  console.log(angka + " pangkat " + pangkat + " adalah: " + hasilPangkat);
  
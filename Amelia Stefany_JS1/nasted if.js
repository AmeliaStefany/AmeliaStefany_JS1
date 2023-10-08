var PresentaseKehadiranMahasiswa = 80;  
var NilaiUjian = 98;  // Nilai ujian

if (PresentaseKehadiranMahasiswa >= 75) {
  console.log("Kehadiran Memadai.");

  if (NilaiUjian >= 80) {
    console.log("Nilai: A");
  } else if (NilaiUjian>= 70) {
    console.log("Nilai: B");
  } else {
    console.log("Nilai: C");
  }

} else {
  console.log("Kehadiran kurang.");
}

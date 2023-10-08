var day = 10;
var dayName;

switch (day) {
  case 0:
    dayName = "Minggu";
    break;
  case 1:
    dayName = "Senin";
    break;
  case 2:
    dayName = "Selasa";
    break;
  case 3:
    dayName = "Rabu";
    break;
  case 4:
    dayName = "Kamis";
    break;
  case 5:
    dayName = "Jum'at";
    break;
  case 6:
    dayName = "Sabtu";
    break;
  default:
    dayName = "Hari tidak valid";
}

console.log("Hari ini adalah hari " + dayName);


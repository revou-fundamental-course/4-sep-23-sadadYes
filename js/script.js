document.getElementById("calculateBtn").addEventListener("click", function() {
  var sideLength = document.getElementById("sideLength").value;
  var calculationType = document.getElementById("calculationType").value;
  
  if (sideLength) {
    if (calculationType === "area") {
      var area = sideLength * sideLength;
      document.getElementById("result").innerHTML = "Luas: " + area;
    } else if (calculationType === "perimeter") {
      var perimeter = 4 * sideLength;
      document.getElementById("result").innerHTML = "Keliling " + perimeter;
    }
  } else {
    document.getElementById("result").innerHTML = "Masukkan Panjang sisi.";
  }
});

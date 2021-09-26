var result = document.getElementById("result")
var friendshipscore= Math.random()
friendshipscore= friendshipscore*100
friendshipscore= Math.floor(friendshipscore) + 1

document.getElementById("calculate").addEventListener("click", myFunction);

function myFunction() {
  result.innerHTML= "Your Friendship score is "+ friendshipscore
}





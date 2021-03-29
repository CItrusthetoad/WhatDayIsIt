// This is terribly inefficient. Too bad!
let fullDate = new Date();
let d = fullDate.getDay();
let m = fullDate.getMonth();
let dateNum = fullDate.getDate();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function FindDate() {
  document.getElementsByTagName("h1")[0].innerHTML = "Today is " + days[d];
  document.getElementsByTagName("h1")[1].innerHTML = months[m] +  " " + dateNum + ", " + fullDate.getFullYear();
  console.log(dateNum);
}

console.log(d);
FindDate();

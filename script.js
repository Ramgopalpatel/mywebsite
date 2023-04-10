setInterval(() => {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}, 1000);

const d = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
document.getElementById("date").innerHTML =
  days[d.getDay()] +
  ", " +
  d.getDate() +
  "-" +
  months[d.getMonth()] +
  "-" +
  d.getFullYear();

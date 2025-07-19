let points = parseInt(localStorage.getItem("points")) || 0;
document.getElementById("points").innerText = points;

// Referral Logic
const url = new URL(window.location.href);
const ref = url.searchParams.get("ref");
if (ref) {
  localStorage.setItem("ref", ref);
}

// Add 1 point
points += 1;
localStorage.setItem("points", points);
document.getElementById("points").innerText = points;

// Your referral link (replace user123 later)
let reflink = `${window.location.origin}${window.location.pathname}?ref=user123`;
document.getElementById("reflink").innerText = reflink;

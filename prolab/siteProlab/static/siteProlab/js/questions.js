const modal = document.getElementById("question-modal");
const btn = document.getElementById("ask-question-btn");
const closeBtn = document.querySelector(".close-btn");

btn.onclick = function() {
   modal.style.display = "block";
}

closeBtn.onclick = function() {
   modal.style.display = "none";
}

window.onclick = function(event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}

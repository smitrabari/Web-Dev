// exercise 1
document.getElementById("button1").addEventListener("click", function () {
  let paragraphchange = document.getElementById("paragraph1");
  paragraphchange.textContent = "Text changed!";
});

// exercise 2
document.getElementById("button2").addEventListener("click", function () {
  let cities = document.getElementById("list1");
  cities.firstElementChild.classList.add("highlight");
});

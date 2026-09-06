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

// exercise 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffetype = document.getElementById("coffeeType");
  coffetype.textContent = "espresso";
});

// exercise 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newitem = document.createElement("li");
  newitem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newitem);
});

// exercise 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    document.getElementById("taskList").lastElementChild.remove();
  });

//   exercise 6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("Hello! You double clicked the button.");
  });

// exercise 7
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected: " + event.target.textContent);
  }
});

// exercise 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedbackinput = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent =
      `Your Feedback is: ${feedbackinput}`;
  });

// esercise 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent =
    "DOM is fully loaded and parsed.";
});

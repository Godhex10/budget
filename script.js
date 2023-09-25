var parent = document.querySelector(".modal-parent"),
    btn = document.querySelector(".pop-btn"),
    X = document.querySelector(".x"),
    section = document.querySelector("section");

btn.addEventListener("click", appear);

function appear() {
    parent.style.display = "block";
    section.style.filter = "blur(10px)"
}
X.addEventListener("click", disappearX);
function disappearX() {
    parent.style.display = "none";
    section.style.filter = "blur(0px)"
}
parent.addEventListener("click", disappearParent)
function disappearParent(e) {
    if (e.target.className == "modal-parent") {
        parent.style.display = "none";
        section.style.filter = "blur(0px)"
    }
}

// create a function to update the date and time
function updateDateTime() {
    // create a new `Date` object
    const now = new Date();

    // get the current date and time as a string
    const currentDateTime = now.toLocaleString();

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#datetime').textContent = currentDateTime;
  }

  // call the `updateDateTime` function every second
  setInterval(updateDateTime, 1000);
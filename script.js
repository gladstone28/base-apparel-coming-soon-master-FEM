let input = document.querySelector("input"),
    form = document.querySelector("form"),
    error = document.createElement("div"),
    button = document.querySelector("button"),
    image = document.querySelector(".image");


error.classList = "error";
error.appendChild(document.createTextNode("Please provide a valid email"));

input.oninvalid =  function() {
    form.appendChild(error);
    input.style.border = "1px solid red";
    button.classList.add("visible");
};
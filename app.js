document.querySelector("header .list").onclick = function () {
    this.nextElementSibling.style.right = "0";
};

document.querySelector(".close").onclick = function () {
    this.parentElement.style.right = "min(-70%, -350px)"
}
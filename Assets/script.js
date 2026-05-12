
const menuToggle = document.getElementById("menuToggle");

const sidebar = document.getElementById("sidebar");

const menuArrow = document.getElementById("menuArrow");

menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("active");

    menuToggle.classList.toggle("active");

    // CHANGE ARROW DIRECTION

    if(sidebar.classList.contains("active")){

        menuArrow.src = "Logo & Icons/arrow-left.svg";

    } else {

        menuArrow.src = "Logo & Icons/arrow-right.svg";
    }

});
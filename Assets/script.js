const menuToggle = document.getElementById("menuToggle");

const sidebar = document.getElementById("sidebar");

const menuArrow = document.getElementById("menuArrow");

menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("active");

    menuToggle.classList.toggle("active");

    if(sidebar.classList.contains("active")){

        menuArrow.textContent = "<";

    } else {

        menuArrow.textContent = ">";
    }

});
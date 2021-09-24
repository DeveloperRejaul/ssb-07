var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container-01");


menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}


// Add Class and Remove Class in Multipul eliment
// $(Document).on("mouseover", ".sidebar .shortcut-link a", function(){
//     $(this).addClass("active").siblings().removeClass("active");
// });

// document.getElementById("header__dropbtn").addEventListener('onclick', function () {
//     alert("hello");
// });


function showHideMenu() {
    let menuList = document.getElementById("header-small-screen__menu");
    let dropBtn = document.getElementById("header__dropbtn");
    if (menuList.classList.contains("menu-hidden")) {
        menuList.classList.remove("menu-hidden");
        dropBtn.classList.toggle("change");
    } else {
        menuList.classList.add("menu-hidden");
    }
}
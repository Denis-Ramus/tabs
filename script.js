document.addEventListener("DOMContentLoaded", function() {

    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabs(){
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }

    function showTab(id) {
        tabContent[id].classList.remove("hide");
        tabContent[id].classList.add("show");
    }

    hideTabs();
    showTab(0);

    info.addEventListener("click", function(event) {
        target = event.target;
        console.log(event.target);
        for(let i = 0;  i < tab.length; i++) {
            if(target == tab[i]) {
                hideTabs();
                showTab(i);
            }
        }
    });
});
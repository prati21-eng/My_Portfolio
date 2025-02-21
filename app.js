let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");


let sidemunu = document.getElementById("sidemenu");

function openTab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link")

    document.getElementById(tabname).classList.add("active-tab")
}

function openmenu(){
    sidemunu.style.right="0";
}
function closemenu(){
    sidemunu.style.right="-200px";
}



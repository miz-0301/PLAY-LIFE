const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.opacity = "1";
        topBtn.style.visibility = "visible";

    }else{

        topBtn.style.opacity = "0";
        topBtn.style.visibility = "hidden";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
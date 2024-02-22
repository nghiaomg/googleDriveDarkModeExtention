(function () {

    // document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
    // document.querySelector("div").style.backgroundColor = "#282424 !important";
    document.querySelector("html").style.filter = "invert(100%)";
    document.querySelector("html").style.backgroundColor = "#282424";

    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
    })

})();
// on click class heads change image
let count = 0;
function clickImage() {
    // change src of image
    var image = document.getElementsByClassName("heads");

    if (count%2 == 0) {
        image[0].style.transition = "transform 1s";
        image[0].src = "Snapchat-672484951.jpg";
        image[0].style.transform = "rotateY(-180deg)";
    }
    else {
        image[0].style.transform = "rotateY(0deg)";
        image[0].style.transition = "transform 1s";
        image[0].src = "kavya.jpg";
    }
    count++;
}

let vcount = 75924382;
function incCount() {
    vcount++;
    var c = document.getElementsByClassName("count");
    c[0].innerHTML = vcount;
}
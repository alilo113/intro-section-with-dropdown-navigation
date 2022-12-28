const dropDown = document.getElementById("drop-down");
const features = document.getElementById("features");

features.addEventListener("mouseover", () => { //this is for the <a> tag in the html
    if(dropDown.style.visibility === "hidden"){
        dropDown.style.visibility = "visible";
    }
    else{
        dropDown.style.visibility = "hidden";
    }

    document.addEventListener("mouseout", () => {
        dropDown.style.visibility = "hidden";
    })
})

dropDown.addEventListener("mouseover", () => {
    dropDown.style.visibility = "visible";
})
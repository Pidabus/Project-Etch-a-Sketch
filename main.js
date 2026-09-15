const container = document.querySelector("#container");

function gridMaker() {

    for (let i = 0; i < 256; i++) {
        const flex_item = document.createElement("div");
        container.appendChild(flex_item);
    }
}

gridMaker();

container.addEventListener("mouseover", (e) => {
    let target = e.target;

    target.style.backgroundColor = "red";
});

container.addEventListener("mouseout", (e) => {
    let target = e.target;

    target.style.backgroundColor = "rgb(255, 255, 0)";
})
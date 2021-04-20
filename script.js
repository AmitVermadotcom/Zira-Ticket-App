let TC = document.querySelector(".ticket-container");
let filter = document.querySelectorAll(".filter");
let add = document.querySelector(".add");
for(let i=0;i<filter.length;i++){
    filter[i].addEventListener("click",filterHandler);
}

// function filterHandler(e){
//     console.log(e.currentTarget.children[0].classList[0].split("-")[0]);
//     let clr = e.currentTarget.children[0].classList[0].split("-")[0];
//     TC.style.backgroundColor = clr;
// }

function filterHandler(e){
    let span = e.currentTarget.children[0];

    let styles = getComputedStyle(span);
    // console.log(styles);
    TC.style.backgroundColor = styles.backgroundColor;
}
add.addEventListener("click",popUp);

function popUp(e){
    add.innerHTML=``
}
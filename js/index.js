// Your code goes here


// Wheel 
function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);

    el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector('img');
el.onwheel = zoom;


// Mouseover
const test = document.querySelector(".main-navigation");
test.addEventListener("mouseenter", (event) => {
    event.target.style.color= "pink";

    setTimeout(() => {
        event.target.style.color = "orange";
    }, 500);
}, false);

test.addEventListener("mouseover", (event) => {
    event.target.style.color = "#6B88C3";

    setTimeout(() => {
        event.target.style.color = "orchid";
    }, 500);
}, false);


// Click
const contentSect = document.querySelector(".intro");
contentSect.addEventListener('click', (event) => {
    contentSect.style.backgroundColor="#FDF6CA";

    console.log(event);
    event.stopPropagation();
});


// KeyDown 
const body = document.querySelector('body');
body.addEventListener('keydown', (event) => {
    body.style.backgroundColor = 'aqua';
})


// KeyUp
body.addEventListener('keyup', (event) => {
    body.style.backgroundColor= 'pink';
})

// DoubleClick
const footer = document.querySelector('footer');
footer.addEventListener('dblclick', (e) => {
    footer.classList.toggle('large');
});


// MouseEnter 
const buttons = document.querySelector(".destination");

buttons.forEach("mouseenter", (event) => {
    alert(event.target);
    event.target.style.transform = "scale(1.5)"
    event.target.style.transition = "all 0.3s";
})
// MouseLeave
buttons.forEach("mouseleave", (event) => {
    event.target.style.transform= "scale(1.0)";
    event.target.style.transition = "all 0.3s"
});















// Scroll
// window.addEventListener("scroll", (e) =>{
//     document.querySelector(".main-navigation").style.backgroundColor
// })




// const body = document.querySelector(".content-destination");
// body.addEventListener("click", () => {
//     body.style.backgroundColor="purple";
//     console.log("end")
// })
// const imgGroup = document.querySelector(".content-pick");
// imgGroup.addEventListener('click', (event) => {
//     imgGroup.style.backgroundColor="aqua";
//     console.log("middle")
// });



// document.getElementById(".destination").addEventListener("click", function() {
//     document.body.style.backgroundColor = prompt("red");
// });


// buttons.forEach(link => link.addEventListener("mouseenter", (event) =>{
//     link.style.transform = "scale(1.5)"
//     link.style.transition = "all 0.3";
// });

// **Attempt at Resize???
// const heightOutput = document.querySelector('#height');
// const widthOutput = document.querySelector('#width');
// function reportWindowSize(){
//     heightOutput.textContent = window.innerHeight;
//     widthOutput.textContent = window.innerWidth;
// }
// window.onresize = reportWindowSize;

// img-content.addEventListener('resize', reportWindowSize);
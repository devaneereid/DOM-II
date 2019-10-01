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


// Scroll
// window.addEventListener("scroll", (e) =>{
//     document.querySelector(".main-navigation").style.backgroundColor
// })

const buttons = document.querySelector(".btn");

buttons.forEach("mouseenter", (event) => {
    alert(event.target);
    event.target.style.transform = "scale(1.5)"
    event.target.style.transition = "all 0.3s";
})
buttons.forEach("mouseleave", (event) => {
    event.target.style.transform= "scale(1.0)";
    event.target.style.transition = "all 0.3s"
});


const body = document.querySelector(".content-destination");
body.addEventListener("click", () => {
    body.style.backgroundColor="purple";
    console.log("end")
})
const imgGroup = document.querySelector(".content-pick");
imgGroup.addEventListener('click', (event) => {
    imgGroup.style.backgroundColor="aqua";
    console.log("middle")
});



// document.getElementById(".destination").addEventListener("click", function() {
//     document.body.style.backgroundColor = prompt("red");
// });


// buttons.forEach(link => link.addEventListener("mouseenter", (event) =>{
//     link.style.transform = "scale(1.5)"
//     link.style.transition = "all 0.3";
// });



















// Drag
// var dragged;

// document.addEventListener("drag", (event) => {

// }, false);

// document.addEventListener("dragstart", (event) => {
//     dragged = event.target;
//     event.target.style.opacity = .5;
// }, false);

// document.addEventListener("dragend", (event) => {
//     event.target.style.opacity = "";
// }, false);


// const boxes =
// document.querySelectorAll('.content-destination');
// boxes.forEach(box => {
//     box.addEventListener('mouseover', (e) => {
//         TweenMax.to(e.target, 0.5, {
//         scale: 2,
//         filter: 'none',
//         ease: Elastic.eastOut.config(1, 0.75),
//         yoyo: true,
//         repeat: 1
// })
// })
//    box.addEventListener('mouseleave', (e) => {
//     TweenMax.to(e.target, 0.5, {
//       scale: 1,
//       filter: 'grayscale(1) blur(3px)',
//       ease: Power1.easeIn
//     })
//   })
// })


// // Attempt at dblclick
// const titles = document.querySelector("btn");

// titles.addEventListener('dblclick', (e) => {
//     titles.classList.toggle('large');
//     console.log(event);
// });











// Scroll **????
// let last_known_scroll_postition = 0;
// let ticking = false;

// function destinationImg(scroll_pos) {

// }
// window.addEventListener('scroll', (e) => {
//     last_known_scroll_postition = window.scrollY;

//     if (!ticking) {
//         img.requstAnimationFrame( (e) => {
//         destinationImg(last_known_scroll_postition);
//         ticking= false;
//         });
//         ticking = true;
//     }

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
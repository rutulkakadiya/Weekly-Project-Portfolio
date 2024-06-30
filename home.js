// let sec = document.querySelectorAll('section')
// let links = document.querySelectorAll('nav a .txt')

// window.onscroll = () => {
//     sec.forEach(section =>{
//         let top = window.screenY;
//         let offset = section.offsetTop - 60;
//         let height = section.offsetHeight;
//         let id = section.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             links.forEach(link => {
//                 link.classList.remove('active');
//                 document.querySelectorAll('nav a .txt[href*= '+ id +']'.classList.add('active'))
//             })
//         }
//     })
// };

let li = document.querySelectorAll("nav a");
let sec1 = document.querySelectorAll("section");

function activeMenu() {
    let len = sec1.length;
    while (--len && window.scrollY + 97 < sec1[len].offsetTop) { }
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);


let li1 = document.querySelectorAll(".header .nav a");
let sec2 = document.querySelectorAll("section");

function activeMenu1() {
    let len = sec2.length;
    while (--len && window.scrollY + 97 < sec2[len].offsetTop) { }
    li1.forEach(ltx => ltx.classList.remove("active"));
    li1[len].classList.add("active");
}

activeMenu1();
window.addEventListener("scroll", activeMenu1);


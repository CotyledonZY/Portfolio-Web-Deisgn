const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;
const secitons = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [80,75,80,95,70,80,70];

window.addEventListener("scroll", () => {
    mainFn();
});

const mainFn = () => {
    if(window.scrollY >= navbarOffsetTop){
        //console.log("sticky");
        navbar.classList.add("sticky");
    } else{
        navbar.classList.remove("sticky");
    };

    secitons.forEach((section, i) => {
        if(window.scrollY >= section.offsetTop - 10){
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove("change");
            })
            navbarLinks[i].classList.add("change")
        }
    });

    if(window.scrollY + window.innerHeight >= progress.offsetTop){
        document.querySelectorAll('.progress-percent').forEach((el,i)=>{
            el.style.width = `${progressBarPercents[i]}%`;
            el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
        });
    }
}

mainFn();

// reload the page when resize the window
window.addEventListener('resize', () =>{
    window.location.reload();
})
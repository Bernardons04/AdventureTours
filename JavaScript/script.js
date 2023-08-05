const navHeader = document.querySelector(".navHeader");
const divMenu = document.querySelector(".divMenu");
const linkMenu = document.querySelectorAll(".linkMenu")
let section = document.querySelectorAll('section[id]')
const navList = document.querySelector(".navList")

divMenu.addEventListener("click", () => {
    navHeader.classList.toggle("showNav")
    if (navHeader.classList.contains('showNav') === true) {
        divMenu.style.color = "var(--laranja)"
        divMenu.style.transform = "scale(1.3)";
    } else {
        divMenu.style.color = "var(--cor2)"
        divMenu.style.transform = "scale(1)";
    }
})

Array.from(linkMenu).forEach(link => {
    link.addEventListener("click", () => {
        navHeader.classList.remove("showNav")
        divMenu.style.color = "var(--cor2)"
        divMenu.style.transform = "scale(1)";
    })
})

window.addEventListener("scroll", () => {
    let header = document.querySelector("#header")
    header.classList.toggle('headerRoll', window.scrollY > 0)
})
/*
window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            linkMenu.forEach(links => {
                links.classList.remove('activeClass')
                document.querySelector('.linkNav a[href*=' + id + ']').classList.add('activeClass')
            })
        }
    })
}*/

window.onscroll = () =>{
    const scrollY2 = window.pageYOffset

    section.forEach(sec => {
        let offsetTop = sec.offsetTop - 58;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        const sectionClass = document.querySelector('.linkNav a[href*=' + id + ']')
        
        if (scrollY2 > offsetTop && scrollY2 <= offsetTop + height) {
            sectionClass.classList.add('activeClass')
        } else {
            sectionClass.classList.remove('activeClass')
        }
    })
}

//ScrollReveal
const scrl = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
   //reset: true
})

scrl.reveal('.contentInicio, .footerInferior, .footer-content')
scrl.reveal('#servicos h1, .precos')
scrl.reveal(`.contentServicos`, {delay: 600, distance: '100px', interval: 100})
scrl.reveal('.destinosMain', {origin: 'left', delay: 600, distance: '100px', interval: 100})
scrl.reveal('.listaDestinos', {origin: 'left', delay: 600, distance: '100px', interval: 100})
scrl.reveal('.contato', {origin: 'left'})
scrl.reveal('.divContactImg', {origin: 'right'})
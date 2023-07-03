/*================togle icon navbar===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*================scroll section active link===============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }

    });

    /*================sticky navbar===============*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================ remove togle icon  and navbar when click navbar link (scroll)===============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*================Scroll reveal===============*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { orgin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { orgin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { orgin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { orgin: 'right' });

/*================typed js===============*/
const typed = new Typed('.multiple-text', {

    strings: ['Frontend Developer','Back-end Framework specialist','Data Analyst '],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function sendEmail(){
            Email.send({
                Host : "smtp.gmail.com",
                Username : "omollovanistelrooy@gmail.com",
                Password : "omollo32t",
                To : 'omollovanistelrooy@gmail.com',
                From : document.getElementById(email).value,
                Subject : "This is the subject",
                Body : "And this is the body"
            }).then(
              message => alert(message)
            );
    }


/*================Smtp api move to elastic email and create an account     ` ===============*/


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

    strings: ['Full Stack Developer','Cyber Security Enthusiast. ', 'IT Consultant'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
/*==============
function sendEmail(){
            Email.send({
                Host : "smtp.gmail.com",
                Username : "omollovanistelrooy@gmail.com",
                Password : "omollo32t",
                To : 'omollovanistelrooy@gmail.com',
                From : document.getElementById("email").value,
                Subject : document.getElementById("subject").value,
                Body : "And this is the body"
            }).then(
              message => alert(message)
            );
    }
    ===============*/
/*============== thisabove is an smtp try to connect the form to AN email===============*/

/*================Smtp api move to elastic email and create an account     ` ===============*/

/*SMTP PASSWORD 8D0D35B0347D3BDEF262640B6BE9862BB6F4*/
function downloadCV() {
   
    const fileUrl = 'blob:https://github.com/4cded5b9-b49e-4395-ad11-66851b1b5fcb';

    // Create an anchor element
    const link = document.createElement('a');
    link.href = fileUrl;

    // Set the download attribute to specify the desired filename
    link.download = 'VANISTELROOY RESUME.pdf'; 

    // Append the anchor element to the document body
    document.body.appendChild(link);

    // Programmatically trigger the click event on the anchor element
    link.click();

    // Remove the anchor element from the document body
    document.body.removeChild(link);
}
const cvDownloadButton = document.getElementById('cvDownloadButton');
cvDownloadButton.addEventListener('click', downloadCV);



document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Simulate form submission (replace this with your actual form submission code)
    // For demonstration purposes, were just showing the "thankYou" div after a delay
    setTimeout(function() {
        document.getElementById("myForm").style.display = "none"; // Hide the form
        document.getElementById("thankYou").style.display = "block"; // Show the thank you message

        // Redirect back to the home page after a delay
        setTimeout(function() {
            window.location.href = "index.html"; // Replace with your home page URL
        }, 3000); // Delay for 3 seconds before redirecting
    }, 1000); // Delay for 1 second
});

    

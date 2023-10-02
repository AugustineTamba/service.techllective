// Copyright year
document.getElementById("year").innerHTML = new Date().getFullYear();

// Nav open close
const body = document.querySelector('body');
navMenu = document.querySelector('.menu-content');
menuBtn = document.querySelector('.menu-bar');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("open");
});

// Header background change on scroll
let header = document.querySelector("header")

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

// Change header bg color
window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    if (scrollY > 5) {
        document.querySelector("header").classList.add("header-active");
        // Change the logo image source to black version
        document.querySelector(".logo-icon").src = "./assets/images/dark-logo.png";
    } else {
        document.querySelector("header").classList.remove("header-active");
        // Change the logo image source back to the original version
        document.querySelector(".logo-icon").src = "./assets/images/logo.png";
    }

    // Scroll up button
    const scrollUpBtn = document.querySelector('.scrollUp-btn');

    if (scrollY > 250) {
        scrollUpBtn.classList.add("scrollUpBtn-active");
    } else {
        scrollUpBtn.classList.remove("scrollUpBtn-active");
    }

    // Nav link indicator

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight,
            sectionTop = section.offsetTop - 100;

        // let navId = document.querySelector(`.menu-content a[href='#${section.id}']`);
        // if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        //     navId.classList.add("active-navlink");
        // } else {
        //     navId.classList.remove("active-navlink");
        // }

        // navId.addEventListener("click", () => {
        //     navMenu.classList.remove("open");
        //     body.style.overflowY = "scroll";
        // })

        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle("active");
            navMenu.classList.toggle("open");
        });
    })
})

// Load More btn 
let loadMoreBtn = document.querySelector('#load-more')
let currentItem = 3;


function loadMore() {
    let boxes = [...document.querySelectorAll('.main')];

    for (let i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.transition = 'all 0.8s ease-in-out';
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}



// Contact US
function sendMail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Display popup
    let popupContainer = document.querySelector(".popup-container");
    let popupTitle = document.querySelector(".popup-title");
    let popupMessage = document.querySelector(".popup-message");
    let popupOkayButton = document.querySelector(".popup-okay-button");

    if (name.trim() !== "" && email.trim() !== "") {
        // Check if the email contains "@" and ".com"
        if (email.includes("@") && email.includes(".com")) {
            let params = {
                name: name,
                email: email,
                message: message
            };

            const serviceID = "service_jc8x1si";
            const tempateID = "template_vq9drmp";

            emailjs.send(serviceID, tempateID, params)
                .then(function(response) {
                    console.log("Success!", response.status, response.text);

                    // Show the success message
                    popupTitle.textContent = "Success!";
                    popupMessage.textContent = "Message sent successfully!";

                    // Clear the input fields
                    document.getElementById('name').value = "";
                    document.getElementById('email').value = "";
                    document.getElementById('message').value = "";
                })
                .catch(function(error) {
                    console.log("Failed...", error);

                    // Show the error message
                    popupTitle.textContent = "Error!";
                    popupMessage.textContent = "There was an error sending your message. Please try again later!";
                });
        } else {
            // Show the error message
            popupTitle.textContent = "Invalid Entry!";
            popupMessage.textContent = "Invalid email address. Please check email address and try again!";
        }
    } else {
        // Show the error message
        popupTitle.textContent = "Error!";
        popupMessage.innerHTML = "Name and email fields are empty. <br /> Please provide your name and email address and try again!";
    }


    popupContainer.style.display = "flex";

    // Close the popup when "Okay" button is clicked
    popupOkayButton.addEventListener("click", function() {
        popupContainer.style.display = "none";
    });
}

// Footer Newsletter 
function sendMailNewsletter() {
    let email2 = document.getElementById("email2").value;

    // Display popup
    let popupContainer = document.querySelector(".popup-container1");
    let popupTitle = document.querySelector(".popup-title1");
    let popupMessage = document.querySelector(".popup-message1");
    let popupOkayButton = document.querySelector(".popup-okay-button1");

    if (email2.trim() !== "") {
        // Check if the email contains "@" and ".com"
        if (email2.includes("@") && email2.includes(".com")) {
            let params = {
                email2: email2,
            };

            const serviceID = "service_6vcv0nk";
            const tempateID = "template_f0nxql5";

            emailjs.send(serviceID, tempateID, params)
                .then(function(response) {
                    console.log("Success!", response.status, response.text);

                    // Show the success message
                    popupTitle.textContent = "Success!";
                    popupMessage.textContent = "Message sent successfully!";

                    // Clear the input fields
                    document.getElementById('email2').value = "";

                })
                .catch(function(error) {
                    console.log("Failed...", error);

                    // Show the error message
                    popupTitle.textContent = "Error!";
                    popupMessage.textContent = "There was an error sending your message. Please try again later!";
                });
        } else {
            // Show the error message
            popupTitle.textContent = "Invalid Entry!";
            popupMessage.textContent = "Invalid email address. Please check email address and try again!";
        }
    } else {
        // Show the error message
        popupTitle.textContent = "Error!";
        popupMessage.innerHTML = "Name and email fields are empty. <br /> Please provide your name and email address and try again!";
    }


    popupContainer.style.display = "flex";

    // Close the popup when "Okay" button is clicked
    popupOkayButton.addEventListener("click", function() {
        popupContainer.style.display = "none";
    });
}

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.section-title, .section-subtitle, .section-description, .brand-image, .tesitmonial, .newsletter 
.logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links`, { interval: 100, })

sr.reveal(`.about-imageContent, .menu-items`, { origin: 'left' })
sr.reveal(`.about-details, .time-table`, { origin: 'right' })
import $ from 'jquery'
import '/style.css'
import LocomotiveScroll from 'locomotive-scroll';

// export function setupCounter(element) {
//     let counter = 0
//     const setCounter = (count) => {
//       counter = count
//       element.innerHTML = `count is ${counter}`
//     }
//     element.addEventListener('click', () => setCounter(counter + 1))
//     setCounter(0)
//   }


const page = `
<div class="about-container" data-scroll-container>
        <!-- home container flex direction column -->
        <div class="home-container">
            <!-- navbar flex direction column -->
            <nav class="navbar">
                <h1 class="navbar-title">CREATOR09</h1>
                <div class="navbar-container">
                    <li class="navbar-item">
                        <a href="#about" class="navbar-link">About</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#experience" class="navbar-link">Experience</a>
                    </li>
                    <li class="navbar-item">
                        <a href="#contact" class="navbar-link">Contact</a>
                    </li>
                </div>
            </nav>
        </div>

        <!-- this is hero -->
         <!-- hero container flex direction row -->
         <div class="hero-container" id="about">
            <div class="left-container">
                <h1 class="hero-greet" data-scroll data-scroll-speed="2">Hello</h1>
                <h2 class="hero-name" data-scroll data-scroll-speed="1.5">I'm Leonardo</h2>
                <p class="hero-text" data-scroll data-scroll-speed="1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque ullam doloremque asperiores, dicta deleniti recusandae distinctio incidunt deserunt iure minus repellendus vel totam quam saepe eius sed quas culpa. </p>
            </div>
            <div class="right-container">
                <div class="hero-image-container">
                    <img class="hero-image" src="/ic-hero.png" alt="" data-scroll data-scroll-speed="3">
                </div>
            </div>
         </div>

         <!-- this is experience page -->
          <div class="experience-container" id="experience">
            <h1 class="experience-title">Experience</h1>
            <h2 class="skillset-title">Skill Set</h2>
            <ul class="skill-container">
                <!-- skill-item flex direction row -->
                <li class="skill-item">
                    <img src="/public/ic-python.svg" alt=""  data-scroll data-scroll-delay="1" data-scroll-speed="1">
                    <span class="star-container">
                        <span data-scroll data-scroll-delay="1" data-scroll-speed="1"><img src="/ic-star.svg" alt="" class="star-ic"></span>
                        <span data-scroll data-scroll-delay="0.8" data-scroll-speed="1"><img src="/ic-star.svg" alt="" class="star-ic"></span>
                        <span data-scroll data-scroll-delay="0.6" data-scroll-speed="1"><img src="/ic-star.svg" alt="" class="star-ic"></span>
                        <span data-scroll data-scroll-delay="0.4" data-scroll-speed="1"><img src="/ic-star.svg" alt="" class="star-ic"></span>
                        <span data-scroll data-scroll-delay="0.2" data-scroll-speed="1"><img src="/ic-star.svg" alt="" class="star-ic"></span>
                    </span>
                </li>
                <li class="skill-item">
                    <img src="/public/ic-kotlin.svg" alt=""  data-scroll data-scroll-delay="1" data-scroll-speed="1">
                    <span class="star-container">
                        <span data-scroll data-scroll-delay="1" data-scroll-speed="1"><img src="/ic-star.svg" alt="" class="star-ic"></span>
                        <span data-scroll data-scroll-delay="0.8" data-scroll-speed="1"><img src="/ic-star.svg" alt="" class="star-ic"></span>
                        <span data-scroll data-scroll-delay="0.6" data-scroll-speed="1"><img src="/ic-star.svg" alt="" class="star-ic"></span>
                        <span data-scroll data-scroll-delay="0.4" data-scroll-speed="1"><img src="/ic-star.svg" alt="" class="star-ic"></span>
                        <span data-scroll data-scroll-delay="0.2" data-scroll-speed="1"><img src="/ic-star.svg" alt="" class="star-ic"></span>
                    </span>
                </li>
                <li class="skill-item">
                    <img src="/public/ic-firebase.svg" alt=""  data-scroll data-scroll-delay="1" data-scroll-speed="1">
                    <span class="star-container">
                        <span data-scroll data-scroll-delay="1" data-scroll-speed="1"><img src="/ic-star.svg" alt="" class="star-ic"></span>
                        <span data-scroll data-scroll-delay="0.8" data-scroll-speed="1"><img src="/ic-star.svg" alt="" class="star-ic"></span>
                        <span data-scroll data-scroll-delay="0.6" data-scroll-speed="1"><img src="/ic-star.svg" alt="" class="star-ic"></span>
                        <span data-scroll data-scroll-delay="0.4" data-scroll-speed="1"><img src="/ic-star.svg" alt="" class="star-ic"></span>
                        <span data-scroll data-scroll-delay="0.2" data-scroll-speed="1"><img src="/ic-star.svg" alt="" class="star-ic"></span>
                    </span>
                </li>
            </ul>

            <div class="project-container">
                <h1 class="project-header">Project</h1>
                <div class="project-matrix">
                    <!-- project-row flex direction row -->
                    <ul class="project-row">
                        <li class="project-box"></li>
                        <li class="project-box"></li>
                        <li class="project-box"></li>
                    </ul>
                    <ul class="project-row">
                        <li class="project-box"></li>
                        <li class="project-box"></li>
                        <li class="project-box"></li>
                    </ul>
                </div>
            </div>
          </div>

          <div class="contact-container" id="contact">
            <h1 class="contact-title">Contact Me</h1>
            <!-- logo container flex direction row -->
            <div class="logo-container">
                <a href="https://github.com/LeonardoNifinluri" target="_blank"  class="contact-name">
                    <img src="/ic-igithub.png" alt="" class="logo-ic">
                </a>
                <a href="https://www.linkedin.com/in/leonardo-nifinluri-87b912289/" target="_blank"  class="contact-name">
                    <img src="/ic-linkedin.png" alt="" class="logo-ic">
                </a>
                <a href="https://web.facebook.com/leonardo.nifinluri.50" target="_blank"  class="contact-name">
                    <img src="/ic-facebook.png" alt="" class="logo-ic">
                </a>
                <a href="https://www.instagram.com/leonardonifinluri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"  class="contact-name">
                    <img src="/ic-instagram.png" alt="" class="logo-ic">
                </a>
            </div>
            <p class="copyright">Copyright © Leonardo Nifinluri</p>
          </div>
    </div>`

$('#app').html(page)

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });

  // Get all navbar links
  const navbarLinks = document.querySelectorAll('.navbar-link');

  // Function to handle link clicks
  navbarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent default anchor behavior
          const targetId = link.getAttribute('href'); // Get the target section ID

          try {
              scroll.scrollTo(document.querySelector(targetId)); // Scroll to the target section smoothly
          } catch (error) {
              console.error(error);
          }

          // Remove 'active' class from all links
          navbarLinks.forEach(nav => nav.classList.remove('active'));

          // Add 'active' class to the clicked link
          link.classList.add('active');
      });
  });
});



  



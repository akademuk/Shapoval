let lastScrollY = window.scrollY;
const headerBig = document.querySelector('.header-big');

window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
 
        headerBig.style.transition = 'transform 0.3s';
    } else {
     
    }
    lastScrollY = window.scrollY;
});

function updateCountdowns() {
    const now = new Date().getTime();

    // Получаем все таймеры с классом `section-cta-left-time-box`
    document.querySelectorAll('.section-cta-left-time-box').forEach(timer => {
        const endTime = new Date(timer.getAttribute('data-end-time')).getTime();
        const timeLeft = endTime - now;

        // Расчёт дней, часов, минут и секунд
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Обновляем HTML элементы внутри текущего таймера
        timer.querySelector(".days").textContent = days < 10 ? '0' + days : days;
        timer.querySelector(".hours").textContent = hours < 10 ? '0' + hours : hours;
        timer.querySelector(".minutes").textContent = minutes < 10 ? '0' + minutes : minutes;
        timer.querySelector(".seconds").textContent = seconds < 10 ? '0' + seconds : seconds;

        // Если отсчёт завершён
        if (timeLeft < 0) {
            timer.querySelector(".days").textContent = "00";
            timer.querySelector(".hours").textContent = "00";
            timer.querySelector(".minutes").textContent = "00";
            timer.querySelector(".seconds").textContent = "00";
        }
    });
}

// Запускаем обновление таймеров каждую секунду
setInterval(updateCountdowns, 1000);


document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.section-vertical-swiper', {
        direction: 'vertical',   
        slidesPerView: 1.5,    
        loop: true,                     
        autoplay: {
            delay: 3000,                
            disableOnInteraction: false 
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,            
        },
        spaceBetween: 24,              
        on: {
            init: function () {
                const swiperEl = document.querySelector('.section-vertical-swiper');
                
                swiperEl.addEventListener('mouseenter', () => {
                    swiper.autoplay.stop();
                });

                swiperEl.addEventListener('mouseleave', () => {
                    swiper.autoplay.start();
                });
            }
        }
    });
});

$(document).ready(function() {
    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 1,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
    });

    // Check if the element exists and binds Fancybox
    $('.play-btn').on('click', function(event) {
        console.log("Fancybox should open now for video: " + $(this).attr('href'));
    });
});

function toggleCards() {
    if (window.matchMedia("(min-width: 1280px)").matches) {

        document.querySelectorAll('.section-program-card').forEach(function(card) {
            card.style.display = 'flex';
        });
        document.querySelector('.show-more').style.display = 'none';
    } else {

        document.querySelectorAll('.section-program-card:nth-child(n+3)').forEach(function(card) {
            card.style.display = 'none';
        });
        document.querySelector('.show-more').style.display = 'flex';
        

        document.querySelector('.show-more').addEventListener('click', function() {
            document.querySelectorAll('.section-program-card:nth-child(n+3)').forEach(function(card) {
                card.style.display = 'flex';
            });
            this.style.display = 'none';
        });
    }
}

toggleCards();
window.addEventListener('resize', toggleCards);

document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".section-about-slider", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });
});

document.addEventListener("DOMContentLoaded", function() {
    var swiper1 = new Swiper(".section-slider", {
        loop: true, 
        slidesPerView: "auto",
        spaceBetween: 16,   
        autoplay: {
            delay: 500, 
            disableOnInteraction: false, 
            pauseOnMouseEnter: true
        },
        speed: 500,
        effect: 'slide', 
        breakpoints: {
            1280: {
                spaceBetween: 24,
            }
        }
    });

    const sliderElement = document.querySelector('.section-slider');
    
    sliderElement.addEventListener('mouseenter', () => {
        swiper1.autoplay.stop();
    });

    sliderElement.addEventListener('mouseleave', () => {
        swiper1.autoplay.start();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var swiper1 = new Swiper(".section-reviews-slider", {
        loop: true, 
        slidesPerView: "auto",
        spaceBetween: 16,   
        pagination: {
            el: ".section-reviews-pagination",
            dynamicBullets: true,
        },
      
        speed: 500,
        effect: 'slide', 
    });

    const sliderElement = document.querySelector('.section-reviews-slider');
    
    sliderElement.addEventListener('mouseenter', () => {
        swiper1.autoplay.stop();
    });

    sliderElement.addEventListener('mouseleave', () => {
        swiper1.autoplay.start();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function() {
            accordionButtons.forEach(btn => {
                if (btn !== button) {
                    btn.parentNode.classList.remove("active");
                    btn.nextElementSibling.style.display = "none";
                }
            });

            const content = button.nextElementSibling;
            const isOpen = button.parentNode.classList.contains("active");

            if (isOpen) {
                button.parentNode.classList.remove("active");
                content.style.display = "none";
            } else {
                button.parentNode.classList.add("active");
                content.style.display = "block";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById('main-popup');
    
    const openPopupButtons = document.querySelectorAll('.open-popup-btn');
    openPopupButtons.forEach(button => {
        button.addEventListener('click', function() {
            popup.style.display = 'flex';
        });
    });

    const closeButton = popup.querySelector('.close-btn');
    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        
        var target = $(this.getAttribute('href'));

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000); 
        }
    });
});

$(document).ready(function() {
    // Initialize Fancybox
    $('[data-fancybox="video"]').fancybox();

    // Click event for play button
    $('.btn-play').on('click', function(event) {
        event.preventDefault(); // Prevent the default action

        // Trigger the Fancybox link's click event
        $(this).siblings('.fancybox-link').trigger('click');
    });
});

$(document).ready(function() {
    // Initialize Fancybox for the gallery
    $('[data-fancybox="gallery"]').fancybox({
        buttons: ['close']
    });

    // Trigger Fancybox when clicking on the button
    $('.section-reviews-opens2').on('click', function(event) {
        event.preventDefault(); // Prevent default button behavior

        // Find the sibling <a> tag with the data-fancybox attribute and trigger a click on it
        $(this).siblings('a[data-fancybox="gallery"]').trigger('click');
    });
});

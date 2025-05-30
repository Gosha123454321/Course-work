document.addEventListener('DOMContentLoaded', () => {
    const mobileDropdown = document.querySelector('.mobile-dropdown');

    mobileDropdown.addEventListener('change', (event) => {
        const selectedValue = event.target.value;

        switch (selectedValue) {
            case 'services':
                window.location.href = 'services.html';
                break;
            case 'masters':
                window.location.href = '#';
                break;
            case 'faq':
                window.location.href = 'questions.html';
                break;
            default:
                break;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('menu-overlay');
    const html = document.documentElement;

     function closeMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        html.style.overflow = '';
        document.body.style.overflow = '';
     }

    hamburger.addEventListener('click', function() {
        const isOpening = !this.classList.contains('active');

        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');

        if (isOpening) {
            html.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            closeMenu();
        }
});

    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            dropdownMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});

const yclientsModal = document.getElementById('yclients-modal');
if (yclientsModal) {
    document.getElementById('open-yclients-modal')?.addEventListener('click', function() {
        document.getElementById('yclients-modal').style.display = 'flex';
    });

    document.getElementById('close-yclients-modal')?.addEventListener('click', function() {
        document.getElementById('yclients-modal').style.display = 'none';
    });

    document.getElementById('yclients-modal')?.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Первый слайдер
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const slider = document.querySelector('.slider');
    let currentIndex = 0;
    let autoSlideInterval;

    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    nextArrow.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevArrow.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            currentIndex = index;
            showSlide(currentIndex);
            startAutoSlide();
        });
    });
    startAutoSlide();
});

document.addEventListener('DOMContentLoaded', () => {
    // Второй слайдер
    const studiosSliderTrack = document.querySelector('.studios-slider-track');
    const studiosSlides = document.querySelectorAll('.studios-slide');
    const studiosPrevArrow = document.querySelector('.studios-prev-arrow');
    const studiosNextArrow = document.querySelector('.studios-next-arrow');
    let studiosCurrentIndex = 0;
    let studiosAutoSlideInterval;

    function updateStudiosSlider() {
        const slideWidth = studiosSlides[0].clientWidth;
        studiosSliderTrack.style.transform = `translateX(-${studiosCurrentIndex * slideWidth}px)`;
    }

    function nextStudiosSlide() {
        studiosCurrentIndex = (studiosCurrentIndex + 1) % studiosSlides.length;
        updateStudiosSlider();
    }

    function prevStudiosSlide() {
        studiosCurrentIndex = (studiosCurrentIndex - 1 + studiosSlides.length) % studiosSlides.length;
        updateStudiosSlider();
    }

    function startStudiosAutoSlide() {
        studiosAutoSlideInterval = setInterval(nextStudiosSlide, 3000);
    }

    function stopStudiosAutoSlide() {
        clearInterval(studiosAutoSlideInterval);
    }

    function initStudiosSlider() {
        const firstClone = studiosSlides[0].cloneNode(true);
        const lastClone = studiosSlides[studiosSlides.length - 1].cloneNode(true);
        studiosSliderTrack.appendChild(firstClone);
        studiosSliderTrack.insertBefore(lastClone, studiosSlides[0]);

        const updatedSlides = document.querySelectorAll('.studios-slide');
        studiosSliderTrack.style.transform = `translateX(-${updatedSlides[0].clientWidth}px)`;
        startStudiosAutoSlide();
    }

    studiosNextArrow.addEventListener('click', () => {
        stopStudiosAutoSlide();
        nextStudiosSlide();
        startStudiosAutoSlide();
    });

    studiosPrevArrow.addEventListener('click', () => {
        stopStudiosAutoSlide();
        prevStudiosSlide();
        startStudiosAutoSlide();
    });

    studiosSliderTrack.addEventListener('mouseenter', stopStudiosAutoSlide);
    studiosSliderTrack.addEventListener('mouseleave', startStudiosAutoSlide);

    window.addEventListener('resize', () => {
        updateStudiosSlider();
    });
    initStudiosSlider();
});

document.addEventListener('DOMContentLoaded', () => {
    // Третий слайдер
    const reviewsSliderTrack = document.querySelector('.reviews-slider-track');
    const reviewsSlides = document.querySelectorAll('.reviews-slide');
    const reviewsPrevArrow = document.querySelector('.reviews-prev-arrow');
    const reviewsNextArrow = document.querySelector('.reviews-next-arrow');
    const reviewsMobilePrevArrow = document.querySelector('.reviews-mobile-prev-arrow');
    const reviewsMobileNextArrow = document.querySelector('.reviews-mobile-next-arrow');
    let reviewsCurrentIndex = 0;

    function updateReviewsSlider() {
        const slideWidth = reviewsSlides[0].clientWidth;
        reviewsSliderTrack.style.transform = `translateX(-${reviewsCurrentIndex * slideWidth}px)`;
    }

    function nextReviewsSlide() {
        if (reviewsCurrentIndex < reviewsSlides.length - 3) {
            reviewsCurrentIndex++;
        } else {
            reviewsCurrentIndex = 0;
        }
        updateReviewsSlider();
    }

    function prevReviewsSlide() {
        if (reviewsCurrentIndex > 0) {
            reviewsCurrentIndex--;
        } else {
            reviewsCurrentIndex = reviewsSlides.length - 3;
        }
        updateReviewsSlider();
    }

    reviewsPrevArrow.addEventListener('click', prevReviewsSlide);
    reviewsNextArrow.addEventListener('click', nextReviewsSlide);

    reviewsMobilePrevArrow.addEventListener('click', prevReviewsSlide);
    reviewsMobileNextArrow.addEventListener('click', nextReviewsSlide);

    window.addEventListener('resize', () => {
        updateReviewsSlider();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const citySelect = document.getElementById('city-select');
    const mapElement = document.getElementById('map');

    const cities = {
        chelyabinsk: { lat: 55.1601, lng: 61.4005 },
        moscow: { lat: 55.7558, lng: 37.6176 },
        'saint-petersburg': { lat: 59.9343, lng: 30.3351 }
    };

    const salons = {
        chelyabinsk: [
            { lat: 55.1601, lng: 61.4005, title: "Салон 1" },
            { lat: 55.1500, lng: 61.4100, title: "Салон 2" }
        ],
        moscow: [
            { lat: 55.7558, lng: 37.6176, title: "Салон 1" },
            { lat: 55.7600, lng: 37.6200, title: "Салон 2" }
        ],
        'saint-petersburg': [
            { lat: 59.9343, lng: 30.3351, title: "Салон 1" },
            { lat: 59.9400, lng: 30.3400, title: "Салон 2" }
        ]
    };

    let map;
    let markers = [];

    function initMap(city) {
        const cityCoords = cities[city];
        map = new google.maps.Map(mapElement, {
            center: cityCoords,
            zoom: 12
        });

        if (markers) {
            markers.forEach(marker => marker.setMap(null));
        }

        markers = [];

        salons[city].forEach(salon => {
            const marker = new google.maps.Marker({
                position: { lat: salon.lat, lng: salon.lng },
                map: map,
                title: salon.title,
                icon: {
                    url: "./img/logo_laserProLab.png",
                    scaledSize: new google.maps.Size(40, 40)
                }
            });
            markers.push(marker);
        });
    }

    citySelect.addEventListener('change', (event) => {
        const selectedCity = event.target.value;
        initMap(selectedCity);
    });

    initMap(citySelect.value);
});
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

    // Закрываем меню при клике на ссылку
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            dropdownMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Первый слайдер
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const slider = document.querySelector('.slider');
    let currentIndex = 0;
    let autoSlideInterval;

    // Функция для отображения текущего слайда
    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Переключение на следующий слайд
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Переключение на предыдущий слайд
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Автоматическое переключение слайдов
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }

    // Остановка автоматического переключения
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Обработчики событий для стрелок
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

    // Обработчики событий для бегунков
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            currentIndex = index;
            showSlide(currentIndex);
            startAutoSlide();
        });
    });

    // Запуск первого слайдера
    startAutoSlide();
});

document.addEventListener('DOMContentLoaded', () => {
    // Второй слайдер (Студии)
    const studiosSliderTrack = document.querySelector('.studios-slider-track');
    const studiosSlides = document.querySelectorAll('.studios-slide');
    const studiosPrevArrow = document.querySelector('.studios-prev-arrow');
    const studiosNextArrow = document.querySelector('.studios-next-arrow');
    let studiosCurrentIndex = 0;
    let studiosAutoSlideInterval;

    // Функция для обновления позиции слайдера
    function updateStudiosSlider() {
        const slideWidth = studiosSlides[0].clientWidth;
        studiosSliderTrack.style.transform = `translateX(-${studiosCurrentIndex * slideWidth}px)`;
    }

    // Переключение на следующий слайд
    function nextStudiosSlide() {
        studiosCurrentIndex = (studiosCurrentIndex + 1) % studiosSlides.length;
        updateStudiosSlider();
    }

    // Переключение на предыдущий слайд
    function prevStudiosSlide() {
        studiosCurrentIndex = (studiosCurrentIndex - 1 + studiosSlides.length) % studiosSlides.length;
        updateStudiosSlider();
    }

    // Автоматическое переключение слайдов
    function startStudiosAutoSlide() {
        studiosAutoSlideInterval = setInterval(nextStudiosSlide, 3000);
    }

    // Остановка автоматического переключения
    function stopStudiosAutoSlide() {
        clearInterval(studiosAutoSlideInterval);
    }

    // Инициализация слайдера
    function initStudiosSlider() {
        // Клонируем первый и последний слайды для циклического эффекта
        const firstClone = studiosSlides[0].cloneNode(true);
        const lastClone = studiosSlides[studiosSlides.length - 1].cloneNode(true);
        studiosSliderTrack.appendChild(firstClone);
        studiosSliderTrack.insertBefore(lastClone, studiosSlides[0]);

        // Обновляем список слайдов после клонирования
        const updatedSlides = document.querySelectorAll('.studios-slide');
        studiosSliderTrack.style.transform = `translateX(-${updatedSlides[0].clientWidth}px)`;

        // Запускаем автоматическое переключение
        startStudiosAutoSlide();
    }

    // Обработчики событий для стрелок
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

    // Остановка автослайда при наведении на слайдер
    studiosSliderTrack.addEventListener('mouseenter', stopStudiosAutoSlide);
    studiosSliderTrack.addEventListener('mouseleave', startStudiosAutoSlide);

    // Адаптация слайдера при изменении размера окна
    window.addEventListener('resize', () => {
        updateStudiosSlider();
    });

    // Запуск второго слайдера
    initStudiosSlider();
});

document.addEventListener('DOMContentLoaded', () => {
    const reviewsSliderTrack = document.querySelector('.reviews-slider-track');
    const reviewsSlides = document.querySelectorAll('.reviews-slide');
    const reviewsPrevArrow = document.querySelector('.reviews-prev-arrow');
    const reviewsNextArrow = document.querySelector('.reviews-next-arrow');
    const reviewsMobilePrevArrow = document.querySelector('.reviews-mobile-prev-arrow');
    const reviewsMobileNextArrow = document.querySelector('.reviews-mobile-next-arrow');
    let reviewsCurrentIndex = 0;

    // Функция для обновления позиции слайдера
    function updateReviewsSlider() {
        const slideWidth = reviewsSlides[0].clientWidth; // Ширина одного слайда
        reviewsSliderTrack.style.transform = `translateX(-${reviewsCurrentIndex * slideWidth}px)`;
    }

    // Переключение на следующий слайд
    function nextReviewsSlide() {
        if (reviewsCurrentIndex < reviewsSlides.length - 3) { // Ограничение, чтобы не выйти за пределы
            reviewsCurrentIndex++;
        } else {
            reviewsCurrentIndex = 0; // Возвращаемся к первому слайду
        }
        updateReviewsSlider();
    }

    // Переключение на предыдущий слайд
    function prevReviewsSlide() {
        if (reviewsCurrentIndex > 0) {
            reviewsCurrentIndex--;
        } else {
            reviewsCurrentIndex = reviewsSlides.length - 3; // Переходим к последнему слайду
        }
        updateReviewsSlider();
    }

    // Обработчики событий для кастомных стрелок (десктоп)
    reviewsPrevArrow.addEventListener('click', prevReviewsSlide);
    reviewsNextArrow.addEventListener('click', nextReviewsSlide);

    // Обработчики событий для стандартных стрелок (мобильные устройства)
    reviewsMobilePrevArrow.addEventListener('click', prevReviewsSlide);
    reviewsMobileNextArrow.addEventListener('click', nextReviewsSlide);

    // Адаптация слайдера при изменении размера окна
    window.addEventListener('resize', () => {
        updateReviewsSlider(); // Обновляем слайдер при изменении размера окна
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const citySelect = document.getElementById('city-select');
    const mapElement = document.getElementById('map');

    // Координаты центров городов
    const cities = {
        chelyabinsk: { lat: 55.1601, lng: 61.4005 },
        moscow: { lat: 55.7558, lng: 37.6176 },
        'saint-petersburg': { lat: 59.9343, lng: 30.3351 }
    };

    // Координаты салонов красоты
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

    // Инициализация карты
    let map;
    let markers = []; // Массив для хранения маркеров

    function initMap(city) {
        const cityCoords = cities[city]; // Центр карты
        map = new google.maps.Map(mapElement, {
            center: cityCoords,
            zoom: 12
        });

        // Удаляем старые маркеры, если они есть
        if (markers) {
            markers.forEach(marker => marker.setMap(null));
        }

        // Создаем массив для хранения маркеров
        markers = [];

        // Добавляем маркеры для каждого салона
        salons[city].forEach(salon => {
            const marker = new google.maps.Marker({
                position: { lat: salon.lat, lng: salon.lng },
                map: map,
                title: salon.title,
                icon: {
                    url: "./img/logo_laserProLab.png", // Путь к иконке маркера
                    scaledSize: new google.maps.Size(40, 40) // Размер иконки
                }
            });
            markers.push(marker);
        });
    }

    // Обработчик изменения выбранного города
    citySelect.addEventListener('change', (event) => {
        const selectedCity = event.target.value;
        initMap(selectedCity);
    });

    // Инициализация карты по умолчанию
    initMap(citySelect.value);
});
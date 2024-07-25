document.addEventListener('DOMContentLoaded', () => {
    // Находим контейнер для галереи
    const galleryContainer = document.querySelector('.gallery-container');

    // Массив с именами изображений
    const images = [
        'cat-sword1.jpg',
        'cat-sword2.jpg',
        'cat-sword3.jpg',
        'cat-sword4.jpg',
        'cat-sword5.jpg'
    ];

    // Для каждого имени изображения создаем элемент <img> и добавляем его в контейнер
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src; // Указываем путь к изображению
        img.alt = 'Cat with Sword'; // Атрибут alt помогает при SEO и если изображение не загрузится
        galleryContainer.appendChild(img); // Добавляем изображение в контейнер галереи
    });

    // Обработка формы контактов
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Отключаем стандартное поведение формы
        const formData = new FormData(contactForm); // Собираем данные формы
        console.log('Name:', formData.get('name')); // Выводим имя в консоль
        console.log('Email:', formData.get('email')); // Выводим email в консоль
        console.log('Message:', formData.get('message')); // Выводим сообщение в консоль
        alert('Your message has been sent!'); // Показываем уведомление пользователю
        contactForm.reset(); // Сбрасы

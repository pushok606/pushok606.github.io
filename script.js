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

    // Проверяем, что контейнер для галереи существует
    if (galleryContainer) {
        // Для каждого имени изображения создаем элемент <img> и добавляем его в контейнер
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = `path/to/images/${src}`; // Указываем путь к изображению, например, 'images/cat-sword1.jpg'
            img.alt = 'Cat with Sword'; // Атрибут alt помогает при SEO и если изображение не загрузится
            img.style.width = '100px'; // Устанавливаем ширину изображения
            img.style.height = 'auto'; // Устанавливаем высоту изображения
            img.style.margin = '5px'; // Добавляем немного отступа между изображениями
            galleryContainer.appendChild(img); // Добавляем изображение в контейнер галереи
        });
    } else {
        console.error('Gallery container not found!');
    }

    // Обработка формы контактов
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Отключаем стандартное поведение формы
            const formData = new FormData(contactForm); // Собираем данные формы
            console.log('Name:', formData.get('name')); // Выводим имя в консоль
            console.log('Email:', formData.get('email')); // Выводим email в консоль
            console.log('Message:', formData.get('message')); // Выводим сообщение в консоль
            alert('Your message has been sent!'); // Показываем уведомление пользователю
            contactForm.reset(); // Сбрасываем форму
        });
    } else {
        console.error('Contact form not found!');
    }

    // Получение элементов модальных окон и кнопок
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeLogin = document.getElementById('closeLogin');
    const closeRegister = document.getElementById('closeRegister');
    const userInfo = document.getElementById('user-info');

    // Проверяем, что элементы модальных окон существуют
    if (loginBtn && registerBtn && loginModal && registerModal && closeLogin && closeRegister && userInfo) {
        // Функция для проверки статуса входа
        function checkLoginStatus() {
            const loggedInUser = localStorage.getItem('loggedInUser');
            if (loggedInUser) {
                loginBtn.style.display = 'none';
                registerBtn.style.display = 'none';
                userInfo.textContent = 'Logged in as ' + loggedInUser;
            } else {
                loginBtn.style.display = 'inline';
                registerBtn.style.display = 'inline';
                userInfo.textContent = '';
            }
        }

        // Открытие модального окна для логина
        loginBtn.onclick = function() {
            loginModal.style.display = 'block';
        }

        // Открытие модального окна для регистрации
        registerBtn.onclick = function() {
            registerModal.style.display = 'block';
        }

        // Закрытие модального окна для логина
        closeLogin.onclick = function() {
            loginModal.style.display = 'none';
        }

        // Закрытие модального окна для регистрации
        closeRegister.onclick = function() {
            registerModal.style.display = 'none';
        }

        // Закрытие модальных окон при клике вне их области
        window.onclick = function(event) {
            if (event.target == loginModal) {
                loginModal.style.display = 'none';
            }
            if (event.target == registerModal) {
                registerModal.style.display = 'none';
            }
        }

        // Регистрация пользователя
        const registerForm = document.getElementById('register-form');
        if (registerForm) {
            registerForm.onsubmit = function(event) {
                event.preventDefault();
                const username = document.getElementById('register-username').value;

                // Проверяем, существует ли пользователь
                if (localStorage.getItem(username)) {
                    alert('Username already taken');
                } else {
                    localStorage.setItem(username, JSON.stringify({ username }));
                    alert('Registration successful');
                    registerModal.style.display = 'none';
                }
            }
        } else {
            console.error('Register form not found!');
        }

        // Логин пользователя
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.onsubmit = function(event) {
                event.preventDefault();
                const username = document.getElementById('login-username').value;

                // Проверяем, существует ли пользователь
                if (localStorage.getItem(username)) {
                    localStorage.setItem('loggedInUser', username);
                    alert('Login successful');
                    loginModal.style.display = 'none';
                    checkLoginStatus();
                } else {
                    alert('User not found');
                }
            }
        } else {
            console.error('Login form not found!');
        }

        // Логика для выхода из системы (если будет добавлена в будущем)
        function logout() {
            localStorage.removeItem('loggedInUser');
            checkLoginStatus();
        }

        // Выполняем проверку статуса входа при загрузке страницы
        checkLoginStatus();
    } else {
        console.error('One or more modal elements not found!');
    }
});

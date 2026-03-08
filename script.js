// Находим картинку и заголовок
const bananaImg = document.querySelector('img');
const title = document.querySelector('h1');

// Создаем переменную для счета
let count = 0;

// Когда кликаем по картинке...
bananaImg.onclick = function() {
    count = count + 1; // Увеличиваем счет
    title.innerText = "Бананов съедено: " + count;
    
    // Маленький эффект: картинка чуть-чуть дергается
    bananaImg.style.transform = "scale(1.1)";
    setTimeout(() => bananaImg.style.transform = "scale(1)", 100);
};
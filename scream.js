// Функция для запуска звука
function playScreamer() {
    const audio = new Audio('scream.mp3');
    audio.volume = 1;
    
    audio.play().catch(e => console.log("Браузер все еще блокирует: " + e.message));

    // Важно: удаляем слушатель, чтобы звук не повторялся при каждом клике
    window.removeEventListener('click', playScreamer);
}

// Слушаем клик по всему окну
window.addEventListener('click', playScreamer);
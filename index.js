function toggleHidden(element) {
    var nextElement = element.nextElementSibling;
  
    if (nextElement) {
      nextElement.classList.remove('hidden');
    }
    
    element.classList.add('hidden');
  }






const progressLineElement = document.getElementById("progressLine");
const percentElement = document.getElementById("percent");

 
let currentPercent = parseInt(percentElement.innerText);
const targetPercent = 100;
const step = 1; // Измените значение, как вам угодно
const delay = 30; // Задержка в миллисекундах между шагами

function increasePercent() {
    if (currentPercent < targetPercent) {
        currentPercent += step;
        if (currentPercent > targetPercent) {
            currentPercent = targetPercent;
        }

        percentElement.innerText = currentPercent + '%';
        progressLineElement.style.width = currentPercent + '%';

        setTimeout(increasePercent, delay);
    }
}
increasePercent();


// Задаем высоту body равной window.innerHeight
document.body.style.height = window.innerHeight + 'px';

window.addEventListener('resize', function() {
  document.body.style.height = window.innerHeight + 'px';
});
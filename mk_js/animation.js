// наши цвета и счетчик, по которому мы будем определять, какой это цвет
const colors = ['red', 'green', 'blue', 'orange', 'cyan']
let idx = 0

// подключаемся к кнопке
const btn_change = document.getElementById("btn")
const btn_animate = document.getElementById('btn_animate')

// список с анимированными прямоугольниками
let animates = [
    document.getElementById("animate1"),
    document.getElementById("animate2"),
    document.getElementById("animate3"),
    document.getElementById("animate4"),
    document.getElementById("animate5"),
]
// по нажатию на кнопку Jump it! div-контейнеры прыгают в сторону на случайное кол-во px
const z = 70
btn_animate.onclick = () => {
    for (let i = 0; i < animates.length; i++) {
        start = Number(animates[i].style.marginLeft.split("px")[0])
        animates[i].style.marginLeft = String(start+Math.floor(Math.random() * z))+"px"
    }
}
// подключаем событие 'клик'
btn_change.onclick = (e) => {
    //если счетчик больше кол-ва цветов, возвращаемся к первому цвету
    if(idx == colors.length) {
        idx=0
    }
    // переключаем цвет
    btn.style.backgroundColor = colors[idx]
    idx+=1
}

// это событие срабатывает, когда переключаешься на другую вкладку
window.onblur = (e) => {
    document.title = "Не уходи!"
}
// это событие напротив, когда переходишь на вкладку
window.onfocus = (e) => {
    document.title = "Это мастер-класс по JS:)"
}
// событие при загрузке страницы. генерируем цвета нашим квадратикам для анимации
window.onload = (e) => {
    for (let i = 0; i < animates.length; i++) {
        animates[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    }
}
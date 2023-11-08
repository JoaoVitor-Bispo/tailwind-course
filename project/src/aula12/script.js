const button = document.querySelector('.js-darkmode')

let darkOrLight = true

button.addEventListener('click', e => {
    darkOrLight == true ? darkOrLight = false : darkOrLight = true
    document.documentElement.classList.toggle('dark')

    darkOrLight == false ? button.innerHTML = 'Light Mode' : button.innerHTML = 'Dark Mode'
})
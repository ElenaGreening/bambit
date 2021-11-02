let popup = document.querySelector('.popup')
let closeButton = document.querySelector('.closePopup')
let openButton = document.querySelector('.openPopup')

openButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)
function openPopup () {
    popup.style.display = 'block'
}

function closePopup () {
    popup.style.display = 'none'
}
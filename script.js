const shareButton = document.querySelector('.share-image');
const shareBox = document.querySelector('#shareBox');

shareButton.addEventListener('click',() => {
    shareBox.classList.toggle('hide')
})
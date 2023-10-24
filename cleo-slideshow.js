const catImage = document.querySelector('.cat-info img');
const imageSources = [
    'images/cleo2.jpg',
    'images/rivendell.jpg'
];

let currentImageIndex = 0;

function updateCatImage() {
    catImage.src = imageSources[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
}

catImage.addEventListener('click', updateCatImage);

updateCatImage();

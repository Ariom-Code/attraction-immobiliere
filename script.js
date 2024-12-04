// 1. Animation au survol des éléments vidéo
const videoItems = document.querySelectorAll('.video-item');

// Applique un effet de translation et d'ombrage lors du survol
videoItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px)';
        item.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 8px 10px -2px';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px';
    });
});

// 2. Affichage dynamique d'une légende au survol de la vidéo
const descriptions = document.querySelectorAll('.description');

descriptions.forEach(description => {
    description.addEventListener('mouseenter', () => {
        description.style.backgroundColor = '#ffebf1'; // couleur de fond claire
        description.style.transition = 'background-color 0.3s ease';
    });
    description.addEventListener('mouseleave', () => {
        description.style.backgroundColor = 'white';
    });
});

// 3. Changer la couleur du texte de la page title au clic
const pageTitle = document.querySelector('.page-title');

pageTitle.addEventListener('click', () => {
    pageTitle.style.color = '#ff0066'; // couleur rose foncée au clic
    pageTitle.style.transition = 'color 0.3s ease';
});

// 4. Chargement des vidéos avec un effet de défilement (lazy loading)
const lazyVideos = document.querySelectorAll('.video-iframe');

function lazyLoad() {
    lazyVideos.forEach(video => {
        const rect = video.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            const iframeSrc = video.getAttribute('data-src');
            if (iframeSrc) {
                video.src = iframeSrc; // Charger la vidéo lorsque l'élément est visible
                video.removeAttribute('data-src');
            }
        }
    });
}

// On lance la fonction lazyLoad au chargement et lors du défilement
window.addEventListener('load', lazyLoad);
window.addEventListener('scroll', lazyLoad);

// 5. Changer le fond de la page lorsque l'utilisateur clique sur un bouton spécifique
const changeBgButton = document.createElement('button');
changeBgButton.textContent = 'Changer le fond';
changeBgButton.style.position = 'fixed';
changeBgButton.style.top = '20px';
changeBgButton.style.right = '20px';
changeBgButton.style.padding = '10px';
changeBgButton.style.backgroundColor = '#ff1999';
changeBgButton.style.color = 'white';
changeBgButton.style.border = 'none';
changeBgButton.style.cursor = 'pointer';
document.body.appendChild(changeBgButton);

changeBgButton.addEventListener('click', () => {
    document.body.style.backgroundColor = '#ffe6f1'; // Fond rose pâle
    document.body.style.transition = 'background-color 0.5s ease';
});

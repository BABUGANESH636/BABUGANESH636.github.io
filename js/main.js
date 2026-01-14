function showProjects(type, clickedButton) {
    const groups = document.querySelectorAll('.project-group');
    groups.forEach(group => group.classList.remove('active'));

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(type).classList.add('active');
    clickedButton.classList.add('active');
}

// ---------- IMAGE LIGHTBOX (Gallery + Avatar) ----------

document.addEventListener('DOMContentLoaded', () => {
    const zoomableImages = document.querySelectorAll('.gallery-img, .zoomable-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (!zoomableImages.length || !lightbox) return;

    zoomableImages.forEach(img => {
        img.addEventListener('click', (e) => {
    e.preventDefault();      // ⛔ stop anchor navigation
    e.stopPropagation();     // ⛔ stop bubbling to <a>

    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
});
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

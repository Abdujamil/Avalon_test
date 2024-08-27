document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.menu__link').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

document.getElementById('menuIcon').addEventListener('click', function() {
    const popupMenu = document.getElementById('popupMenu');
    this.classList.toggle('open');
    popupMenu.classList.toggle('open');
});

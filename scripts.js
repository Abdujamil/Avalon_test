document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.menu__link').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

document.getElementById('menuIcon').addEventListener('click', function () {
    const popupMenu = document.getElementById('popupMenu');
    this.classList.toggle('open');
    popupMenu.classList.toggle('open');
});


document.querySelector('.btn__up').addEventListener('click', function (e) {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
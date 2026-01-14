// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    // Vérifier que les éléments existent
    if (menuIcon && navbar) {
        // Gestion du menu hamburger
        menuIcon.addEventListener('click', function() {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        });

        // Fermer le menu quand on clique sur un lien
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            });
        });
    }

    // Gestion du scroll pour la navigation active
    window.addEventListener('scroll', function() {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            
            if(top >= offset && top < offset + height){
                navLinks.forEach(links => {
                    links.classList.remove('active');
                });
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if(activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });
});
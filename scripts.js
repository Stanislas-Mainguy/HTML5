/* Fonction pour le barre de navigation */
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const navHeight = nav.offsetHeight;

    function checkScroll() {
        if (window.scrollY >= navHeight) {
            nav.classList.add('fixed');
            main.classList.add('morePadding');
        } else {
            nav.classList.remove('fixed');
            main.classList.remove('morePadding');
        }
    }

    window.addEventListener('scroll', checkScroll);

    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            checkScroll();
        }
    });

    checkScroll();
});

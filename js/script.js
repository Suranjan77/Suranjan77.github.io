const headerStickyObserver = new IntersectionObserver(
    ([e]) => {
        e.target.classList.toggle('isSticky', e.intersectionRatio < 1);
        const navLogo = document.getElementById('nav-logo');
        if (e.intersectionRatio < 1) {
            navLogo.style.height = "30px";
            navLogo.style.width = "30px";
        } else {
            navLogo.style.height = "100px";
            navLogo.style.width = "100px";
        }
    },
    { threshold: [1] }
)

headerStickyObserver.observe(document.querySelector('header'))
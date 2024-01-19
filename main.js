

function changeSlide(elem, index) {
    const colors = ['black', 'blue', 'natural', 'white'];
    const image = document.getElementById('slide-image');

    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));

    elem.classList.add('active');
    image.classList.add('animation');

    image.onanimationend = () => {
        image.src = `./images/${colors[index]}-titanium.png`
        setTimeout(() => image.classList.remove('animation'), 100)
    }
}

function openMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');

    const linksAnimation = () => {
        Array.from(menu.children[0].children).forEach((elem, index) => {
            !menu.hidden ? setTimeout(() => elem.classList.add('visible'), index * 50) : elem.classList.remove('visible')
        });
    };

    menu.hidden ? (
        menu.style.top = '72px',
        menu.hidden = false,
        hamburger.classList.add('open'),
        linksAnimation()
    ) : (
        menu.style.top = '-100%',
        hamburger.classList.remove('open'),
        menu.ontransitionend = () => {
            menu.hidden = true
            linksAnimation();
        }
    );
};
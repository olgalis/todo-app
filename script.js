const theme = document.getElementById('theme');

theme.addEventListener('click', () => {
    const bodyElement = document.querySelector('body');

    if (theme.checked) {
        bodyElement.classList.remove('theme-dark');
        bodyElement.classList.add('theme-light');
    } else {
        bodyElement.classList.remove('theme-light');
        bodyElement.classList.add('theme-dark');
    }
});

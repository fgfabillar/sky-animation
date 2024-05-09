//Changing the day to night transition 
const plane = document.querySelector('.plane');

plane.addEventListener('animationiteration', () => {
    document.body.classList.toggle('night');
});

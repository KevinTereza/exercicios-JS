import '../styles/style.css';
const h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
    h1.style.color = h1.style.color === 'orange' ? '#ffffff' : 'orange';
});

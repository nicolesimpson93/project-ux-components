document.querySelector('.tothetop').addEventListener('click', event => {
    window.scrollTo({left:0, top:0, behavior:"smooth"})
}) // Back to top button

const scrollIndicatorElt = document.getElementById('scrollIndicator');
const maxScrollableHeight = document.body.scrollHeight - window.innerHeight;
window.addEventListener('scroll', moveScrollIndicator);

function moveScrollIndicator() {
    const percentage = ((window.scrollY) / maxScrollableHeight) * 100;
    scrollIndicatorElt.style.width = percentage + '%';
}
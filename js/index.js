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

//Nav minimize on scroll, give users more room to read article and makes sections clear while at top.
window.onscroll = function() { scrollFunction()};
function scrollFunction() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").style.fontSize = "20px";
    } else {
        document.getElementById("nav").style.fontSize = "40px";
    }
}

// document.querySelector('.tothetop').addEventListener('click', event => {
//     window.scrollTo({left:0, top:0, behavior:"smooth"})
// }) // Back to top button


//Happy shopping message button that indicates to the user that they are dont on that page
function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

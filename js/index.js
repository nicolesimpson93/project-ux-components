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





const track = document.querySelector(`.carousel_track`);
const slides = Array.from(track.children);
const nextButton = document.querySelector(`.carousel_button--right`);
const prevButton = document.querySelector(`.carousel_button--left`);
const dotsNa = document.querySelector(`carousel_nav`);
const dots= Array.from(dotsNavchildren);
console.log(track);

constslideSize = slides[0].getBoundingClientRect().width;


//slides[0].style.left = 0;
//slides [1] .style.left = slidewidth + `px`;
//slides [2] .style.left = slidewidth * 1 `px`;
//slides [3] .style.left = slidewidth * 2 `px`;

consy setSlidePosition =(slide,index) => {
    slide.style.left = slideWidth * index +`px`;
};

slides.forEach(setSlidePosition);

const moveToSlide =(track,currentSlide, targetSlide) => {
    track.style.trasform =`translateX(` + targetSlide.style.left +`)`;
    currentSlide.classList.remove(`current-slide`);
    targetSlide.classList.add(`current-slide`);
}

//when I click left, move slides to the left
prevButton.addEventListener(`click`, e =>{
    const currentSlide = track.querySelector(`.current-slide`);
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track,currentSlide, previousSlide);

});

//when I click right, move slides to the right 
nextButton.addEventListener(`click`, e => {
    const currentSlide = track.querySelector(`.current-slide`);
    const nextSlide = currentSlide.nextElementSibling;
 
    moveToSlide(track,currentSlide, nextSlide);
});


//when I click the nav indicators, move to the sldie 

 dotsNav.addEventListener(`click`, e =>{
 //what indicator was clicked on?
 const targetDot = e.target.closest(`button`);

 if(!targetDot) return;

 const currentSlide = track.querySelector(`.current-slide`);
 const currentDot = dotsNav.querySelector (`.current-slide`);
 conts targetIndex = dots.findIndex (dot => dot === targetDot)
 const targetSlide = slides[targetIndex];

 moveToSlide(track,currentSlide, targetSlide);
 
 
})
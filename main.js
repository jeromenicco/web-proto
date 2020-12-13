//parallax effect
const parallax = document.getElementById("parallax");

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    //console.log('offset: ' + offset);
    //console.log('offset * 0.7' + offset * 0.7)
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});





const dropButton = document.querySelectorAll('.card-button');
const seeMore = document.querySelectorAll('.card-container-expanded');
const containerClass = document.querySelectorAll('.card-container')

for (let i = 0; i < dropButton.length; i++){
    dropButton[i].addEventListener('click', () => {
    containerClass[i].classList.toggle('card-container-expanded')
    dropButton[i].classList.toggle('card-button-expanded')
    });
}




// const onMouseSpread = document.querySelector('.booking-background')

// onMouseSpread.addEventListener('mouseover', () => {
//     onMouseSpread.classList.toggle('right-block-open')
// })

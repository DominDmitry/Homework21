let nextBtn = document.getElementById("next");
let previousBtn = document.getElementById("previous");
let sliderItem = document.querySelector('.slide');

nextBtn.addEventListener('click', () => {
    const activeSlide = document.querySelector('.slide.active')
   
        if(activeSlide) {
            activeSlide.classList.remove('active');
            activeSlide.nextElementSibling.classList.add('active');
           if(previousBtn.classList.value.includes('active') === false) {
            previousBtn.classList.add('active');
           }
            if(activeSlide.nextElementSibling.nextElementSibling === null) {
                nextBtn.classList.remove('active');    
           } 
        }      
})
previousBtn.addEventListener('click', () => {
    const activeSlide = document.querySelector('.slide.active')
   
        if(activeSlide) {
            activeSlide.classList.remove('active');
            activeSlide.previousElementSibling.classList.add('active');
           
            if(nextBtn.classList.value.includes('active') === false) {
                nextBtn.classList.add('active');
               }
            if(activeSlide.previousElementSibling.previousElementSibling === null) {
                previousBtn.classList.remove('active');
            } 
        }      
})
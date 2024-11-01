function call_js() {
    let slideshowSlide = document.querySelector('.slideshow_slide');
    let slides = document.querySelectorAll('.slideshow_slide a');
    let prev = document.querySelector('#prev');
    let next = document.querySelector('#next');
    let indicators = document.querySelectorAll('.slideshow_indicator a');
    let logoImage = document.querySelector('.header_logo i');
    let logoTitle = document.querySelector('.header_logo a');
    let slideCount = slides.length;
    let currentIndex = 0;
    let timer = 0;

    for (let i = 0; i < slideCount; i++) {
        let newPosition = i * 100 + '%';
        slides[i].style.left = newPosition;
    }

    function moveCamera(index) {
        currentIndex = index;
        let newCameraPosition = currentIndex * -100 + '%';
        slideshowSlide.style.left = newCameraPosition;
        indicators.forEach((obj)=>{
            obj.classList.remove('active');
        });
        indicators[index].classList.add('active');
    }

    function setTimeDelay() {
        timer = setInterval(function(){
            newIndex = (currentIndex + 1) % slideCount;
            moveCamera(newIndex);
        }, 3000);
    }

    setTimeDelay();

    slideshowSlide.addEventListener('mouseenter', ()=>{
        clearInterval(timer);
    });
    
    slideshowSlide.addEventListener('mouseleave', ()=>{
        setTimeDelay();
    });

    prev.addEventListener('mouseenter', ()=>{
        clearInterval(timer);
    });

    next.addEventListener('mouseenter', ()=>{
        clearInterval(timer);
    });

    prev.addEventListener('click',(e)=>{
        e.preventDefault();
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = slideCount - 1 ;
        }
        moveCamera(newIndex);
    });

    next.addEventListener('click',(e)=>{
        e.preventDefault();
        let newIndex = currentIndex + 1;
        if (newIndex > slideCount - 1) {
            newIndex = 0;
        }
        moveCamera(newIndex);
    });

    indicators.forEach((obj)=>{
        obj.addEventListener('mouseenter', ()=>{
            clearInterval(timer);
        })
    });

    for(let i = 0; i < slideCount; i++) {
        indicators[i].addEventListener('click',(e)=>{
            e.preventDefault();
            moveCamera(i);
        });
    }

    logoTitle.addEventListener('mouseenter', ()=>{
        logoImage.classList.add('active');
    });

    logoTitle.addEventListener('mouseleave', ()=>{
        logoImage.classList.remove('active');
    });
}
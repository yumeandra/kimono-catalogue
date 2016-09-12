document.addEventListener("DOMContentLoaded", function(){
    var next = document.querySelector('.fa-chevron-right');
    var prev = document.querySelector('.fa-chevron-left');
    var lis = document.querySelectorAll('.mySlides');
    var index = 0;
    
    console.log(next, prev, lis, index);
    
    lis[0].classList.add('visible');
    
    next.addEventListener('click', function(){
        lis[index].classList.remove('visible');
        index++;
        if(index > lis.length-1) {
            index = 0;
        }
        
        lis[index].classList.add('visible');
    });
    
    prev.addEventListener('click', function(){
        lis[index].classList.remove('visible');
        index--;
        if(index < 0) {
            index = lis.length-1;
        }
        
        lis[index].classList.add('visible');
    });
});
$(function(){
    function sliding() {
   var slide = $(".slider");
    var images = slide.find(".img");
    var prev = $(".fa-chevron-left");
    var next = $(".fa-chevron-right");
    var pos = slide.position();
    var index = 0;
    var width = images.eq(0).width();
    
    slide.width(images.length * width);
    
     console.log(slide, next, pos, images);
    
    
        
    prev.on("click", function(){
//       console.log(prev); 
        ++index;
        if(index > images.length -3 ) {
//            index = 0; //przerzuca nas do pierwszego slajdu
            index = images.length - 3;
        }
        
        slide.animate({left: -(index*width)});
            
     });
    
    next.on("click", function(){
//        console.log(next);
        --index;
        if(index < 0){
            index = 0;
        }
        slide.animate({left: -(index*width)});
        });
    
    }
    sliding();
    
    function noteAppearing(){
        var slide = $(".slider");
        var image = slide.find("li");
        console.log(slide, image);
        
        image.on("mouseenter", function(){
           var note = $(this).find(".notes").slideDown(2000).addClass("visible");
            console.log(note);
//            note.slideUp(1000);
            
        });
        
        image.on("mouseleave", function(){
             var note = $(this).find(".notes").fadeOut(500).addClass("hidden");
        });
        
    }
    
    noteAppearing();
    
    
});

//for (i = 0; i < cars.length; i++) { 
//    text += cars[i] + "<br>";
//}
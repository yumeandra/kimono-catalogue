$(function(){
    
    function rwd(){
        
//               
        if ($(window).width > (799 + "px")) {
           
            //slider on the home-page:
   
            function sliding() {

            var slide = $(".slider");
            var images = slide.find(".img");
            var firstImage = slide.find(".firstImage");
            var secondImage = slide.find(".secondImage");
            var thirdImage = slide.find(".thirdImage");
            var fouthImage = slide.find(".fourthImage");
            var fifthImage = slide.find(".fifthImage");
            var sixthImage = slide.find(".sixthImage");
            var seventhImage = slide.find(".seventhImage");
            var eigthImage = slide.find(".eightImage");
            var ninthImage = slide.find(".ninthImage");
            var prev = $(".fa-chevron-circle-left");
            var next = $(".fa-chevron-circle-right");
            var pos = slide.position();
            var index = 4;
            var width = images.eq(0).width();

    //    console.log(firstImage);

            firstImage.clone().appendTo(slide);
            secondImage.clone().appendTo(slide);
            thirdImage.clone().appendTo(slide);
            fouthImage.clone().appendTo(slide);


            ninthImage.clone().prependTo(slide);
            eigthImage.clone().prependTo(slide);
            seventhImage.clone().prependTo(slide);
            sixthImage.clone().prependTo(slide);

            slide.width((images.length + 8) * width);

            slide.css("left", (-index*width)+"px");




            next.on("click", function(){
        //       console.log(prev); 
                ++index;
                if(index > images.length ) {
        //            index = 0; //przerzuca nas do pierwszego slajdu
                    index = images.length;
                }

                slide.animate({left: -(index*width)}, function(){
                    console.log(index, images.length);    

                    if(index == images.length){
                        index = 0;
                        console.log(index);
                        slide.css("left", ((index * width)+"px"));

                    }
                });


             });

            prev.on("click", function(){
        //        console.log(next);
        //         console.log(index, images.length);
                --index;
                if(index < 0){
                    index = 0;
                }
                    slide.animate({left: -(index*width)}, function(){
                        console.log(index, images.length);
                        if(index == 0){
                            index = images.length;
        //                    console.log(index);
                            slide.css("left", (-(index * width)+"px"));

                        }
                    });
                });
    //    

            }

            sliding();

        } 
        
        
        
    }
    
    rwd();

    
    //desktop: notes on slides - sliding from the bottom
    function noteAppearing(){
       
        var slide = $(".slider");
        var image = slide.find("li");
//        console.log(slide, image);
        
        image.on("mouseenter", function(){
           var note = $(this).find(".notes").slideDown(2000).addClass("visible");
           
            
        });
        
        image.on("mouseleave", function(){
             var note = $(this).find(".notes").fadeOut(500).addClass("hidden");
        });
        
    }
    
    noteAppearing();
    
    //touchscreen: notes on slides - sliding from the bottom
    function noteEntering(){
        
        var slide = $(".slider");
        var image = slide.find("li");
        console.log(slide, image);
        
        image.on("taphold", function(){
           var note = $(this).find(".notes").slideDown(2000).addClass("visible"); 
        });
        
        image.on("swipe", function(){
             var note = $(this).find(".notes").fadeOut(500).addClass("hidden");
        });
    }
    
    noteEntering();
    
    //sticky menu:
    
function stickyMenu() {
    
    if ($(window).width > (799 + "px")) {
        
        
        var nav = $("nav");
        var menu = nav.find(".menu");
        var off = menu.offset();
        var top = off.top;
        console.log(nav, off, top);

        $(window).on("scroll", function(){
            console.log("scroll-roll-roll...")
            var scrollTop = $(document).scrollTop();
            console.log(scrollTop);

            if(scrollTop > top){
                nav.addClass("sticky");
            } else {
                nav.removeClass("sticky");
            }

        });

        $(window).on("resize", function(){
            console.log("okno się zmienia");
             if (nav.hasClass("sticky")){
                top = off.top; 
                console.log(off, top);
             } else {
                top = nav.offset().top;
                 console.log(top);
            }
        });

        
    }
    
}

stickyMenu();
    
    
        
});
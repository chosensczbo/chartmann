$(document).ready(function() {
      
    $(".scroll-top").click(function(){
        $(".wbt-page").animate({scrollTop:"0px"});
    });
    
    var lastScroll = $(".wbt-page").scrollTop();
    
    $(".wbt-page").scroll(function(){
        currentScroll = $(".wbt-page").scrollTop();
                
        if (currentScroll <= 40){
            $(".wbt-dock").removeClass("menu-dock-top");
            $(".wbt-dock").addClass("menu-dock");
        }
        if(currentScroll > 40) {
            $(".wbt-dock").removeClass("menu-dock");
            $(".wbt-dock").addClass("menu-dock-top");
        }
        
        if (currentScroll > lastScroll && currentScroll > 240){
            // scroll down
            $(".wbt-dock").fadeOut();
            $(".scroll-top").fadeIn();
        } else {
            // scroll up
            $(".wbt-dock").fadeIn();
        }
        
        if (currentScroll <= 240){
            $(".scroll-top").fadeOut();
        }
        
        lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    }); 
})
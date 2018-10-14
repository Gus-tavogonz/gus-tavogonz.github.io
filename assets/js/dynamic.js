$(document).ready(function(){
    //////////////////
    var filterizd = $('.filtr-container').filterizr({
           //options object
        });
        var options = {
               animationDuration: 0.5, // in seconds
               filter: 'all', // Initial filter
               callbacks: { 
                  onFilteringStart: function() { },
                  onFilteringEnd: function() { },
                  onShufflingStart: function() { },
                  onShufflingEnd: function() { },
                  onSortingStart: function() { },
                  onSortingEnd: function() { }
               },
               controlsSelector: '', // Selector for custom controls
               delay: 0, // Transition delay in ms
               delayMode: 'progressive', // 'progressive' or 'alternate'
               easing: 'ease-out',
               filterOutCss: { // Filtering out animation
                  opacity: 0,
                  transform: 'scale(0.5)'
               },
               filterInCss: { // Filtering in animation
                  opacity: 0,
                  transform: 'scale(1)'
               },
               layout: 'sameSize', // See layouts
               multifilterLogicalOperator: 'or',
               selector: '.filtr-container',
               setupControls: true // Should be false if controlsSelector is set 
            } 
            // You can override any of these options and then call...
            var filterizd = $('.filtr-container').filterizr(options);
            // If you have already instantiated your Filterizr then call...
            filterizd.filterizr('setOptions', options);
                            


    console.log("ready")


function showAll(){
    $(".cell-container").fadeIn();
    console.log("all")
}

function showIllustration(){
    if($(".cell-container").not(".illustration")){
        $(".cell-container").fadeOut();
    }
        $(".illustration").fadeIn();
        console.log("illustration")
        // console.log("illustration");
        // $(".design").fadeOut();
        // $(".3d").fadeOut();
        // $(".cDesign").fadeOut();
        // $(".animation").fadeOut(); 
}

function showDesign(){
    if($(".cell-container").not(".design")){
        $(".cell-container").fadeOut();
        $(".design").fadeIn();
    }
        
        console.log("design")
    
}

function showCDesign(){
    if($(".cell-container").not(".cdesign")){
        $(".cell-container").fadeOut();
    }
        $(".cdesign").fadeIn();
        console.log("character design")
    
}
function showAnimation(){
    if($(".cell-container").not(".animation")){
        $(".cell-container").fadeOut();
    }
        $(".animation").fadeIn();
        console.log("animation")
}
function showWeb(){
    if($(".cell-container").not(".web")){
        $(".cell-container").fadeOut();
    }
    $(".web").fadeIn();
    console.log("web")
}   

    $(".click").on("click", function(){
        event.preventDefault();

    })
  

    //////MODAL VIMEO////////
    

    var videoSrc;  
    $('.video-btn').click(function() {
        videoSrc = $(this).data( "src" );
        console.log(videoSrc);
        $("#video").attr("src",videoSrc)
        })
    
    $(".close").on("click", function(){
        var blank = "";
        $("#video").attr("src", blank )
    })
   

})
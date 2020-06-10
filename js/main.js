(function ($) {
    $(function () {
        
        
        var videoWrapper = $('#video-wrapper');
        var myVideo = $('#video').get(0); 
                
        $("#play-video").on('click touchstart', function (){
            $(this).hide()
            $('.popup-close').hide();
            $(".video-popup").addClass("shown");
            videoWrapper.addClass("showing").fadeIn(400, function(){
                playVideo();
                setTimeout(function(){
                    videoWrapper.removeClass("showing")
                }, 1200)
            });
        })
        
        $('.video-wrapper').on("click", function(){
            $(this).fadeOut(400, function(){
                myVideo.pause();
                myVideo.currentTime = 0; 
                $(".video-popup").removeClass("shown");
            });
            $("#play-video").fadeIn();
            $('.popup-close').fadeIn();
        });
        $("#video").click(function(e){
            e.stopPropagation();
        })
        
        
        myVideo.addEventListener('loadedmetadata', function() {
            if (video.buffered.length === 0) return;

            var bufferedSeconds = video.buffered.end(0) - video.buffered.start(0);
            console.log(bufferedSeconds + ' seconds of video are ready to play!');
        });
        
        myVideo.onended = (event) => {
          setTimeout(function(){
              videoWrapper.fadeOut(400, function(){
                myVideo.currentTime = 0;  
              });
              $('.popup-close').show();
              $("#play-video").show();
          }, 1200)
        };
        
        
        // Modal close
        if($('.video-popup').length){
            var popUp = $('.video-popup');
        
            $(".popup-close").click(function(e){
                e.preventDefault();
                popUp.fadeOut(500);
                
                myVideo.pause();
                myVideo.currentTime = 0; 
            });   
        }
        
        function playVideo() { 
           myVideo.play();
        } 
    });
})(jQuery);
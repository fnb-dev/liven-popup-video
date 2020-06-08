(function ($) {
    $(function () {
        var videoWrapper = $('#video-wrapper');
        var myVideo = $('#video').get(0); 
        
        $("#play-video").on('click touchstart', function (){
            $(this).hide()
            $('.popup-close').hide()
            videoWrapper.fadeIn(400, function(){
                playVideo();
            });
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
        
        function playVideo() { 
           myVideo.play();
        } 
    });
})(jQuery);
(function ($) {
    $(function () {
        var popupWrapper = $('#popup-wrap');
        var popUp = $('#pop-up');
        
        $(".popup-close, .drag-btn").click(function(e){
            e.preventDefault();
            
            TweenMax.to(popupWrapper, 0.3, {
                y: '100%',
                ease: Sine.easeOut
            });
            
            TweenMax.to(popUp, .8, {
                css: {
                    opacity: 0,
                    visibility: 'hidden'
                },
                delay: .5,
                ease: Sine.easeOut
            });
        });
        
        
        
        /*$('#popup-inner').draggable({
            revert: true,
            drag: function (e, ui) {
                
            },
            revert: function (e, ui) {            
                TweenMax.to(popupWrapper, 0.3, {
                    y: '100%',
                    ease: Sine.easeOut
                });

                TweenMax.to(popUp, .8, {
                    css: {
                        opacity: 0,
                        visibility: 'hidden'
                    },
                    delay: .5,
                    ease: Sine.easeOut
                });
                return !e;
            }
        });*/



    });
})(jQuery);
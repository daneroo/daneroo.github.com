
(function(){  // the entire file is scope inside a anonymous function execution.

    $(document).ready(function(){
        setupOrientationHandler();

    // hidden/commented in portfolio
    $('.carousel').carousel(/* {interval:1000}*/)
    
    // this is for affix - later
    if(0)$('.dl-sidenav').affix({
        offset: {
            top: function () { return $(window).width() <= 980 ? 290 : 210 }
            , bottom: 270
        }
    })
});

    function setupOrientationHandler(){
        function orientationChange(){
            MBP.scaleFix();
            MBP.hideUrlBar();
        }

        // bind to event
        $(window).bind('orientationchange', orientationChange);
        // invoke on Setup.
        orientationChange();
    }
})();


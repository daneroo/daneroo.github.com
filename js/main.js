
(function(){

    $(document).ready(function(){
        setupOrientationHandler();

        // hidden/commented in portfolio
        $('.carousel').carousel(/* {interval:1000}*/)
        
        // Adjust active navbar title - yuck
        var $t = $('title').html();  
        if ($t.match(/Portfolio/)){
            $('ul.nav li').removeClass('active');
            $('ul.nav li a[href="/portfolio"]').parent().addClass('active');
        }
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


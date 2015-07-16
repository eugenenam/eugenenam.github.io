$(document).ready(function(){

    /** 
     * This part does the "fixed navigation after scroll" functionality
     * We use the jQuery function scroll() to recalculate our variables as the 
     * page is scrolled/
     */
    $(window).scroll(function(){
        var window_top = $(window).scrollTop() + 12; // the "12" should equal the margin-top value for nav.stick
        var div_top = $('#nav-anchor').offset().top;
            if (window_top > div_top) {
                $('nav').addClass('stick');
            } else {
                $('nav').removeClass('stick');
            }
    });


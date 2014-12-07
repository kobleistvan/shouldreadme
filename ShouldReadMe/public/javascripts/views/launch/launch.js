$("document").ready(function($){
    var nav = $('.main-menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            nav.addClass("navbar-fixed-top");
        } else {
            nav.removeClass("navbar-fixed-top");
        }
    });
    $('#get-st').click(function(){
        window.location.href = '/get_started';
    })
});
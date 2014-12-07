$("document").ready(function($){
    $(".disabled").click(function(event){
      event.preventDefault();
    });

    $(".submit-option.active").click(function( ev){
        ev.preventDefault();
        var $href = $(this).attr("href").substring(1);
        $(".starting-methods p").toggleClass("hide");
        $("."+$href).toggleClass("hide");
        $(".open-options").toggleClass("hide");
    });

    $(".open-options").click(function(ev){
        ev.preventDefault();
        $(this).toggleClass("hide");
        $(".starting-methods p").toggleClass("hide");
        $(".details").toggleClass("hide");
    });
});
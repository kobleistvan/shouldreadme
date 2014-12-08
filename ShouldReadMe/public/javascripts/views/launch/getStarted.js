$("document").ready(function($){
    $(".disabled").click(function(event){
      event.preventDefault();
    });

    $(".scratch-option").click(function( ev){
        ev.preventDefault();
        document.location.href = '/#dashboard'
    });

    $(".details-option").click(function(ev){
        ev.preventDefault();
        $(this).toggleClass("hide");
        $(".starting-methods p").toggleClass("hide");
        $(".details").toggleClass("hide");
    });
       
});
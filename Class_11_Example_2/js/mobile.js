$(function() {
    $("body").on("click", "#menu", function() {
        //can only click on the menu if it is visible - which means mobile
        //show the nav bar
        $("nav").toggleClass("menu-show");
    });
    $("nav > a").click(function() {
        //when you click a nav link - this function wll hide the nav bar
        $("nav").removeClass("menu-show");
    })
} )
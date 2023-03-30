$(function() {
    //select all nav links and respond to thier click
    $("nav > a").click(function() {
        //the code the will execute when a nav link is clicked
        //this means the element which was click from above,
        //in our case which link was clicked, We use the jQuery
        //function attr to get the indicated attribute
        let target = $(this).attr("href");
        //Find the element current with the show class, then remove that class so that it hides
        $(".show").removeClass("show");
        //Take the target page we captured above and add the show class so that it slides into view 
        $(target).addClass("show)");
    });
});
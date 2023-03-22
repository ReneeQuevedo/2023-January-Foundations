$(function() {
    $("#move").click(function() {
        $("#block1").toggleClass("move"); //don't need the period before class because the 'toggleClass function ONLY targets classes
    });
    $("#size").click(function() {
        $("#block1").toggleClass("size");
    });
    $("#opacity").click(function() {
        $("#block1").toggleClass("opacity");
    });
    $("#color").click(function() {
        $("#block1").toggleClass("color");
    });
});
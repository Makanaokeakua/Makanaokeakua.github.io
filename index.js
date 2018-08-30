function Main() {
    var trigger = $(".button-animated-javascript");
    var holder = $("#holder-js");
    var box = $(".box-js");
    trigger.css({
        "width":"50px",
        "height":"50px"
    });
    box.css({
        "width":"50px",
        "height":"50px",
        "background-color":"red",
        "border-radius":"10%",
        "transition":"transform 300ms ease-in-out"
    });
    trigger.hover(function(){
        box.css({
           "transform":"translate(150px) rotate(90deg)" 
        });
    },
                 function(){
        box.css({
           "transform":"translate(0px)" 
        });
    });
}
window.onload = Main;
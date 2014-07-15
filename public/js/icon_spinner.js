//constants
var circleArray = document.getElementsByClassName("circle"); // populates array of data-angles
var angle = 0;
var last_displayed_interest = "start"; 
var interests = ["web","music","design"];
var foo = "foo";


//functions
function colorswitch (currently_hovered_interest) { // switches 
    
    if (last_displayed_interest !== currently_hovered_interest) {
        for (i = 0; i < 3; i++) { 
            foo = (i == 0 ? interests[0] : (i == 1 ? interests[1] : interests[2])); // nested ternary, just for kicks :)
            document.getElementById(foo + "-a-color").classList.add('hide-img'); 
            document.getElementById(foo + "-b-color").classList.add('hide-img'); 
            document.getElementById(foo + "-a-black").classList.remove('hide-img');
            document.getElementById(foo + "-b-black").classList.remove('hide-img');
        }
        if (currently_hovered_interest !== "penn-rosen-title"){
            document.getElementById(currently_hovered_interest + "-a-black").classList.toggle('hide-img');
            document.getElementById(currently_hovered_interest + "-a-color").classList.toggle('hide-img');
            document.getElementById(currently_hovered_interest + "-b-black").classList.toggle('hide-img');
            document.getElementById(currently_hovered_interest + "-b-color").classList.toggle('hide-img');
        }
    }  
}

function offhover (just_hovered) { // resets angles, nullifies movement on multiple mouseovers of the same div
    switch(just_hovered) {
        case "web":
            angle = angle + (-180);
            spinner ();
            break;
        case "music":
            angle = angle + (-60);
            spinner ();
            break;
        case "design":
            angle = angle + (60);
            spinner ();
            break;
        case "start":
            break;        
    }
}

function spinner () { // spins the icon wheel in a circle while maintaining up and down orientation (in a sort of gyroscope effect)
    for (var i = 0, j = circleArray.length; i < j; i++) {
        var circle = circleArray[i]; // e.g. "180"
        var circleAngle = parseInt (circle.dataset.angle); // e.g. 180
        var totalAngle = angle + circleAngle 
        var style = "rotate(" + totalAngle + "deg) translate(6rem)";
        totalAngle =- totalAngle;
        style = style + " rotate(" + totalAngle + "deg)"
        circle.style.webkitTransform = style;
        circle.style.MozTransform = style;
        circle.style.msTransform = style;
        circle.style.OTransform = style;
        circle.style.Transform = style;
    }

}


document.onHover = function (currently_hovered_interest) {
    colorswitch(currently_hovered_interest);
    offhover(last_displayed_interest);
    if (currently_hovered_interest !== "penn-rosen-title") {
        switch(currently_hovered_interest) {
            case "web":
                angle = angle + (180);
                spinner ();
                break;
            case "music":
                angle = angle + (60);
                spinner ();
                break;
            case "design":
                angle = angle + (-60);
                spinner ();
                break;        
        }
    }
    last_displayed_interest = currently_hovered_interest;
}


// initialize spinner
spinner();
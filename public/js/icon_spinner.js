var circleArray = document.getElementsByClassName("circle"); // populates array of data-angles
var angle = 0;
var current_interest = "current_interest"; 

spinner();
offhover();

function offhover (interest) { // this function nullifies movement on multiple mouseovers of the same interest
    switch(interest) {
        case "current_interest":
            break;
        case "web": // interest
            angle = angle + (-180);
            spinner ();
            break;
        case "music": // interest
            angle = angle + (-60);
            spinner ();
            break;
        case "design": // interest
            angle = angle + (60);
            spinner ();
            break;        
    }
}

function spinner () { // spins the icon wheel in a circle while maintaining up and down orientation (in a sort of gyroscope effect)
    for (var i = 0, j = circleArray.length; i < j; i++) {
        var circle = circleArray[i]; // "180"
        var circleAngle = parseInt (circle.dataset.angle); // 180
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


document.onHover = function (interest) {
    offhover(current_interest);
    switch(interest) {
        case "web": // interest
            angle = angle + (180);
            spinner ();
            break;
        case "music": // interest
            angle = angle + (60);
            spinner ();
            break;
        case "design": // interest
            angle = angle + (-60);
            spinner ();
            break;        
    }
    current_interest = interest;
}

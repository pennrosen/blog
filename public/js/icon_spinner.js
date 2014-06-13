var circleArray = document.getElementsByClassName("circle");
var angle = 0;
var first = "first";

chargearray();
offhover();

function offhover (cat2) {
    switch(cat2) {
        case "first":
            break;
        case "web":
            angle = angle + (30*6);
            chargearray ();
            break;
        case "music":
            angle = angle + (-1*30*2);
            chargearray ();
            break;
        case "design":
            angle = angle + (30*2);
            chargearray ();
            break;        

    }
}

function chargearray () {
    for (var i = 0, j = circleArray.length; i < j; i++) {
        var circle = circleArray[i];
        var circleAngle = parseInt (circle.dataset.angle);
        var totalAngle = angle + circleAngle
        var style = "rotate(" + totalAngle + "deg) translate(6rem)";
        totalAngle = - totalAngle;
        style = style + " rotate(" + totalAngle + "deg)"
        circle.style.webkitTransform = style;
        circle.style.Transform = style;
    }

}

document.onkeydown = function (e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
        case 37:
            angle = angle + 30;
            chargearray ();
            break;
        case 39:
            angle = angle - 30;
            chargearray ();
            break;
    }
}

document.onHover = function (cat) {
    offhover(first);
    switch(cat) {
        case "web":
            angle = angle + (30*6);
            chargearray ();
            break;
        case "music":
            angle = angle + (30*2);
            chargearray ();
            break;
        case "design":
            angle = angle + (-1*30*2);
            chargearray ();
            break;        

    }
    first = cat;
}

// document.offHover = function (cat) {
//     switch(cat) {
//         case "web":
//             angle = angle + (30*6);
//             chargearray ();
//             break;
//         case "music":
//             angle = angle + (-1*30*2);
//             chargearray ();
//             break;
//         case "design":
//             angle = angle + (30*2);
//             chargearray ();
//             break;        

//     }
// }

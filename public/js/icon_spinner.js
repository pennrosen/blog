 var circleArray = document.getElementsByClassName("circle");
        var angle = 0;

        chargearray();

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

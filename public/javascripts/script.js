var interval = null;
var timeout = null;
var current = 0;
var next = 0;

var clearSlide = function (c) {
    switch (c) {
        case 0:
            $("#slide0").hide();
            $("#dot0").css("background-color", "#b8dfee");
            break;
        case 1:
            $("#slide1").hide();
            $("#dot1").css("background-color", "#b8dfee");
            break;
        case 2:
            $("#slide2").hide();
            $("#dot2").css("background-color", "#b8dfee");
    }

};

var showSlide = function (n) {
    switch (n) {
        case 0:
            console.log("change!");
            current = 0;
            $("#slide0").show();
            $("#dot0").css("background-color", "#79a9b0");
            break;
        case 1:
            console.log("change!");
            current = 1;
            $("#slide1").show();
            $("#dot1").css("background-color", "#79a9b0");
            break;
        case 2:
            console.log("change!");
            current = 2;
            $("#slide2").show();
            $("#dot2").css("background-color", "#79a9b0");
    }
};

var nextSlide = function () {
    switch (current) {
        case 0:
            next++;
            clearSlide(current);
            break;
        case 1:
            next++;
            clearSlide(current);
            break;
        case 2:
            next = 0;
            clearSlide(current);
    }
    showSlide(next);
};

var prevSlide = function () {
    switch (current) {
        case 0:
            next = 2;
            clearSlide(current);
            break;
        case 1:
            next--;
            clearSlide(current);
            break;
        case 2:
            next--;
            clearSlide(current);
    }
    showSlide(next);
};

$(document).ready(function(){
    $("#productsNav").mouseenter( function () {
        $(".dropdown").show();
    } ).mouseleave( function () {
        timeout = setTimeout( function () {
            $(".dropdown").hide();
        }, 100);
    });
    $(".dropdown").mouseenter( function () {
        clearTimeout(timeout);
    }).mouseleave( function () {
        $(this).hide();
    });

    $(".nav-item").mouseenter( function () {
        $(this).css("background-color", "#d5bcbc");
    } ).mouseleave( function () {
        $(this).css("background-color", "#c3a6a6");
    });


    //                                                                   Slideshow
    $("#slide0").show();

    $("#dot0").css("background-color", "#79a9b0");

    interval = setInterval(nextSlide, 4000);

    $(".slideshow-container").mouseenter( function () {
        clearInterval(interval);
    } ).mouseleave( function () {
        interval = setInterval(nextSlide, 4000);
    } );

    $(".next").click(nextSlide);

    $(".prev").click(prevSlide);

    $("#dot0").click(function () {
        if (current != 0) {
            clearSlide(current)
            showSlide(0);
        }
    });
    $("#dot1").click(function() {
        if (current != 1) {
            clearSlide(current)
            showSlide(1);
        }
    });
    $("#dot2").click(function() {
        if (current != 0) {
            clearSlide(current)
            showSlide(2);
        }
    });

});


$(document).ready(function () {
    let snitch = $(".snith_block");
    let l_side = $(".l_side");
    let r_side = $(".r_side");


    let deg = 0;
    let stop;

    function rotateObj() {
        stop = setInterval(function(){
            snitch.css("display", "block");
            deg += 180;
            l_side.rotate(deg);
            r_side.rotate(deg);
        }, 10);
    }

    let count = 1;


    function fly() {
        snitch.css("width", "500px");
        snitch.animate({
            left: `${Math.floor(Math.random() * (-400))}` + 'px',
            top: `${Math.floor(Math.random() * 100)}` + 'px',
            opacity: '1'
        }, 1000).animate({
            left: `${Math.floor(Math.random() * 300)*count}` + 'px',
            top: `${Math.floor(Math.random() * 400)}` + 'px',
            opacity: 0.3
        }, 800).animate({
            left: `${Math.floor(Math.random() * 300)*count/2}` + 'px',
            top: `${Math.floor(Math.random() * (-300))}` + 'px',
            opacity: 1
        }, 800).animate({
            right: `${Math.floor(Math.random() * 100)}` + 'px',
            bottom: `${Math.floor(Math.random() * 300)*count}` + 'px',
            opacity: '0'
        }, 600);
        count++;

    };


    $(".item").click(() => {
        rotateObj();
        fly();
    });

    $(".close").click(() => {
        clearTimeout(stop);
        snitch.css("display", "none");
    });
    
    $(".news").click(() => {
        clearTimeout(stop);
        snitch.css("display", "none");
    });


})
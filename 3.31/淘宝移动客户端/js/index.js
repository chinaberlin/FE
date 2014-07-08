window.onload = function () {

    var sliderOverflow = document.querySelector('.slider-overflow');
    var ul = document.querySelector('.slider-overflow ul');
    var startPageX;
    var index = 0;
    var old = 0;
    var lis = document.querySelectorAll('#slider>ul li');

    sliderOverflow.addEventListener('touchstart', function (e) {
        e.preventDefault();

        if (!e.changedTouches.length) {
            return;
        }

        var touch = e.changedTouches[0];

        startPageX = touch.pageX;

    });

    sliderOverflow.addEventListener('touchmove', function (e) {
        e.preventDefault();

        if (!e.changedTouches.length) {
            return;
        }

        var touch = e.changedTouches[0];

        var moveX = touch.pageX;


        ul.style.WebkitTransition = 0;
        ul.style.WebkitTransform = 'translate3d(' + (moveX - startPageX + ( -296 * index) + 'px') + ', 0px, 0px)';

    });

    sliderOverflow.addEventListener('touchend', function (e) {
        e.preventDefault();

        if (!e.changedTouches.length) {
            return;
        }

        var touch = e.changedTouches[0];

        var endX = touch.pageX;
        old = index;

        if(endX -startPageX === 0){
            // 解决点击图片后 移动问题
            return;
        }else if (endX - startPageX > 0) {
            if (index !== 0)
             index--;
        } else {
            if (index !== 2)
                index++;
        }

        ul.style.WebkitTransition = '300ms';
        ul.style.WebkitTransform = 'translate3d(' + (-296 * index + 'px') + ', 0px, 0px)';

        lis[old].removeAttribute('class');
        lis[index].setAttribute('class', 'active');


    });

    addEventListener('load', function(){
        setTimeout(function(){ window.scrollTo(0, 1); }, 100);
    });

}
/**
 * Created by onlyit on 14-4-30.
 */

(function ($) {

    $(function () {

        var defaultIndex = 0;
        var hoverIndex = 0;

        $('#menu,#menu a').on('click', function (e) {

            e.preventDefault();
            var target = e.target;
            var tagName = target.tagName.toLowerCase();
            if (tagName === 'span' || tagName === 'a') {
                defaultIndex = hoverIndex;

                if (tagName === 'span') {
                    var imgId = $(this).find('a').eq(hoverIndex).attr('href');
                } else {
                    var imgId = $(target).attr('href');
                }

                var imgTop = $('#' + imgId).offset().top;

                $('html,body').stop(true).animate({
                    scrollTop: imgTop
                });
            }
        });

        $('#menu').on('mouseover',function (e) {
            var target = e.target;
            if (target.tagName.toLowerCase() === 'a') {

                var eleWidth = $(target).innerWidth();
                var eleHeight = $(target).innerHeight();
                var eleOffset = $(target).offset();

                $(this).find('span').stop(true).animate({
                    left: eleOffset.left,
                    //top: eleOffset.top,
                    width: eleWidth,
                    height: eleHeight
                });

                hoverIndex = $(this).find('a').index(target);

            }
        }).on('mouseleave',function () {
                var defaultEle = $(this).find('a').eq(defaultIndex);
                var defaultEleWidth = defaultEle.innerWidth();
                var defaultEleOffset = defaultEle.offset();
                var defaultEleHeight = defaultEle.innerHeight();
                hoverIndex = defaultIndex;
                $(this).find('span').stop(true).animate({
                    left: defaultEleOffset.left,
                    //top: defaultEleOffset.top,
                    width: defaultEleWidth,
                    height: defaultEleHeight
                });
            }).trigger('mouseleave');


        $(window).on('resize',function () {
            $('#menu').trigger('mouseleave');
            $('#menu a').eq(defaultIndex).trigger('click');
        }).on('scroll', function () {
                var scrollTop = $(this).scrollTop();

                if (scrollTop > 60) {
                    $('#menu').stop(true).animate({top: scrollTop});
                } else if (scrollTop === 0) {
                    $('#menu').stop(true).animate({top: 0});
                }
            })


    })
})(jQuery)
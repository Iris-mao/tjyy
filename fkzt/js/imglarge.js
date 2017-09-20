(function($) {
    $.fn.extend({
        slider: function(options) {
            var settings = $.extend({
                speed: 500

            },
            options);
            return this.each(function() {
                var slidercontents = $(this).addClass('image-slider-contents');
                var slider = $('<div/>').addClass('image-slider').attr('id', slidercontents.attr('id'));
                slidercontents.removeAttr('id');
                slidercontents.before(slider);
                slider.append(slidercontents);
                var total = $('> div', slidercontents).length;
                var left = 0;
                var w;
                var width;
                var maxScroll;
                slider.append($('<div/>').css('display', 'none').addClass('preview').append($('<div/>').addClass('img-large')
                .append($('<img/>')))
                );
                $(document).click(function(e) {
                    if ($('.preview').css('display') == 'block')
                    $('.preview').fadeOut("slow");

                });
                function initialize() {
                    var tempElements = $('> div', slidercontents);
                    var allElements = new Array();
                    tempElements.each(function(index, el) {
                        allElements.push($('<div/>').addClass('' + (index + 1) + '').addClass('outer').append(el));

                    });

                    allElements = $(allElements);
                    $('> div', slidercontents).remove();
                    var wrapper = $('<div/>').addClass('contents-wrapper');
                    allElements.each(function(index, el) {

                        wrapper.append($(el));

                    });
                    slidercontents.append(wrapper);
                    wrapper.css({
                        'text-align': 'center'
                    });
                    $('> div > div', slidercontents).css('display', '');
                    $('.outer a').click(function(e) {
                        e.stopPropagation();
                        e.stopImmediatePropagation();


                    });
                    $('.outer').hover(function() {
                        $(this).addClass('active');
                    },
                    function() {
                        $(this).removeClass('active');
                    }).click(
                    function(e) {
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        var cls = $(this).attr('class').split(' ')[0];
                        var p = $(this).find('div');
                        var img = p.find('img').attr('src');
                        var preview = $('.preview');
                        var imgh = p.find('img').height();
                        var imgw = p.find('img').width()
                        var screenh = screen.height;
                        var screenw = screen.width;
                        var l = ((screenw - imgw) / 2) + 'px';
                        var t = ((screenh - imgw) / 2) + 'px';
                        console.log(imgh,imgw,screenh,screenw,l);
                        t -= t / 2;
                        preview.css({
                            left: 0,
                            top: '10%',
                            'margin':'10% 2%'

                        });
                        preview.find('img').attr('src', img).addClass(cls);
                        preview.fadeIn("slow");


                    });

                }
                initialize();

                function getDimensions(value) {
                    return value + 'px';

                }
            });
        }
    });

})(jQuery);

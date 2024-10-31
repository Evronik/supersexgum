$(document).ready(function(){

    // таймер обратного отсчета, до 00:00:00
    var now = new Date(),
        secPassed = now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();
    $('.countdown').countdown({
        until: (24 * 60 * 60 - secPassed),
        labels: ['Годы', 'Месяцы', 'Недели', 'Дни', 'Часов', 'Минут', 'Секунд'],
        labels1: ['Годы', 'Месяцы', 'Недели', 'Дни', 'Часов', 'Минут', 'Секунд'],
        format: 'HMS',
        layout: '<div class="timebox"><div class="n">{h10}</div><div class="n">{h1}</div><div class="l">{hl}</div></div><div class="timebox"><div class="n">{m10}</div><div class="n">{m1}</div><div class="l">{ml}</div></div><div class="timebox"><div class="n">{s10}</div><div class="n">{s1}</div><div class="l">{sl}</div></div>'
    });

    function lastpack(last){
        if (last>1){
            last--;
            $('.quantity .number').html(last);
            setTimeout(lastpack, 360000, last);
        }
    }
    lastpack(10);

    // выравниваем по высоте блоки отзывов
    $('.faq_row').each(function(){
        var mh = 0,
            box = $(this);
        box.find('.faq_wrapp').each(function () {
            var h_block = parseInt($(this).height());
            if(h_block > mh) {
                mh = h_block;
            };
        });
        box.find('.faq_wrapp').height(mh);
    });

    var rev=0;
    $('.reviews_box div').each(function(){
        var h_block = parseInt($(this).height());
        if(h_block > rev) {
            rev = h_block;
        };
    })
    $('.reviews_box div').height(rev);

    // smooth scroll
    $.localScroll({
        duration: 1000,
        hash: true,
        offset: -60
    });

    $('.close').click(function(){
        $(this).parent().slideUp(600)
    });
	
});
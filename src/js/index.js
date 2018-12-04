$('.tabs li').on('click', function() {
    var idx = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.cont>div').eq(idx).css('display', 'block').siblings().css('display', 'none');
})
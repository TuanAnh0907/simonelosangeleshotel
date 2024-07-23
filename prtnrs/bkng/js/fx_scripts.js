//masonry
$(document).ready(function () {
    $('#topHotelsContainer').masonry({
        itemSelector: '.hotelBoxContainer',
        singleMode: true,
        isResizable: true,
        isAnimated: true,
        animationOptions: {queue: false, duration: 500}
    });
});

//make link from div
$('.hotelBox').bind('click', function () {
    window.location = $('a:first', this).attr('href');
});

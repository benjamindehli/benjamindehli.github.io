function updateMasonry() {
    var container = $('.masonry-row').masonry({
        itemSelector: '.masonry-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
    container.imagesLoaded(function () {
        container.masonry();
    });
    container.masonry('reloadItems');
    container.masonry('layout');
}
$(window).on('load', function () {
    updateMasonry();
});
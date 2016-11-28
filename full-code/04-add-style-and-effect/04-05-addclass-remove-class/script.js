$('h2').addClass('highlight');

$('h2').removeClass('highlight');

$('h2').addClass(function() {
    return 'bordered';
});
// > [ <h2 class="expanded bordered">... ]

$('h2').removeClass(function() {
    return 'bordered';
});
// > [ <h2 class="expanded">... ]
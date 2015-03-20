
$('.box_checkbox').on('click', function () {
    var checkselect = $(this).children('input[type=checkbox]').attr('checked');
    if (typeof (checkselect) != 'undefined') {
        $(this).addClass('active');
        $(this).parent('div').addClass('checkactive');
    } else {
        $(this).parent('div').removeClass('checkactive');
        $(this).removeClass('active')
    }
});
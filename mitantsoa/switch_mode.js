$(document).ready(function(){
    $('#dark-mode').change(function () {
        if ($('#dark-mode').prop('checked') == true) {
            $('body').addClass('dark');
            $('body').removeClass('light');
            $('.label-light').show();
            $('.label-dark').hide();
        } else {
            $('body').removeClass('dark');
            $('body').addClass('light');
            $('.label-dark').show();
            $('.label-light').hide();
        }
    });
});
$(document).ready(function(){
    $('#dark-mode').change(function () {
        if ($('#dark-mode').prop('checked') == true) {
            $('body').addClass('dark');
        } else {
            $('body').removeClass('dark');
        }
    });
});
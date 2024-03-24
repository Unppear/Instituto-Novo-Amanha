'use strict';

/*---Função prime---*/
$(window).on('load', function() {
    /*---Popup---*/ 
    $('#open_contact').on('click', function() {
        $('.background_popup').fadeIn('500', () => {});
        $('.background_popup').css('display', 'flex');
    });
    $('.close').on('click', () => {
        $('.background_popup').fadeOut('300', () => {});
    })
});
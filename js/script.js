'use strict';

/*---Função prime---*/
$(window).on('load', function() {
    /*---Popup---*/ 
    $('#open_contact').on('click', function() {
        /*
            Codigo para mover descer ou subir a tela

            var alturaHtmlBody = $(document).height();
            $("html, body").animate({scrollTop: `${alturaHtmlBody}`}, 500);
        */
        $('.background_popup').fadeIn('500', () => {});
        $('.background_popup').css('display', 'flex');
    });
    $('.close').on('click', () => {
        $('.background_popup').fadeOut('500', () => {});
    })
});
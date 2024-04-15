'use strict';

/*---Função prime---*/
$(window).on('load', function() {
    /*---Popup---*/ 
    var popupBackground = $('.background_popup');

    $('#open_contact').on('click', function() {
        /*
            Codigo para mover descer ou subir a tela

            var alturaHtmlBody = $(document).height();
            $("html, body").animate({scrollTop: `${alturaHtmlBody}`}, 500);
        */
        popupBackground.fadeIn('500', () => {});
        popupBackground.css('display', 'flex');
    });
    $('.close').on('click', () => {
        popupBackground.fadeOut('500', () => {});
    })
    /*---Container escondido---*/
    var singOne = $('.one'), singTwo = $('.two'), singThree = $('.three'), 
        boxLinkOne = $('.one .box_link'), boxLinkTwo = $('.two .box_link'), boxlinkThree = $('.three .box_link');

    singOne.on('mouseenter', () => {
        boxLinkOne.fadeIn();
        boxLinkOne.css('display', 'flex');
    });
    singOne.on('mouseleave', () => {
        boxLinkOne.fadeOut();
    });

    singTwo.on('mouseenter', () => {
        boxLinkTwo.fadeIn();
        boxLinkTwo.css('display', 'flex');
    });
    singTwo.on('mouseleave', () => {
        boxLinkTwo.fadeOut();
    });

    singThree.on('mouseenter', () => {
        boxlinkThree.fadeIn();
        boxlinkThree.css('display', 'flex');
    });
    singThree.on('mouseleave', () => {
        boxlinkThree.fadeOut();
    });
    /*---Card---*/
    var card_background = $('.background_card'), open_centroPop = $('#open_centroPop'), card_centroPop = $('.centroPop_card');

    open_centroPop.on('click', () => {
        card_background.fadeIn('500', () => {});
        card_background.css('display', 'flex');

        card_centroPop.fadeIn('500', () => {});
        card_centroPop.css('display', 'grid');
    });
});
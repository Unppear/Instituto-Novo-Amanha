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
    $('#close_popup').on('click', () => {
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
    var card_background = $('.background_card'), close_centroPop = $('#close_centroPop'), open_centroPop = $('#open_centroPop'), card_centroPop = $('.centroPop_card'), 
    open_cras = $('#open_cras'), cras_card = $('.cras_card'), close_cras = $('#close_cras'), open_creas = $('#open_creas'), card_creas = $('.creas_card'), 
    close_creas = $('#close_creas');

    /*--Centro Pop---*/
    open_centroPop.on('click', () => {
        card_background.fadeIn('500', () => {});
        card_background.css('display', 'flex');

        card_centroPop.fadeIn('500', () => {});
        card_centroPop.css('display', 'grid');
    });

    close_centroPop.on('click', () => {
        card_background.fadeOut('500', () => {});
        card_centroPop.fadeOut('500', () => {});
    });

    /*--Cras---*/
    open_cras.on('click', () => {
        card_background.fadeIn('500', () => {});
        card_background.css('display', 'flex');

        cras_card.fadeIn('500', () => {});
        cras_card.css('display', 'grid');
    });

    close_cras.on('click', () => {
        card_background.fadeOut('500', () => {});
        cras_card.fadeOut('500', () => {});
    });

    /*---Creas---*/
    open_creas.on('click', () => {
        card_background.fadeIn('500', () => {});
        card_background.css('display', 'flex');

        card_creas.fadeIn('500', () => {});
        card_creas.css('display', 'grid');
    });

    close_creas.on('click', () => {
        card_background.fadeOut('500', () => {});
        card_creas.fadeOut('500', () => {});
    });
});
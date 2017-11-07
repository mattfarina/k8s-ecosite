$(document).foundation()

jQuery('img').on('load', function(){
    Foundation.reInit('equalizer');
});
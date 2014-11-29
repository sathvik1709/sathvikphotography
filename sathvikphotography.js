$(document).ready(function(){
    
    $('.categories').mouseenter(function(){
        $(this).fadeTo('fast',1);
    });
    $('.categories').mouseleave(function(){
        $(this).fadeTo('fast',0.75);
    });
    
    $('#image-gallery-button').on('click', function (event) {
        event.preventDefault();
        var borderless = true;
        $('#blueimp-gallery').data('useBootstrapModal', !borderless);
        $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
        blueimp.Gallery($('#links1 a'), $('#blueimp-gallery').data());
    });
    
    $('#borderless-checkbox').on('change', function () {
        var borderless = $(this).is(':checked');
        $('#blueimp-gallery').data('useBootstrapModal', !borderless);
        $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
    });
    
});

